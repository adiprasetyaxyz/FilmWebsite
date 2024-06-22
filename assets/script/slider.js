const sliderHero = () => {
    let currentSlide = 0;
    
    // Simpan elemen-elemen dalam variabel
    const hero = document.getElementById("hero");
    const slides = document.querySelectorAll(".hero-item");

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    };

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentSlide);

    const nextSlide = () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    };

   
    setInterval(nextSlide, 5000);
};

export default sliderHero;
