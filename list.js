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
        <span>
        <h3> Titel:</h3><p>${movie.title}</p>
        </span>
        <span>
        <h3> Genre: </h3><p>${movie.genre}</p>
        </span>
        <span>
        <h3> Regissör: </h3><p>${movie.director}</p>
        </span>
        <span>
        <h3> Skådespelare:  </h3><p>${movie.actors}</p>
        </span>
        <span>
        <h3> IMDB:  </h3><p>${movie.imdb}</p>
        </span>
        <span>
        <h3> Rotten Tomatoes:  </h3><p>${movie.rottenTomatoes}</p>
        </span>
        <span id="summary-span">
        <h3>Beskrivning: </h3><p>${movie.plot}</p>
        </span>
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
