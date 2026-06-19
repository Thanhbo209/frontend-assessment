import { formatPrice } from "./format.js";

export function createBookCard(book) {
  const badge = book.tags.includes("bestseller")
    ? "Best Seller"
    : book.tags.includes("new")
      ? "New"
      : "";

  const detailUrl = `./book-detail.html?book=${book.slug}`;

  return `
    <article
      class="book-card"
      data-book-card
      data-title="${book.title.toLowerCase()}"
      data-author="${book.author.toLowerCase()}"
      data-category="${book.category.toLowerCase()}"
    >
      <a class="book-cover-link" href="${detailUrl}" aria-label="View details for ${book.title}">
        <div class="book-cover">
          ${badge ? `<span class="book-badge">${badge}</span>` : ""}

          <img
            class="book-cover__image"
            src="${book.image}"
            alt="Cover art for ${book.title}"
            loading="lazy"
          />
        </div>
      </a>

      <div class="book-card__body">
        <h3 class="book-card__title">
          <a href="${detailUrl}">${book.title}</a>
        </h3>

        <p class="book-card__author">${book.author}</p>

        <div class="book-card__meta">
          <p>
            <strong>${formatPrice(book.price)}</strong>
            ${book.oldPrice ? `<del>${formatPrice(book.oldPrice)}</del>` : ""}
          </p>

          <p aria-label="Rating ${book.rating} out of 5">
            ★ ${book.rating}
          </p>
        </div>

        <button
          class="add-to-bag-button"
          type="button"
          data-add-to-bag="${book.slug}"
        >
          Add to bag
        </button>
      </div>
    </article>
  `;
}

export function initBookCardSearch(inputSelector = "#book-search") {
  const searchInput = document.querySelector(inputSelector);

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const bookCards = [...document.querySelectorAll("[data-book-card]")];

    bookCards.forEach((card) => {
      const searchableText = [
        card.dataset.title,
        card.dataset.author,
        card.dataset.category,
      ].join(" ");

      card.hidden = !searchableText.includes(query);
    });
  });
}
