const moviePoster = document.querySelector(".movies-poster");
const movieTitle = document.querySelector("#title");
const moviePlot = document.querySelector("#summary");
const movieGenres = document.querySelector("#genres");
const movieDirector = document.querySelector("#director");
const movieActors = document.querySelector("#actors");
const movieIMDB = document.querySelector("#imdb");
const movieRotten = document.querySelector("#rotten");
const heart = document.querySelector("#heart");
const cross = document.querySelector("#cross");

//Setting admin privileges, getting movies from the API and setting a movie on the page.
const onLoad = () => {
  window.addEventListener("load", async () => {
    try {
      setAdmin();
      await getMovies();
      await getMovie();
      // isMovieSaved();
    } catch (error) {}
  });
};

//Getting movies from the API and setting them in local Storage
const getMovies = async () => {
  try {
    const response = await fetch(
      "https://rasmuskrogh.github.io/MovieAPI/movieAPI.json"
      /* "https://github.com/Rasmuskrogh/MovieAPI/blob/main/movieAPI.json" */
      /* "https://santosnr6.github.io//Data/movies_long.json" */
    );
    const data = await response.json();

    localStorage.setItem("Movies", JSON.stringify(data));
  } catch (error) {}
};

//Getting a random movie from localStorage and displaying poster and title on the page
const getMovie = () => {
  const movies = JSON.parse(localStorage.getItem("Movies"));
  const randomMovieId = Math.floor(Math.random() * movies.length - 1);
  moviePoster.src = movies[randomMovieId].poster;
  movieTitle.innerText = movies[randomMovieId].title;
  moviePlot.innerText = movies[randomMovieId].plot;
  movieGenres.innerText = movies[randomMovieId].genre;
  movieDirector.innerText = movies[randomMovieId].directors;
  movieActors.innerText = movies[randomMovieId].actors;
  movieIMDB.innerText = movies[randomMovieId].imdb_rating + " / 10";
  movieRotten.innerText = movies[randomMovieId].rotten_tomatoes;
};

//Putting the current movie into the "likedMovies" and putting it i local storage and then updating the displayed movie
const movieLiked = () => {
  let likedMovies = JSON.parse(localStorage.getItem("likedMovies"));
  heart.addEventListener("click", () => {
    if (!likedMovies) {
      likedMovies = [];
    }
    const movieObject = {
      title: movieTitle.innerText,
      poster: moviePoster.src,
      plot: moviePlot.innerText,
      genre: movieGenres.innerText,
      director: movieDirector.innerText,
      actors: movieActors.innerText,
      imdb: movieIMDB.innerText,
      rottenTomatoes: movieRotten.innerText,
    };
    const exists = likedMovies.some(
      (likedMovie) => likedMovie.title === movieObject.title
    );
    if (!exists) {
      likedMovies.push(movieObject);
    } else {
    }
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
    getMovie();
  });
};

//Putting the current movie into the "dislikedMovies" and putting it i local storage and then updating the displayed movie
const movieDisliked = () => {
  let dislikedMovies = JSON.parse(localStorage.getItem("dislikedMovies"));
  cross.addEventListener("click", () => {
    if (!dislikedMovies) {
      dislikedMovies = [];
    }
    const movieObject = {
      title: movieTitle.innerText,
      poster: moviePoster.src,
    };
    const exists = dislikedMovies.some(
      (dislikedMovie) => dislikedMovie.title === movieObject.title
    );
    if (!exists) {
      dislikedMovies.push(movieObject);
    } else {
    }
    localStorage.setItem("dislikedMovies", JSON.stringify(dislikedMovies));
    getMovie();
  });
};

//Setting admin privileges if user is logged in
const setAdmin = () => {
  let getAdmin = JSON.parse(localStorage.getItem("admin"));

  if (!getAdmin) {
    getAdmin = localStorage.setItem("admin", "false");
  }
  const admin = getAdmin === true ? true : false;
  if (!admin) {
    window.location.href = "login/login.html";
  }
};

//Executing the functions
onLoad();
movieLiked();
movieDisliked();

// const isMovieSaved = () => {
//
//   const movieObject = {
//     title: movieTitle.innerText,
//     poster: moviePoster.src,
//   };
//   let likedMovies = JSON.parse(localStorage.getItem("likedMovies"));
//   let dislikedMovies = JSON.parse(localStorage.getItem("dislikedMovies"));

//   if (likedMovies) {
//
//     const existsDisliked = dislikedMovies.some(
//       (dislikedMovie) => dislikedMovie.title === movieObject.title
//     );
//     if (existsDisliked) {
//       getMovie();
//     }
//   }

//   if (likedMovies) {
//     const existsLiked = likedMovies.some(
//       (likedMovie) => likedMovie.title === movieObject.title
//     );
//     if (existsLiked) {
//       getMovie();
//     }
//   }
// };
