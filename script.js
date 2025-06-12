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

// Cambio automático cada 5 segundos
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

// Inicia en la primera slide
showSlide(currentIndex);

// Formulario de reserva
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('reservaForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (form.checkValidity()) {
        form.style.display = 'none';
        document.getElementById('mensajeExito').style.display = 'block';
      }
    });
  }

  // Animación scroll
  const slideElements = document.querySelectorAll('.hidden-slide');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-slide');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  slideElements.forEach(el => observer.observe(el));
});

// Modal de imagen ampliada
function verImagen(rutaImagen) {
  const img = document.getElementById("imagen-ampliada");
  img.src = rutaImagen;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

