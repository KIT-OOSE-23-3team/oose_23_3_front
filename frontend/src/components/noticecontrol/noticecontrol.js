var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var titleValue = document.getElementById("myTitleInput").value;
  var contentValue = document.getElementById("myContentInput").value;
  var text = document.createTextNode(titleValue + ": " + contentValue);
  li.appendChild(text);
  if (titleValue === '' || contentValue === '') {
    alert("제목과 내용은 반드시 입력해야합니다.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myTitleInput").value = "";
  document.getElementById("myContentInput").value = "";
}
