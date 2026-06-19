import { addToCart, getCartQuantity } from "./cart-store.js";

let cartUiInitialized = false;

export function updateCartCount() {
  const count = getCartQuantity();
  const counters = document.querySelectorAll("[data-cart-count]");
  const bagLinks = document.querySelectorAll(".bag-button");

  counters.forEach((counter) => {
    counter.textContent = count;
  });

  bagLinks.forEach((bagLink) => {
    bagLink.setAttribute(
      "aria-label",
      `Shopping bag with ${count} ${count === 1 ? "item" : "items"}`,
    );
  });
}

function flashAddButton(button) {
  const originalHtml = button.dataset.originalHtml || button.innerHTML;

  button.dataset.originalHtml = originalHtml;
  button.innerHTML = "Added";
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML = button.dataset.originalHtml;
    button.disabled = false;
  }, 900);
}

function handleAddToBagClick(event) {
  const button = event.target.closest("[data-add-to-bag]");

  if (!button) {
    return;
  }

  const slug = button.dataset.addToBag;

  if (!slug) {
    throw new Error("Add to bag button is missing a book slug.");
  }

  addToCart(slug);
  flashAddButton(button);
}

export function initCartUi() {
  updateCartCount();

  if (cartUiInitialized) {
    return;
  }

  cartUiInitialized = true;
  window.addEventListener("cart:change", updateCartCount);
  document.addEventListener("click", handleAddToBagClick);
}
