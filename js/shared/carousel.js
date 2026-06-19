export function initCarousel() {
  const slides = [...document.querySelectorAll("[data-slide]")];
  const dots = [...document.querySelectorAll("[data-carousel-dot]")];
  const previousButton = document.querySelector("[data-carousel-previous]");
  const nextButton = document.querySelector("[data-carousel-next]");

  if (!slides.length || !dots.length || !previousButton || !nextButton) return;

  let activeIndex = 0;

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("hero-slide--active", slideIndex === activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("hero-dot--active", dotIndex === activeIndex);
    });
  }

  previousButton.addEventListener("click", () => {
    showSlide(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(activeIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  showSlide(0);
}
