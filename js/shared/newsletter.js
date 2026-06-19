export function initNewsletter() {
  const form = document.querySelector(".newsletter-form");
  const message = document.querySelector("[data-newsletter-message]");

  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = form.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (!email || !emailInput.checkValidity()) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    message.textContent = "Thanks for joining the reading room.";
    form.reset();
  });
}
