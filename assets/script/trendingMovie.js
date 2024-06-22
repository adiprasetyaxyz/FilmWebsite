const trendingMovieList = () => {
// Mengambil elemen di dalam halaman HTML
const movieDataElement = document.getElementById("movie-data");

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDFiNTUyMmVlZmUzZTYzYWUyMTAxYjI4NjIwNGJiYSIsInN1YiI6IjY1MjU2NjI1Y2VkYWM0MDBjNTNlOTBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gDkXQyUZytOmFHeSISt1YqbjPaGrVMmVm5p-duc7S0'
  }
};

axios
  .request(options)
  .then((response) => {
    // Data film dari API
    const movies = response.data.results; 
    const moviesHTML = movies.map((movie) => {
      return `
        <div class="card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p class="overview">${movie.overview}</p>
        <div class="title-card">
        <p class="release-date"><i class="fa-solid fa-calendar-days fa-sm" style="color: #ffffff;"></i> ${movie.release_date}</p>
        <span class="rating"><i class="fa-solid fa-star fa-sm" style="color: #e6b400;"></i> ${movie.vote_average}</span>
        </div>
        <h2>${movie.title}</h2>
        </div>
        
      `;
    });

    // Menyusun string HTML ke dalam elemen "movie-data"
    movieDataElement.innerHTML = moviesHTML.join("");
  })
  .catch((error) => {
    console.error(error);
  });
}
const buttonLeftRight = () => {
//membuat tombol untuk slider popular list
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const movieData = document.getElementById("movie-data");
const scrollDistance = 200;  

// Fungsi untuk menggulir ke kanan
nextBtn.addEventListener("click", () => {
    movieData.scrollLeft += scrollDistance;
});

// Fungsi untuk menggulir ke kiri
prevBtn.addEventListener("click", () => {
    movieData.scrollLeft -= scrollDistance;
});
}
export {trendingMovieList, buttonLeftRight};
