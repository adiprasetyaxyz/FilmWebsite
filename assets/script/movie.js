
import { resetSearch } from './search';
import { scrollToMovie } from './search';
let page = 1;

const moreMovieList = () => {
    // Mengambil elemen di dalam halaman HTML
    const moreMovieElement = document.getElementById("more-movie");
   
   
    
    const axios = require('axios');
    
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
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
        moreMovieElement.innerHTML = moviesHTML.join("");
        
        
      })
      .catch((error) => {
        console.error(error);
      });
    
    }

  const changePage = () => {
     //membuat event click
 const pageButton = document.getElementsByClassName('buttonPage');
 for (const pageNumber of pageButton) {
     pageNumber.addEventListener('click', (e) => {
         const clickedPageNumber = pageNumber.value; // Mendapatkan nilai (nomor halaman) dari tombol yang diklik
         
           // Menghapus kelas 'active-page' dari semua tombol halaman
           for (const button of pageButton) {
            button.classList.remove('active-page');
        }
         // Menambahkan kelas 'active-page' ke tombol halaman yang aktif
         pageNumber.classList.add('active-page');
         
       
    // Setel halaman saat ini
    page = clickedPageNumber;
         moreMovieList()
         resetSearch()
         scrollToMovie()
     });
 }

}
    
    export { moreMovieList, changePage};
