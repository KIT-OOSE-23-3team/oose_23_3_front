import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CustomerSupportLookuppage.css"

const CustomerSupportLookuppage = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState({
    title: "제목",
    text: "내용",
  });

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

  return (
    <div className="noticeSearch-page">
      <div className="noticeSearch-content">
        <div className="noticeSearch-listArea">
          <h3>목록</h3>
          <div className="noticeSearch-list">
            <ul id="myUL">
              {notices.map((notice) => (
                <li
                  id="myLI"
                  key={notice.id}
                  onClick={() => handleTitleClick(notice)}
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
        <div className="noticeSearch-viewArea">
          <h3>공지사항 조회</h3>
          <div className="noticeSearch-viewContainer">
            <div className="noticeSearch-view">
              <div className="noticeSearch-viewLine">
                <div className="noticeSearch-viewTitle">제목</div>
                <div className="noticeSearch-viewTitleContent">{selectedNotice.title}</div>
              </div>
              <div className="noticeSearch-viewLine">
                <div className="noticeSearch-viewTitle">내용</div>
                <div className="noticeSearch-viewContent">{selectedNotice.text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportLookuppage;
