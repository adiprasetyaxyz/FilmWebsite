function moreMovieList(){
    // Mengambil elemen di dalam halaman HTML
    const moreMovieElement = document.getElementById("more-movie");
    
    const axios = require('axios');
    
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDFiNTUyMmVlZmUzZTYzYWUyMTAxYjI4NjIwNGJiYSIsInN1YiI6IjY1MjU2NjI1Y2VkYWM0MDBjNTNlOTBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gDkXQyUZytOmFHeSISt1YqbjPaGrVMmVm5p-duc7S0'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        // Data film dari API
        const movies = response.data.results; // Ubah sesuai dengan struktur data API yang Anda gunakan
        // Membuat string HTML untuk menampilkan data film
        const moviesHTML = movies.map((movie) => {
          return `
            <div class="card">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p class="overview">${movie.overview}</p>
            <div class="title-card">
            <p class="release-date">${movie.release_date}</p>
            <span class="rating"><i class="fa-solid fa-star fa-sm" style="color: #e6b400;"></i>${movie.vote_average}</span>
            </div>
            <h2>${movie.title}</h2>
            </div>
            
          `;
        });
    
        // Menyusun string HTML ke dalam elemen "movie-data"
        moreMovieElement.innerHTML = moviesHTML.join("");
      })
      .catch(function (error) {
        console.error(error);
      });
    
    }
    
    
    export default moreMovieList;
    