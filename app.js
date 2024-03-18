// Carousel için gerekli JavaScript kodları
const carousel = document.getElementById('projectCarousel');
const carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 5000, // 5 saniyede bir otomatik geçiş
  pause: 'hover' // Fare üzerine gelindiğinde geçişi durdur
});
