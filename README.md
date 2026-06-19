# Pages & Co. — Frontend Developer Intern Assessment

## Overview

**Pages & Co.** is a responsive bookstore web application created for a Frontend Developer Intern assessment. It was built from the provided design screenshots using semantic HTML, pure CSS, and vanilla JavaScript.

The project focuses on:

- Layout accuracy based on the supplied design direction
- Reusable UI components
- Responsive desktop, tablet, and mobile layouts
- JavaScript interactions without a framework
- Clean folder organization for page-level scripts and shared logic

No frontend frameworks, UI libraries, build tools, or bundlers were used.

## Live Pages / Main Screens

- **Home page**: Presents the bookstore brand, hero carousel, genre cards, featured books, bestsellers, new arrivals, and newsletter signup.
- **All books / catalog page**: Shows the full book collection with category filters, sorting, and navbar search.
- **Book detail page**: Displays one selected book from the URL slug, including cover image, metadata, price, description, add-to-bag action, and related books.
- **Cart / bag page**: Shows selected books, quantities, line totals, subtotal, total, and item controls.

## Features Implemented

### UI / Layout

- Responsive navbar and footer
- Hero carousel
- Genre cards
- Reusable book cards
- Catalog grid
- Book detail layout
- Cart and order summary layout
- Dark theme and modern visual polish
- Reusable sign-in modal
- Newsletter form in the footer

### JavaScript Interactions

- Carousel navigation
- Catalog filtering by category
- Catalog sorting
- Navbar search on catalog page
- Add-to-bag behavior from home, catalog, and detail pages
- Cart quantity increase, decrease, and remove actions
- `localStorage` cart persistence after refresh
- Reusable demo sign-in modal with validation, close controls, Escape key support, and focus handling
- Newsletter email validation

### Responsive Design

The layout is designed to adapt across desktop, tablet, and mobile screen sizes using CSS Grid, Flexbox, and responsive stylesheet rules.

## Assessment Requirements Coverage

- Read and implemented the provided layout direction from the design screenshots
- Organized pages with semantic HTML
- Separated reusable layout, cart, book-card, modal, and formatting logic
- Implemented responsive layouts with CSS Grid and Flexbox
- Wrote vanilla JavaScript interactions using ES modules
- Used creative frontend judgment through the dark theme, catalog/detail/cart flow, and modal interaction
- Kept the project runnable without a framework, bundler, package manager, or build step

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript ES Modules
- `localStorage`
- CSS Grid
- Flexbox

No React, Vue, Angular, Tailwind, Bootstrap, Vite, TypeScript, npm packages, or external UI libraries were used.

## Folder Structure

```txt
frontend-assessment/
├── index.html
├── books.html
├── book-detail.html
├── cart.html
├── README.md
├── assets/
│   └── images/
│       ├── books/
│       └── genres/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── data/
│   │   └── books.js
│   ├── pages/
│   │   ├── home.js
│   │   ├── books.js
│   │   ├── book-detail.js
│   │   └── cart.js
│   └── shared/
│       ├── auth-modal.js
│       ├── book-card.js
│       ├── carousel.js
│       ├── cart-store.js
│       ├── cart-ui.js
│       ├── format.js
│       ├── layout.js
│       └── newsletter.js
└── scripts/
    └── create-assets.js
```

### Folder Notes

- `css/`: Design tokens, base styles, layout rules, reusable components, and responsive styling.
- `js/data/`: Static book, category, and helper data used by the app.
- `js/shared/`: Reusable UI and logic, including layout rendering, book cards, cart state, cart UI updates, modal behavior, carousel behavior, formatting, and newsletter validation.
- `js/pages/`: Page-specific entry files that initialize only the behavior needed for each page.
- `assets/`: Local book and genre images used throughout the interface.
- `scripts/`: Utility script used for project asset generation.

## Architecture Notes

- Navbar and footer are rendered from a shared layout module so all pages stay consistent.
- Book cards are generated from reusable data-driven rendering logic.
- Cart state is stored in `localStorage`, allowing items and quantities to persist after refresh.
- Cart UI updates are centralized so the navbar bag count stays consistent across pages.
- Page entry files remain small and focus on page-specific initialization.
- CSS variables keep colors, spacing, and theme values consistent across the design.

## How to Run

From the project root, start a local static server:

```bash
python -m http.server 5500
```

Then open:

```txt
http://127.0.0.1:5500/index.html
```

Direct page URLs:

```txt
http://127.0.0.1:5500/books.html
http://127.0.0.1:5500/book-detail.html?book=the-lighthouse-keeper
http://127.0.0.1:5500/cart.html
```

A local server is recommended because the project uses JavaScript ES modules.

## How to Test the Main Flow

1. Open the homepage.
2. Browse featured books, bestsellers, and new arrivals.
3. Click a book card to open its detail page.
4. Click **Add to bag**.
5. Open the bag page.
6. Increase and decrease item quantity.
7. Remove an item from the bag.
8. Refresh the page and confirm cart persistence.
9. Open the All books page and test category filters, sorting, and search.
10. Open the sign-in modal and test close and submit behavior.

## Design Decisions

- A dark theme was used to give the bookstore a polished, modern feel.
- Book and genre sections are data-driven to make content easier to maintain.
- CSS Grid and Flexbox were used instead of layout frameworks to keep the implementation lightweight.
- `localStorage` was used for cart persistence because the assessment does not require a backend.
- The sign-in modal is demo-only and validates input on the frontend without real authentication.

## Author

By: Pham Viet Thanh  
Frontend Developer Intern Assessment

## Project Screenshots:

- home-1:
<img width="1901" height="913" alt="image" src="https://github.com/user-attachments/assets/7e5e2e14-9e9e-4a73-b6ab-7aec58f6c63c" />

--- 

- home-2:
<img width="1881" height="905" alt="image" src="https://github.com/user-attachments/assets/4663ec0b-85b3-4108-b996-ec97183d1704" />

--- 

- home-3:
<img width="1899" height="905" alt="image" src="https://github.com/user-attachments/assets/8b47b7d4-3c1c-462a-9b53-6bc15a63bf6b" />

--- 

- list-page:
<img width="1885" height="908" alt="image" src="https://github.com/user-attachments/assets/181d450b-c4bf-4dcc-949f-493cf8493240" />

--- 

- detail-page:
<img width="1892" height="907" alt="image" src="https://github.com/user-attachments/assets/b388a1d0-3134-42ef-9cf5-8520e63e389e" />

--- 

- checkout:
<img width="1896" height="911" alt="image" src="https://github.com/user-attachments/assets/55cb3bd1-4d74-428d-b978-e39ec57f1e34" />

--- 

- login-modal:
<img width="1904" height="902" alt="image" src="https://github.com/user-attachments/assets/43ab9add-3ebb-4334-9fa1-5760bbba8c6e" />





