const btnAddSidebar = document.querySelector(".addsidbar");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".closeSidbar");
btnAddSidebar.onclick = (e) => {
  overlay.classList.toggle("show");
};

btnClose.onclick = (e) => {
  overlay.classList.toggle("show");
};
