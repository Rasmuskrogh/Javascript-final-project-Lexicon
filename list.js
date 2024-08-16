admin = JSON.parse(localStorage.getItem("admin"));
const listParent = document.querySelector(".favorites-list");
const main = document.querySelector("main");
//Sending the user back to the login page if admin = false
const onLoad = () => {
  window.addEventListener("load", () => {
    if (!admin) {
      window.location.href = "/login/login.html";
    }
  });
};

//Adding a list from local Storage of liked movies
const generateList = () => {
  const likedMovies = JSON.parse(localStorage.getItem("likedMovies"));
  if (!likedMovies) {
    const fallbackMessage = document.createElement("h2");
    fallbackMessage.innerText = "Du har inga favoritfilmer ännu";
    listParent.insertAdjacentElement("beforeend", fallbackMessage);
  } else {
    for (movie of likedMovies) {
      const html = `
        <li>
        <img src=${movie.poster}>
        <div>
        <h3> Titel: ${movie.title}</h3>
        <h3> Genre: ${movie.genre}</h3>
        <h3> Regissör: ${movie.director}</h3>
        <h3> IMDB:  ${movie.imdb}</h3>
        <h3> Rotten Tomatoes:  ${movie.rottenTomatoes}</h3>
        <h3> Skådespelare:  ${movie.actors}</h3>
        <h3>Beskrivning: ${movie.plot}</h3>
        </div>
        </li>
        `;
      listParent.insertAdjacentHTML("beforeend", html);
    }
    clearFavorites();
  }
};

const clearFavorites = () => {
  const clearFavoritesList = document.createElement("h4");
  clearFavoritesList.innerText = "Rensa favoritlista";
  main.insertAdjacentElement("beforeend", clearFavoritesList);
  clearFavoritesList.addEventListener("click", () => {
    localStorage.removeItem("likedMovies");
    location.replace(location.href);
  });
};
onLoad();
generateList();
