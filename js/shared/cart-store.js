import { findBookBySlug } from "../data/books.js";

const CART_STORAGE_KEY = "pagesAndCoCart";

function normalizeCartItem(item) {
  const quantity = Number(item.quantity);

  if (!item.slug || !Number.isFinite(quantity)) {
    return null;
  }

  return {
    slug: String(item.slug),
    quantity: Math.max(0, Math.floor(quantity)),
  };
}

function readCart() {
  const rawCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!rawCart) {
    return [];
  }

  try {
    const cart = JSON.parse(rawCart);

    if (!Array.isArray(cart)) {
      return [];
    }

    return cart
      .map(normalizeCartItem)
      .filter((item) => item && item.quantity > 0);
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cart:change"));
}

export function getCartItems() {
  return readCart();
}

export function getCartQuantity() {
  return readCart().reduce((total, item) => total + item.quantity, 0);
}

export function getCartItemQuantity(slug) {
  const item = readCart().find((cartItem) => cartItem.slug === slug);

  return item ? item.quantity : 0;
}

export function addToCart(slug) {
  const book = findBookBySlug(slug);

  if (!book) {
    throw new Error(`Cannot add unknown book slug: ${slug}`);
  }

  const cart = readCart();
  const existingItem = cart.find((item) => item.slug === slug);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      slug,
      quantity: 1,
    });
  }

  saveCart(cart);
}

export function updateCartItem(slug, quantity) {
  const book = findBookBySlug(slug);

  if (!book) {
    throw new Error(`Cannot update unknown book slug: ${slug}`);
  }

  const nextQuantity = Math.floor(Number(quantity));

  if (!Number.isFinite(nextQuantity)) {
    throw new Error(`Cannot update cart item ${slug} to an invalid quantity.`);
  }

  const nextCart = readCart()
    .map((item) => {
      if (item.slug !== slug) {
        return item;
      }

      return {
        ...item,
        quantity: nextQuantity,
      };
    })
    .filter((item) => item.quantity > 0);

  saveCart(nextCart);
}

export function removeFromCart(slug) {
  const nextCart = readCart().filter((item) => item.slug !== slug);

  saveCart(nextCart);
}

export function getDetailedCartItems() {
  return readCart()
    .map((cartItem) => {
      const book = findBookBySlug(cartItem.slug);

      if (!book) {
        return null;
      }

      return {
        ...cartItem,
        book,
        lineTotal: book.price * cartItem.quantity,
      };
    })
    .filter(Boolean);
}

export function getCartSubtotal() {
  return getDetailedCartItems().reduce(
    (total, item) => total + item.lineTotal,
    0,
  );
}
