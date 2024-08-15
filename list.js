admin = JSON.parse(localStorage.getItem("admin"));

const onLoad = () => {
  window.addEventListener("load", () => {
    if (!admin) {
      window.location.href = "/login/login.html";
    }
  });
};

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
      <h3> Genre: brödtext</h3>
      <h3> Regissör: Brödnamn Namnson</h3>
      <h3> IMDB:  X.X</h3>
      <h3> Skådespelare:  Fösta Namnson Andra Namnson</h3>
      <h3>Beskrivning</h3>
      </div>
      </li>
      `;
    listParent.insertAdjacentHTML("beforeend", html);
  }
};

onLoad();
generateList();
