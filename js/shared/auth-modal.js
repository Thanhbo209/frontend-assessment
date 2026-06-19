/**
 * auth-modal.js
 * Reusable login modal — injects once into document.body,
 * wires the Sign in button(s), Escape key, overlay click,
 * and the demo auth form.
 */

const MODAL_HTML = `
<div class="auth-modal" data-auth-modal hidden>
  <div class="auth-modal__overlay" data-auth-close></div>

  <section
    class="auth-modal__dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="auth-modal-title"
  >
    <button
      class="auth-modal__close"
      type="button"
      aria-label="Close sign in modal"
      data-auth-close
    >×</button>

    <div class="auth-modal__brand" aria-hidden="true">P</div>

    <h2 class="auth-modal__title" id="auth-modal-title">Welcome back</h2>

    <p class="auth-modal__description">
      Sign in to access your bag, orders and wishlist.
    </p>

    <form class="auth-form" data-auth-form novalidate>
      <label for="auth-email">Email</label>
      <input
        id="auth-email"
        name="email"
        type="email"
        placeholder="you@example.com"
        autocomplete="email"
      />

      <label for="auth-password">Password</label>
      <input
        id="auth-password"
        name="password"
        type="password"
        placeholder="••••••••"
        autocomplete="current-password"
      />

      <button class="auth-form__submit" type="submit">Sign in</button>

      <p class="auth-form__message" data-auth-message aria-live="polite"></p>
    </form>

    <p class="auth-modal__footer">
      New here?
      <a href="#" data-create-account>Create an account</a>
    </p>
  </section>
</div>
`;

let _opener = null; // element that triggered the modal

function getModal() {
  return document.querySelector("[data-auth-modal]");
}

function getDialog() {
  const modal = getModal();
  return modal ? modal.querySelector(".auth-modal__dialog") : null;
}

function getFocusable() {
  const dialog = getDialog();
  if (!dialog) return [];
  return [
    ...dialog.querySelectorAll(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    ),
  ];
}

function openModal(opener) {
  const modal = getModal();
  if (!modal) return;

  _opener = opener || null;
  modal.removeAttribute("hidden");
  document.body.classList.add("modal-open");

  // Move focus into the first focusable element
  requestAnimationFrame(() => {
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  });
}

function closeModal() {
  const modal = getModal();
  if (!modal) return;

  modal.setAttribute("hidden", "");
  document.body.classList.remove("modal-open");

  // Clear any message
  const msg = modal.querySelector("[data-auth-message]");
  if (msg) {
    msg.textContent = "";
    msg.className = "auth-form__message";
  }

  // Return focus to the element that opened the modal
  if (_opener && typeof _opener.focus === "function") {
    _opener.focus();
  }
  _opener = null;
}

function setMessage(text, type) {
  const modal = getModal();
  if (!modal) return;
  const msg = modal.querySelector("[data-auth-message]");
  if (!msg) return;
  msg.textContent = text;
  msg.className = `auth-form__message auth-form__message--${type}`;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const modal = getModal();
  if (!modal) return;

  const email = modal.querySelector("#auth-email").value.trim();
  const password = modal.querySelector("#auth-password").value.trim();

  if (!email || !password) {
    setMessage("Please fill in both fields.", "error");
    return;
  }

  // Simple email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setMessage("Please enter a valid email address.", "error");
    return;
  }

  setMessage("Signed in for demo purposes.", "success");

  // Close after a short delay so the user sees the success message
  setTimeout(() => {
    closeModal();
  }, 1400);
}

function handleKeydown(event) {
  if (event.key !== "Escape" && event.key !== "Tab") return;

  const modal = getModal();
  if (!modal || modal.hasAttribute("hidden")) return;

  if (event.key === "Escape") {
    closeModal();
    return;
  }

  // Trap focus inside the dialog on Tab
  if (event.key === "Tab") {
    const focusable = getFocusable();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
}

export function initAuthModal() {
  // Guard — inject only once
  if (document.querySelector("[data-auth-modal]")) {
    _wireEvents();
    return;
  }

  document.body.insertAdjacentHTML("beforeend", MODAL_HTML);
  _wireEvents();
}

function _wireEvents() {
  const modal = getModal();
  if (!modal) return;

  // Close triggers (overlay + close button)
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-auth-close]")) {
      closeModal();
    }
  });

  // Form submit
  const form = modal.querySelector("[data-auth-form]");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }

  // "Create an account" — no-op link (demo)
  const createLink = modal.querySelector("[data-create-account]");
  if (createLink) {
    createLink.addEventListener("click", (e) => {
      e.preventDefault();
      setMessage("Account creation not available in demo.", "error");
    });
  }

  // Open trigger — Sign in button(s) in the navbar
  // Use event delegation on document so it works after renderLayout()
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-auth-open]");
    if (btn) {
      openModal(btn);
    }
  });

  // Keyboard: Escape + focus trap
  document.addEventListener("keydown", handleKeydown);
}
