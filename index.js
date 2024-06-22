import { trendingMovieList, buttonLeftRight } from "./assets/script/trendingMovie";
import { moreMovieList, changePage } from "./assets/script/movie";
import { moreTvList, changePageTv } from "./assets/script/tvShow";
import { performSearch, resetSearch, scrollToMovie } from "./assets/script/search";
import './assets/script/component/nav';
import './style/style.css';
import sliderHero from "./assets/script/slider.js";
import makeBtnPage from './assets/script/page'

document.addEventListener("DOMContentLoaded", () => {
    sliderHero();
    trendingMovieList();
    moreMovieList();
    makeBtnPage();
    changePage();
    changePageTv();
    buttonLeftRight();
});

const idList = document.getElementById('discover-list');

const movieBtn = document.getElementById('movie-btn');
movieBtn.addEventListener('click', (e) => {
    const moreTv = document.getElementById('more-tv');
    moreTv.remove();

    const active = document.getElementById('active');
    active.remove();

    const addActive = document.createElement('span');
    addActive.setAttribute('id', 'active');
    movieBtn.appendChild(addActive);

    const moreMovieElement = document.createElement("div");
    moreMovieElement.setAttribute("id", "more-movie");
    moreMovieElement.setAttribute('class', 'card-container');

    idList.appendChild(moreMovieElement);

    moreMovieList();
    resetSearch();
});

const tvBtn = document.getElementById('tv-btn');
tvBtn.addEventListener('click', (e) => {
    const moreMovie = document.getElementById('more-movie');
    moreMovie.remove();

    const moreTvElement = document.createElement("div");
    moreTvElement.setAttribute("id", "more-tv");
    moreTvElement.setAttribute('class', 'card-container');

    const active = document.getElementById('active');
    active.remove();

    const addActive = document.createElement('span');
    addActive.setAttribute('id', 'active');
    tvBtn.appendChild(addActive);

    idList.appendChild(moreTvElement);

    moreTvList();
    resetSearch();
});

const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("form");

searchButton.addEventListener("click", performSearch);
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    performSearch();
});