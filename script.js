const moviePoster = document.querySelector(".movies-poster");
const movieTitle = document.querySelector("#title");
const heart = document.querySelector("#heart");
const cross = document.querySelector("#cross");
const likedMovies = [];
const dislikedMovies = [];

const onLoad = () => {
  window.addEventListener("load", async () => {
    try {
      getMovies();
    } catch (error) {
      console.log(error);
    }
  });
};

const getMovies = async () => {
  try {
    const response = await fetch(
      "https://santosnr6.github.io//Data/movies_long.json"
    );
    const data = await response.json();
    console.log(data);
    localStorage.setItem("Movies", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

const getMovie = () => {
  const movies = JSON.parse(localStorage.getItem("Movies"));
  const randomMovieId = Math.floor(Math.random() * movies.length - 1);
  moviePoster.src = movies[randomMovieId].poster;
  movieTitle.innerText = movies[randomMovieId].title;
};

const movieLiked = () => {
  heart.addEventListener("click", () => {
    const movieObject = {
      title: movieTitle.innerText,
      poster: moviePoster.src,
    };
    if (likedMovies.length >= 0) {
      likedMovies.push(movieObject);
    }
    console.log(movieObject);
    let i = 0;
    let a = false;
    console.log(likedMovies[i].title);
    console.log(movieObject.title);

    while (a === false || i === likedMovies.length - 1) {
      if (likedMovies[i].title !== movieObject.title) {
        a = true;
        likedMovies.push(movieObject);
      }
      i++;
    }
    console.log(likedMovies);
    /*  for (likedMovie of likedMovies) {
      if (likedMovie.title !== movieObject.title) {
        likedMovies.push(movieObject);
      } else {
        console.log("already in");
        console.log(likedMovies);
      }
    } */
    getMovie();
  });
};
const movieDisliked = () => {};
movieLiked();
getMovie();
//onLoad();
