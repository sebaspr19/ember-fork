function toggleMenu() {
	const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}
let currentIndex = 0;
function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Cambio automático cada 5 segundos
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

// Inicia en la primera slide
showSlide(currentIndex);
