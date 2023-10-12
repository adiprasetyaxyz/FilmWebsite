function moreTvList(){
    // Mengambil elemen di dalam halaman HTML
    const moreTvElement = document.getElementById("more-tv");
    let page = "1";  // Ubah sesuai dengan halaman yang Anda inginkan
    
    const axios = require('axios');
    
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDFiNTUyMmVlZmUzZTYzYWUyMTAxYjI4NjIwNGJiYSIsInN1YiI6IjY1MjU2NjI1Y2VkYWM0MDBjNTNlOTBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gDkXQyUZytOmFHeSISt1YqbjPaGrVMmVm5p-duc7S0'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        // Data TV Show dari API
        const tvShows = response.data.results; // Ubah sesuai dengan struktur data API yang Anda gunakan
        // Membuat string HTML untuk menampilkan data TV Show
        const tvShowHTML = tvShows.map((tvShow) => {
          return `
            <div class="card">
            <img src="https://image.tmdb.org/t/p/w500${tvShow.poster_path}" alt="${tvShow.name}">
            <p class="overview">${tvShow.overview}</p>
            <div class="title-card">
            <p class="release-date"><i class="fa-solid fa-calendar-days fa-sm" style="color: #ffffff;"></i>${tvShow.first_air_date}</p>
            <span class="rating"><i class="fa-solid fa-star fa-sm" style="color: #e6b400;"></i>${tvShow.vote_average}</span>
            </div>
            <h2>${tvShow.name}</h2>
            </div>
          `;
        });
    
        // Menyusun string HTML ke dalam elemen "more-tv"
        moreTvElement.innerHTML = tvShowHTML.join("");
      })
      .catch(function (error) {
        console.error(error);
      });
}
    
export default moreTvList;
