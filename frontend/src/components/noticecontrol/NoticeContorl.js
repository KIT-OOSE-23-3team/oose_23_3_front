import React, { useState } from 'react';
import axios from 'axios';

const NoticeControl = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notices, setNotices] = useState([]);

  const addCloseButton = () => {
    const myNodelist = document.getElementsByTagName('LI');
    for (let i = 0; i < myNodelist.length; i++) {
      const span = document.createElement('SPAN');
      const txt = document.createTextNode('\u00D7');
      span.className = 'close';
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
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
      .post('/postNotice', notice)
      .then((response) => {
        console.log(response.data);
        setTitle('');
        setText('');
        setNotices((prevNotices) => [...prevNotices, notice]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // componentDidMount
  useEffect(() => {
    addCloseButton();
    addCheckedToggle();
  }, []);

  return (
    <div className="header">
      <h2 style={{ margin: '5px' }}>공지사항 등록</h2>
      <label htmlFor="myTitleInput">제목</label>
      <input
        type="text"
        id="myTitleInput"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <br />
      <label htmlFor="myContentInput">내용</label>
      <textarea
        id="myContentInput"
        placeholder="내용을 입력해주세요."
        rows="6"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <br />
      <br />
      <span
        id="registration"
        onClick={handleRegistration}
        className="addBtn"
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
