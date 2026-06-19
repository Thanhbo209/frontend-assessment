import {
  getCartItemQuantity,
  getCartQuantity,
  getCartSubtotal,
  getDetailedCartItems,
  removeFromCart,
  updateCartItem,
} from "../shared/cart-store.js";
import { initCartUi } from "../shared/cart-ui.js";
import { formatPrice } from "../shared/format.js";
import { renderLayout } from "../shared/layout.js";
import { initAuthModal } from "../shared/auth-modal.js";
import { initNewsletter } from "../shared/newsletter.js";

function renderCartItems(container) {
  const items = getDetailedCartItems();

  container.innerHTML = items
    .map(
      ({ book, quantity, lineTotal }) => `
        <article class="cart-item" data-cart-item="${book.slug}">
          <a class="cart-item__image-link" href="./book-detail.html?book=${book.slug}">
            <img
              class="cart-item__image"
              src="${book.image}"
              alt="Cover art for ${book.title}"
            />
          </a>

          <div class="cart-item__info">
            <h2 class="cart-item__title">
              <a href="./book-detail.html?book=${book.slug}">
                ${book.title}
              </a>
            </h2>
            <p class="cart-item__author">${book.author}</p>

            <button
              class="cart-item__remove"
              type="button"
              data-remove-item="${book.slug}"
            >
              Remove
            </button>
          </div>

          <div class="cart-item__quantity" aria-label="Change quantity">
            <button type="button" data-decrease-item="${book.slug}">&minus;</button>
            <span>${quantity}</span>
            <button type="button" data-increase-item="${book.slug}">+</button>
          </div>

          <p class="cart-item__total">${formatPrice(lineTotal)}</p>
        </article>
      `,
    )
    .join("");
}

function renderSummary(elements) {
  const quantity = getCartQuantity();
  const subtotal = getCartSubtotal();

  elements.subtotalLabel.textContent = `Subtotal (${quantity} ${
    quantity === 1 ? "item" : "items"
  })`;
  elements.subtotalElement.textContent = formatPrice(subtotal);
  elements.totalElement.textContent = formatPrice(subtotal);
}

function renderCartPage(elements) {
  const quantity = getCartQuantity();
  const hasItems = quantity > 0;

  renderCartItems(elements.cartItemsContainer);
  renderSummary(elements);

  elements.cartItemsContainer.hidden = !hasItems;
  elements.cartSummary.hidden = !hasItems;
  elements.emptyState.hidden = hasItems;
}

function initCartPageActions(elements) {
  document.addEventListener("click", (event) => {
    const increaseButton = event.target.closest("[data-increase-item]");
    const decreaseButton = event.target.closest("[data-decrease-item]");
    const removeButton = event.target.closest("[data-remove-item]");

    if (increaseButton) {
      const slug = increaseButton.dataset.increaseItem;

      updateCartItem(slug, getCartItemQuantity(slug) + 1);
      renderCartPage(elements);
      return;
    }

    if (decreaseButton) {
      const slug = decreaseButton.dataset.decreaseItem;

      updateCartItem(slug, getCartItemQuantity(slug) - 1);
      renderCartPage(elements);
      return;
    }

    if (removeButton) {
      removeFromCart(removeButton.dataset.removeItem);
      renderCartPage(elements);
    }
  });
}

function initCartPage() {
  const elements = {
    cartItemsContainer: document.querySelector("[data-cart-items]"),
    cartSummary: document.querySelector(".cart-summary"),
    emptyState: document.querySelector("[data-cart-empty]"),
    subtotalLabel: document.querySelector("[data-summary-subtotal-label]"),
    subtotalElement: document.querySelector("[data-summary-subtotal]"),
    totalElement: document.querySelector("[data-summary-total]"),
  };

  if (
    !elements.cartItemsContainer ||
    !elements.cartSummary ||
    !elements.emptyState ||
    !elements.subtotalLabel ||
    !elements.subtotalElement ||
    !elements.totalElement
  ) {
    return;
  }

  renderCartPage(elements);
  initCartPageActions(elements);
}

renderLayout();
initAuthModal();
initCartUi();
initNewsletter();
initCartPage();
