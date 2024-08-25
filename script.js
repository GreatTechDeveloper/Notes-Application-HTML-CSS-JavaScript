const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// جایگذاری آیتم ها در جاوااسکریپت
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "input-box";
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

// برای پاک کردن
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("input", () => {
  updateStorage();
});

