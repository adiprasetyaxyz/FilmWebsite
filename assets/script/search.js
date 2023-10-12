let keyword = '';
const searchInput = document.getElementById("search-input");
const searchKeyword = document.getElementById('search-keyword')
// Fungsi untuk menjalankan pencarian
function performSearch() {
    keyword = searchInput.value; // Mengambil kata kunci pencarian dari input

    searchKeyword.innerText = `${keyword}`

    searchMovie(); // Memanggil fungsi searchMovie untuk mencari hasil pencarian
}
//fungsi untuk mereset pencarian
function resetSearch(){
    searchInput.value = '';
    searchKeyword.innerText = ''
    performSearch()
}

function searchMovie() {
    const axios = require('axios');
    
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDFiNTUyMmVlZmUzZTYzYWUyMTAxYjI4NjIwNGJiYSIsInN1YiI6IjY1MjU2NjI1Y2VkYWM0MDBjNTNlOTBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gDkXQyUZytOmFHeSISt1YqbjPaGrVMmVm5p-duc7S0'
        }
    };
    
    axios
        .request(options)
        .then(function (response) {
            // Data film dari API
            const searchs = response.data.results; 
            const searchsHTML = searchs.map((search) => {
                return `
                <div class="card">
                <img src="https://image.tmdb.org/t/p/w500${search.poster_path}" alt="${search.title}">
                <p class="overview">${search.overview}</p>
                <div class="title-card">
                <p class="release-date"><i class="fa-solid fa-calendar-days fa-sm" style="color: #ffffff;"></i>${search.release_date}</p>
                <span class="rating"><i class="fa-solid fa-star fa-sm" style="color: #e6b400;"></i>${search.vote_average}</span>
                </div>
                <h2>${search.title}</h2>
                </div>
              `;
            });
    
            // Menyusun string HTML ke dalam elemen "search-data"
            const searchElement = document.getElementById("search-data");
            searchElement.innerHTML = searchsHTML.join("");
        })
        .catch(function (error) {
            console.error(error);
        });
}


export { performSearch,resetSearch };