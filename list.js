admin = JSON.parse(localStorage.getItem("admin"));
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
  console.log(likedMovies);
  for (movie of likedMovies) {
    const listParent = document.querySelector(".favorites-list");
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
};

onLoad();
generateList();
