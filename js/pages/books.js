import { books, categoryFilters } from "../data/books.js";
import { createBookCard } from "../shared/book-card.js";
import { initCartUi } from "../shared/cart-ui.js";
import { renderLayout } from "../shared/layout.js";
import { initAuthModal } from "../shared/auth-modal.js";
import { initNewsletter } from "../shared/newsletter.js";

const params = new URLSearchParams(window.location.search);

let activeCategory = params.get("category") || "All";
let activeSort = "featured";
let activeSearch = "";

function normalize(value) {
  return String(value).toLowerCase().trim();
}

function getFeaturedScore(book) {
  let score = 0;

  if (book.tags.includes("featured")) score += 3;
  if (book.tags.includes("bestseller")) score += 2;
  if (book.tags.includes("new")) score += 1;

  return score;
}

function getSortedBooks(filteredBooks) {
  return [...filteredBooks].sort((a, b) => {
    if (activeSort === "rating-desc") {
      return b.rating - a.rating;
    }

    if (activeSort === "price-asc") {
      return a.price - b.price;
    }

    if (activeSort === "price-desc") {
      return b.price - a.price;
    }

    if (activeSort === "title-asc") {
      return a.title.localeCompare(b.title);
    }

    return getFeaturedScore(b) - getFeaturedScore(a);
  });
}

function getFilteredBooks() {
  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      activeCategory === "All" || book.category === activeCategory;

    const searchableText = normalize(
      `${book.title} ${book.author} ${book.category}`,
    );

    const matchesSearch =
      activeSearch.length === 0 || searchableText.includes(activeSearch);

    return matchesCategory && matchesSearch;
  });

  return getSortedBooks(filteredBooks);
}

function renderFilters(filterContainer) {
  filterContainer.innerHTML = categoryFilters
    .map(
      (category) => `
        <button
          class="filter-button ${category === activeCategory ? "filter-button--active" : ""}"
          type="button"
          data-category-filter="${category}"
        >
          ${category}
        </button>
      `,
    )
    .join("");
}

function renderCatalog(elements) {
  const visibleBooks = getFilteredBooks();

  elements.catalogGrid.innerHTML = visibleBooks.map(createBookCard).join("");

  elements.countElement.textContent = `${visibleBooks.length} ${
    visibleBooks.length === 1 ? "title" : "titles"
  } in the collection`;

  elements.emptyElement.hidden = visibleBooks.length > 0;

  renderFilters(elements.filterContainer);
}

function initFilters(elements) {
  elements.filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");

    if (!button) return;

    activeCategory = button.dataset.categoryFilter;
    renderCatalog(elements);
  });
}

function initSort(elements) {
  elements.sortSelect.addEventListener("change", () => {
    activeSort = elements.sortSelect.value;
    renderCatalog(elements);
  });
}

function initNavbarSearch(elements) {
  const searchInput = document.querySelector("#book-search");

  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    activeSearch = normalize(searchInput.value);
    renderCatalog(elements);
  });
}

function initCatalogPage() {
  const elements = {
    catalogGrid: document.querySelector("[data-catalog-grid]"),
    filterContainer: document.querySelector("[data-category-filters]"),
    sortSelect: document.querySelector("[data-sort-select]"),
    countElement: document.querySelector("[data-catalog-count]"),
    emptyElement: document.querySelector("[data-catalog-empty]"),
  };

  if (
    !elements.catalogGrid ||
    !elements.filterContainer ||
    !elements.sortSelect ||
    !elements.countElement ||
    !elements.emptyElement
  ) {
    return;
  }

  renderCatalog(elements);
  initFilters(elements);
  initSort(elements);
  initNavbarSearch(elements);
}

renderLayout();
initAuthModal();
initCatalogPage();
initCartUi();
initNewsletter();
