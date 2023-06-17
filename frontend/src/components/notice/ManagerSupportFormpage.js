import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManagerSupportFormpage.css";
import NavbarLeftNoticeForm from "./nav/NavbarLeftNoticeForm";
import NavbarTopNotice from "./nav/NavbarTopNotice";

const ManagerSupportFormpage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const addCheckedToggle = () => {
    const list = document.querySelector("ul");
    list.addEventListener("click", function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
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
    if (title === "") {
      alert("제목을 입력해주세요");
    } else if (text === "") {
      alert("내용을 입력해주세요");
    } else {
      const notice = {
        title: title,
        text: text,
      };

      axios
          .post("http://localhost:8000/postNotice", notice, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response.data);

            if (response.data === "등록함") {
              setTitle("");
              setText("");
            } else {
              alert("관리자만이 공지사항을 등록할 수 있습니다.");
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }
  };

  return (
    <div className="App">
      <NavbarTopNotice />
      <div className="main-content">
        <NavbarLeftNoticeForm />
        <div className="noticeReg-Page">
          <h2>공지사항 등록</h2>
          <div className="noticeReg-input">
            <div className="noticeReg-label">제목</div>
            <input
              type="text"
              id="myTitleInput"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="noticeReg-input">
            <div className="noticeReg-label">내용</div>
            <textarea
              id="myContentInput"
              placeholder="내용을 입력해주세요."
              rows="6"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <span
            id="noticeReg-reg"
            onClick={handleRegistration}
            className="addBtn"
          >
            등록
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManagerSupportFormpage;
