import axios from 'axios';

const addCloseButton = () => {
  const myNodelist = document.getElementsByTagName("LI");
  for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
};

const addCheckedToggle = () => {
  const list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
};

const newPost = () => {
  const li = document.createElement("li");
  const titleInput = document.getElementById("myTitleInput");
  const textInput = document.getElementById("myContentInput");
  const title = titleInput.value;
  const text = textInput.value;
  const postText = document.createTextNode(`${title}: ${text}`);
  li.appendChild(postText);
  if (title === '' || text === '') {
    alert("제목과 내용은 반드시 입력해야합니다.");
  } else {
    document.getElementById("myUL").appendChild(li);
    titleInput.value = "";
    textInput.value = "";

    const notice = {
      title: title,
      text: text
    };

    axios.post('/postNotice', notice)
      .then(response => {
        console.log(response.data);
        titleInput.value = "";
        textInput.value = "";
      })
      .catch(error => {
        console.error(error);
      });
  }
};

const initializeApp = () => {
  addCloseButton();
  addCheckedToggle();

  const registrationBtn = document.getElementById("registration");
  registrationBtn.addEventListener("click", newPost);
};

document.addEventListener("DOMContentLoaded", initializeApp);

export { addCloseButton, addCheckedToggle, newPost, initializeApp };
