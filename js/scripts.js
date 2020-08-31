if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}

var itemList = document.getElementById("notes");

itemList.addEventListener("click", removeNote);

let count = Number(window.localStorage.getItem("count"));

if (!count) {
  window.localStorage.setItem("count", "0");
}

function createNote(noteTitle, noteBody) {
  if (count >= 0) {
    document.getElementById("nonotes").classList = "hidden";
  }
  var li = document.createElement("li");
  var a = document.createElement("a");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  var ul = document.getElementById("notes");
  var xButton = document.createElement("button");

  xButton.classList.add("delete");

  let xText = document.createTextNode("X");
  let h2T = document.createTextNode(noteTitle);
  let pB = document.createTextNode(noteBody);

  h2.appendChild(h2T);
  p.appendChild(pB);
  xButton.appendChild(xText);

  a.appendChild(h2);
  a.appendChild(xButton);
  a.appendChild(p);
  a.setAttribute("href", "#");

  li.appendChild(a);
  ul.appendChild(li);
}

function createNoteInput(e) {
  e.preventDefault();

  var noteTitle = document.getElementById("newNoteTitle").value;
  var noteBody = document.getElementById("newNoteBody").value;

  document.getElementById("newNoteTitle").value = "";
  document.getElementById("newNoteBody").value = "";

  count += 1;
  window.localStorage.setItem("count", count);

  while (window.localStorage.getItem(noteTitle)) {
    noteTitle += " - 1";
  }
  window.localStorage.setItem(noteTitle, noteBody);

  createNote(noteTitle, noteBody);
}

function removeNote(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete the note?")) {
      let li = e.target.parentElement.parentElement;
      itemList.removeChild(li);

      count -= 1;
      window.localStorage.setItem("count", count);
      window.localStorage.removeItem(e.target.previousElementSibling.innerText);

      if (count < 1) {
        document.getElementById("nonotes").className = "";
      }
    }
  }
}

for (i = 0; i < count + 1; i++) {
  let noteTitle = window.localStorage.key(i);
  let noteBody = window.localStorage.getItem(noteTitle);

  if (noteTitle !== "count" && noteTitle) {
    createNote(noteTitle, noteBody);
  }
}

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteInput, false);
