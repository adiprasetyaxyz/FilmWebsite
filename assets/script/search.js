let keyword = '';
const searchInput = document.getElementById("search-input");
const searchKeyword = document.getElementById('search-keyword')
// Fungsi untuk menjalankan pencarian
const performSearch = () => {
    keyword = searchInput.value; 
    searchKeyword.innerText = `${keyword}`
    scrollToMovie();
    searchMovie();
}

//fungsi untuk mereset pencarian
const resetSearch = () => {
    searchInput.value = '';
    searchKeyword.innerText = ''
    performSearch()
}

const scrollToMovie = () => {
    const movieSection = document.getElementById("discover-list");
    movieSection.scrollIntoView({ behavior: "smooth" });
}

const searchMovie = () => {
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
        .then((response) => {
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
        .catch((error) => {
            console.error(error);
        });
}


export { performSearch,resetSearch, scrollToMovie };