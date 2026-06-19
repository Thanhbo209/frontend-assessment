import { books, findBookBySlug } from "../data/books.js";
import { createBookCard } from "../shared/book-card.js";
import { initCartUi } from "../shared/cart-ui.js";
import { formatPrice } from "../shared/format.js";
import { renderLayout } from "../shared/layout.js";
import { initAuthModal } from "../shared/auth-modal.js";
import { initNewsletter } from "../shared/newsletter.js";

const fallbackDetails = {
  format: "Paperback",
  pages: "312",
  published: "2023",
  publisher: "Pages & Co.",
  language: "English",
  isbn: "978-1-23456-000-0",
};

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function setAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

function getSelectedBook() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("book") || "the-lighthouse-keeper";

  return findBookBySlug(slug) || books[0];
}

function renderBookDetail(book) {
  const details = book.details || fallbackDetails;

  document.title = `${book.title} | Pages & Co.`;

  setText("[data-detail='breadcrumb-title']", book.title);
  setText("[data-detail='category']", book.category);
  setText("[data-detail='title']", book.title);
  setText("[data-detail='author']", book.author);
  setText("[data-detail='rating']", book.rating);
  setText("[data-detail='pages']", details.pages);
  setText("[data-detail='published']", details.published);
  setText("[data-detail='price']", formatPrice(book.price));
  setText("[data-detail='button-price']", formatPrice(book.price));

  setText(
    "[data-detail='description']",
    book.description ||
      "A carefully selected Pages & Co. title chosen for readers who enjoy memorable characters and atmospheric storytelling.",
  );

  setText("[data-detail='format']", details.format);
  setText("[data-detail='spec-pages']", details.pages);
  setText("[data-detail='spec-published']", details.published);
  setText("[data-detail='publisher']", details.publisher);
  setText("[data-detail='language']", details.language);
  setText("[data-detail='isbn']", details.isbn);

  if (book.oldPrice) {
    setText("[data-detail='old-price']", formatPrice(book.oldPrice));
  } else {
    const oldPrice = document.querySelector("[data-detail='old-price']");

    if (oldPrice) oldPrice.remove();
  }

  setAttribute("[data-detail='image']", "src", book.image);
  setAttribute("[data-detail='image']", "alt", `Cover art for ${book.title}`);

  const detailAddButton = document.querySelector("[data-detail-add]");

  if (detailAddButton) {
    detailAddButton.dataset.addToBag = book.slug;
  }
}

function getRelatedBooks(book) {
  const sameCategoryBooks = books.filter(
    (item) => item.category === book.category && item.slug !== book.slug,
  );

  const fallbackBooks = books.filter(
    (item) =>
      item.slug !== book.slug &&
      !sameCategoryBooks.some((relatedBook) => relatedBook.slug === item.slug),
  );

  return [...sameCategoryBooks, ...fallbackBooks].slice(0, 2);
}

function renderRelatedBooks(book) {
  const container = document.querySelector("[data-related-books]");

  if (!container) return;

  container.innerHTML = getRelatedBooks(book).map(createBookCard).join("");
}

renderLayout();
initAuthModal();

const selectedBook = getSelectedBook();

renderBookDetail(selectedBook);
renderRelatedBooks(selectedBook);
initCartUi();
initNewsletter();
