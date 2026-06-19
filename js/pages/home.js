import { genres, getBooksByTag } from "../data/books.js";
import { createBookCard, initBookCardSearch } from "../shared/book-card.js";
import { initCarousel } from "../shared/carousel.js";
import { initCartUi } from "../shared/cart-ui.js";
import { renderLayout } from "../shared/layout.js";
import { initAuthModal } from "../shared/auth-modal.js";
import { initNewsletter } from "../shared/newsletter.js";

function renderGenres() {
  const container = document.querySelector("[data-genres]");

  if (!container) return;

  container.innerHTML = genres
    .map(
      (genre) => `
        <article
          class="genre-card genre-card--${genre.theme}"
          data-genre="${genre.name.toLowerCase()}"
        >
          <div class="genre-card__content">
            <h3 class="genre-card__title">${genre.name}</h3>
            <p class="genre-card__count">${genre.count} titles</p>
          </div>

          <img
            class="genre-card__image"
            src="${genre.image}"
            alt=""
            loading="lazy"
          />
        </article>
      `,
    )
    .join("");
}

function renderBookSection(selector, tag, limit) {
  const container = document.querySelector(selector);

  if (!container) return;

  container.innerHTML = getBooksByTag(tag, limit).map(createBookCard).join("");
}

renderLayout();
initAuthModal();
renderGenres();
renderBookSection("[data-books='featured']", "featured", 5);
renderBookSection("[data-books='bestseller']", "bestseller", 4);
renderBookSection("[data-books='new']", "new", 4);

initCarousel();
initBookCardSearch();
initCartUi();
initNewsletter();
