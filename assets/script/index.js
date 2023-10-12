import makeBtnPage from "./page";
import trendingMovieList from "./trendingMovie";
import { moreMovieList, changePage} from "./movie"
import {moreTvList, changePageTv} from "./tvShow";
import {performSearch, resetSearch} from "./search";

trendingMovieList();
moreMovieList();
makeBtnPage();
changePage();
changePageTv();



const idList = document.getElementById('discover-list')
// movieBtn.addEventListener('click', (e) => {
//     idList.innerHTML = 
//     moreTvList();

// })
const movieBtn = document.getElementById('movie-btn');
movieBtn.addEventListener('click', (e) => {
    // Hapus elemen "more-movie"
   const moreTv =document.getElementById('more-tv');
   moreTv.remove();

    //buat active element
    const active = document.getElementById('active');
    active.remove();
    
    const addActive = document.createElement('span');
    addActive.setAttribute('id','active');
    movieBtn.appendChild(addActive);
    // Buat elemen "more-tv"
    const moreMovieElement = document.createElement("div");
    moreMovieElement.setAttribute("id", "more-movie");
    moreMovieElement.setAttribute('class', 'card-container')
    // Tempelkan elemen "more-tv" ke dalam dokumen

    idList.appendChild(moreMovieElement);
    
    // Panggil fungsi moreTvList
    moreMovieList();
    resetSearch();

   
});


const tvBtn = document.getElementById('tv-btn');
tvBtn.addEventListener('click', (e) => {
    // Hapus elemen "more-movie"
    const moreMovie =document.getElementById('more-movie');
    moreMovie.remove();
    
    // Buat elemen "more-tv"
    const moreTvElement = document.createElement("div");
    moreTvElement.setAttribute("id", "more-tv");
    moreTvElement.setAttribute('class', 'card-container')
    //buat active element
    const active = document.getElementById('active');
    active.remove();
    
    const addActive = document.createElement('span');
    addActive.setAttribute('id','active');
    tvBtn.appendChild(addActive);
       
    


    // Tempelkan elemen "more-tv" ke dalam dokumen
    

    idList.appendChild(moreTvElement);

    // Panggil fungsi moreTvList
    moreTvList();
    resetSearch();
    
});


// Seleksi elemen input dan tombol pencarian

const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("form"); // Tambahan seleksi elemen form

// Tambahkan event listener untuk pencarian
searchButton.addEventListener("click", performSearch);
searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form dari pengiriman default
    performSearch();
});


