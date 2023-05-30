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
  const titleValue = document.getElementById("myTitleInput").value;
  const contentValue = document.getElementById("myContentInput").value;
  const text = document.createTextNode(`${titleValue}: ${contentValue}`);
  li.appendChild(text);
  if (titleValue === '' || contentValue === '') {
    alert("제목과 내용은 반드시 입력해야합니다.");
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myTitleInput").value = "";
    document.getElementById("myContentInput").value = "";
  }
};

document.addEventListener("DOMContentLoaded", function() {
  addCloseButton();
  addCheckedToggle();

  const registrationBtn = document.getElementById("registration");
  registrationBtn.addEventListener("click", newPost);
});

