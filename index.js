const form = document.querySelector("form");

// Storage == Stockage
function storeList() {
  window.localStorage.newProject = list.innerHTML;
}

function getProject() {
  if (window.localStorage.newProject) {
    list.innerHTML = window.localStorage.newProject;
  } else {
    list.innerHTML += ` <li> Clicquez pour supprimer </li>`;
  }
}

window.addEventListener("load", getProject);

// Add a event on the elements
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value} </li>`;
  item.value = " ";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
