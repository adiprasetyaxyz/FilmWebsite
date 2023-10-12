import makeBtnPage from "./page";
import trendingMovieList from "./trendingMovie";
import moreMovieList from "./movie";
import moreTvList from "./tvShow";

trendingMovieList();
moreMovieList();
makeBtnPage();

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
    
});

   

