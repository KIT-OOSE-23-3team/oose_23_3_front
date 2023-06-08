import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoticeControl = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notices, setNotices] = useState([]);

  const addCloseButton = () => {
    // const myNodelist = document.getElementsByTagName('LI');
    // for (let i = 0; i < myNodelist.length; i++) {
    //   const span = document.createElement('SPAN');
    //   const txt = document.createTextNode('\u00D7');
    //   span.className = 'close';
    //   span.appendChild(txt);
    //   myNodelist[i].appendChild(span);
    // }
      //TODO 다른 곳에도 close 버튼이 생성됨
  };

  const addCheckedToggle = () => {
    const list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRegistration = () => {
    if (title === '' || text === '') {
      alert('제목과 내용은 반드시 입력해야합니다.');
      return;
    }

    const notice = {
      title: title,
      text: text
    };

    axios
      .post('http://localhost:8000/postNotice', notice, {withCredentials: true})
      .then((response) => {
          console.log(response.data);

          if (response.data === "등록함") {
              setTitle("");
              setText("");
              setNotices((prevNotices) => [...prevNotices, notice]);
          } else {
              alert("관리자만이 공지사항을 등록할 수 있습니다.");
              //TODO 추후 페이지 접근 자체를 불가능하게 만들기 임시로 alert 사용
          }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    addCloseButton();
    addCheckedToggle();
  }, []);

  const styles = {
    header: {
      textAlign: 'center',
    },
    label: {
      border: '1px solid gray',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#999999',
      width: '50px',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    myContentInput: {
      height: '150px',
      width: '250px',
      resize: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    myTitleInput: {
      width: '250px',
    },
    registration: {
      border: '1px solid gray',
      borderRadius: '5px',
      padding: '5px',
      backgroundColor: '#599732',
      color: 'white',
      cursor: 'pointer'
    },
  };

  return (
    <div style={styles.header}>
      <h2 style={{ margin: '5px' }}>공지사항 등록</h2>
      <label htmlFor="myTitleInput" style={styles.label}>
        제목
      </label>
      <input
        type="text"
        id="myTitleInput"
        placeholder="제목을 입력해주세요."
        style={styles.myTitleInput}
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <br />
      <label htmlFor="myContentInput" style={styles.label}>
        내용
      </label>
      <textarea
        id="myContentInput"
        placeholder="내용을 입력해주세요."
        rows="6"
        style={styles.myContentInput}
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <br />
      <br />
      <span
        id="registration"
        onClick={handleRegistration}
        className="addBtn"
        style={styles.registration}
      >
        등록
      </span>

      <ul id="myUL">
        {notices.map((notice, index) => (
          <li key={index}>{`${notice.title}: ${notice.text}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeControl;