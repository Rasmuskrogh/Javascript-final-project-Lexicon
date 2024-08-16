const logo = document.querySelector(".logo-section");
const filter = document.querySelector(".filter-section");
const movie = document.querySelector("#movie");
const list = document.querySelector("#list");
const user = document.querySelector("#user");


//Setting routing between the different pages
const routing = () => {
  logo.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  filter.addEventListener("click", () => {
    window.location.href = "./filter.html";
  });
  movie.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  list.addEventListener("click", () => {
    window.location.href = "./list.html";
  });
  user.addEventListener("click", () => {
    window.location.href = "./account.html";
  });
};

routing();
