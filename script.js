function rotateSlides(containerId) {
  const container = document.getElementById(containerId);
  const slides = container.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === i);
    });
  }

  showSlide(index);
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
}

rotateSlides("product-slides");
rotateSlides("success-slides");