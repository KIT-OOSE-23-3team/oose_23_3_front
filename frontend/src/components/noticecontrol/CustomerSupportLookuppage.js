import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerSupportLookuppage = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/noticeFindAll").then((r) => {
      setNotices(r.data);
    })
  }, []);

  const handleTitleClick = (notice) => {
    setSelectedNotice(notice);
  };

  const handleCheckboxChange = (notice) => {
    setSelectedNotice(notice);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const listContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const listStyle = {
    backgroundColor: '#dcdcdc',
    flex: '0 0 30%',
    height: '200px',
    width: '100px',//여기가 목록 전체 배경 조절
    overflow: 'auto',
    borderRadius: '5px',
  };

  const noticeItemStyle = {
    backgroundColor: '#dcdcdc',
    border: '1px solid #ccc',
    cursor: 'pointer',
    height: '20px',
    width: '98px',//여기가 목록 각개 칸 조절하는 곳
    overflow: 'hidden',
  };

  const noticeInfoContainerStyle = {
    backgroundColor: '#dcdcdc',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '200px',
    width: '300px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const noticeInfoTitleStyle = {
    backgroundColor: '#a0a0a0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    height: '30px',
    width: '40px',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const TitleStyle = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    marginLeft: '5px',
    padding: '5px',
    width: '200px', //여기가 제목 칸 늘리는 부분
    overflow: 'auto',
  };

  const ContentStyle = {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    display: 'flex',
    marginLeft: '5px',
    padding: '5px',
    height: '135px',
    width: '200px', //여기가 내용 칸늘리는 부분
    overflow: 'auto',
  };

  return (
    <div>
      <div style={containerStyle}></div>
      <div style={listContainerStyle}>
        <div style={{ marginRight: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>목록</h3>
          <div style={listStyle}>
            <ul id="myUL" style={{ listStyle: 'none', padding: 0 }}>
              {notices.map((notice) => (
                <li
                  key={notice.id}
                  onClick={() => handleTitleClick(notice)}
                  style={noticeItemStyle}
                >
                  <input
                    type="checkbox"
                    checked={selectedNotice === notice}
                    onChange={() => handleCheckboxChange(notice)}
                  />
                  {notice.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {selectedNotice ? (
          <div>
            <h3 style={{ marginBottom: '10px' }}>공지사항 조회</h3>
            <div style={noticeInfoContainerStyle}>
              <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={noticeInfoTitleStyle}>제목</div>
                  <div style={TitleStyle}>{selectedNotice.title}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={noticeInfoTitleStyle}>내용</div>
                  <div style={ContentStyle}>{selectedNotice.text}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 style={{ marginBottom: '10px' }}>공지사항 조회</h3>
            <div style={noticeInfoContainerStyle}>
              <div style={{ padding: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={noticeInfoTitleStyle}>제목</div>
                  <div style={TitleStyle}>공지사항을 선택해 주세요</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={noticeInfoTitleStyle}>내용</div>
                  <div style={ContentStyle}>내용</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerSupportLookuppage;
