// Simpan elemen-elemen dalam variabel
const hero = document.getElementById("hero");
const slides = document.querySelectorAll(".hero-item");

let currentSlide = 0; // Menyimpan indeks slide saat ini

// Fungsi untuk menampilkan slide yang sesuai
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Fungsi untuk menampilkan slide sebelumnya
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}



// Otomatis ganti slide setiap beberapa detik (misalnya, 5 detik)
setInterval(nextSlide, 5000);

//membuat tombol untuk slider popular list
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const movieData = document.getElementById("movie-data");
const scrollDistance = 200; // Jarak pengguliran setiap kali tombol ditekan

// Fungsi untuk menggulir ke kanan
nextBtn.addEventListener("click", () => {
    movieData.scrollLeft += scrollDistance;
});

// Fungsi untuk menggulir ke kiri
prevBtn.addEventListener("click", () => {
    movieData.scrollLeft -= scrollDistance;
});

