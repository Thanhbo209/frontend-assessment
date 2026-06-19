export function renderNavbar() {
  const header = document.querySelector("[data-site-header]");

  if (!header) return;

  header.innerHTML = `
    <div class="container site-header__inner">
      <a class="brand" href="./index.html" aria-label="Pages and Co home">
        <span class="brand__mark" aria-hidden="true">P</span>
        <span class="brand__name">Pages &amp; Co.</span>
      </a>

      <nav class="site-nav" aria-label="Primary navigation">
        <a class="site-nav__link" href="./index.html">Home</a>
        <a class="site-nav__link" href="./books.html">Shop All</a>
        <a class="site-nav__link" href="./books.html?category=Fiction">Fiction</a>
        <a class="site-nav__link" href="./books.html?category=Mystery">Mystery</a>
        <a class="site-nav__link" href="./books.html?category=Children">Children</a>
        <a class="site-nav__link" href="./books.html?category=Poetry">Poetry</a>
      </nav>

      <form class="search-form" role="search" aria-label="Search books">
        <label for="book-search">Search</label>
        <input
          id="book-search"
          name="search"
          type="search"
          placeholder="Search titles, authors..."
        />
      </form>

      <div class="header-actions">
        <button class="sign-in-button" type="button" data-auth-open>Sign in</button>

        <a class="bag-button" href="./cart.html" aria-label="Shopping bag with 0 items">
        Bag
        <span class="bag-button__count" data-cart-count>0</span>
        </a>
      </div>
    </div>
  `;
}

export function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");

  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-inner">
      <section class="footer-column footer-column--brand" aria-label="About Pages and Co">
        <a class="brand brand--footer" href="./index.html" aria-label="Pages and Co home">
          <span class="brand__mark" aria-hidden="true">P</span>
          <span class="brand__name">Pages &amp; Co.</span>
        </a>

        <p class="footer-description">
          An independent bookshop for readers who like to take their time. Open since 1998.
        </p>

        <ul class="social-list" aria-label="Social links">
          <li><a href="#" aria-label="LinkedIn">in</a></li>
          <li><a href="#" aria-label="X">x</a></li>
          <li><a href="#" aria-label="Facebook">f</a></li>
        </ul>
      </section>

      <section class="footer-column" aria-labelledby="footer-shop-title">
        <h2 class="footer-column__title" id="footer-shop-title">Shop</h2>

        <ul class="footer-list">
          <li><a href="./index.html#new-arrivals">New arrivals</a></li>
          <li><a href="./index.html#bestsellers">Bestsellers</a></li>
          <li><a href="./index.html#genres">Fiction</a></li>
          <li><a href="./index.html#genres">Children</a></li>
          <li><a href="#">Gift cards</a></li>
        </ul>
      </section>

      <section class="footer-column" aria-labelledby="footer-about-title">
        <h2 class="footer-column__title" id="footer-about-title">About</h2>

        <ul class="footer-list">
          <li><a href="#">Our story</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Visit the shop</a></li>
          <li><a href="#">Journal</a></li>
        </ul>
      </section>

      <section class="footer-column" aria-labelledby="footer-help-title">
        <h2 class="footer-column__title" id="footer-help-title">Help</h2>

        <ul class="footer-list">
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </section>

      <section
        class="footer-column footer-column--newsletter"
        id="newsletter"
        aria-labelledby="newsletter-title"
      >
        <h2 class="footer-column__title" id="newsletter-title">The reading room</h2>

        <p class="newsletter-description">
          One handpicked recommendation in your inbox each week.
        </p>

        <form class="newsletter-form">
          <label for="newsletter-email">Email address</label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="Email address"
            required
          />

          <button type="submit">Join</button>
        </form>

        <p class="newsletter-message" data-newsletter-message aria-live="polite"></p>
      </section>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom__inner">
        <p>© 2026 Pages &amp; Co. · Privacy · Terms</p>
        <p>Free shipping on orders over $35</p>
      </div>
    </div>
  `;
}

export function renderLayout() {
  renderNavbar();
  renderFooter();
}
