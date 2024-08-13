const moviePoster = document.querySelector(".movies-poster");
const movieTitle = document.querySelector("#title");
const heart = document.querySelector("#heart");
const cross = document.querySelector("#cross");
const dislikedMovies = [];

const onLoad = () => {
  window.addEventListener("load", async () => {
    try {
      await getMovies();
      getMovie();
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
  let likedMovies = JSON.parse(localStorage.getItem("likedMovies"));
  heart.addEventListener("click", () => {
    if (!likedMovies) {
      likedMovies = [];
    }
    console.log(likedMovies);
    const movieObject = {
      title: movieTitle.innerText,
      poster: moviePoster.src,
    };

    const exists = likedMovies.some(
      (likedMovie) => likedMovie.title === movieObject.title
    );

    if (!exists) {
      likedMovies.push(movieObject);
    } else {
      console.log("säg hej!");
    }

    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
    getMovie();
  });
};
const movieDisliked = () => {};
onLoad();
movieLiked();

/*     for (i; i < likedMovies.length; i++) {
      if (likedMovies[i].title !== movieObject.title)
    }
    while (a === false && i === likedMovies.length - 1) {
      if (likedMovies[i].title !== movieObject.title) {
        a = true;
        likedMovies.push(movieObject);
      }
      i++;
    } */
