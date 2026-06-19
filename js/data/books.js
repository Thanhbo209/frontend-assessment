export const genres = [
  {
    name: "Fiction",
    count: 3,
    theme: "fiction",
    image: "./assets/images/genres/fiction.svg",
  },
  {
    name: "Mystery",
    count: 2,
    theme: "mystery",
    image: "./assets/images/genres/mystery.svg",
  },
  {
    name: "Sci-Fi",
    count: 2,
    theme: "sci-fi",
    image: "./assets/images/genres/sci-fi.svg",
  },
  {
    name: "Poetry",
    count: 2,
    theme: "poetry",
    image: "./assets/images/genres/poetry.svg",
  },
  {
    name: "Children",
    count: 2,
    theme: "children",
    image: "./assets/images/genres/children.svg",
  },
  {
    name: "Non-fiction",
    count: 2,
    theme: "non-fiction",
    image: "./assets/images/genres/non-fiction.svg",
  },
];

export const books = [
  {
    title: "The Lighthouse Keeper",
    slug: "the-lighthouse-keeper",
    author: "Mara Ellison",
    price: 18,
    oldPrice: 24,
    rating: 4.6,
    category: "Fiction",
    tags: ["featured", "bestseller"],
    cover: "green",
    image: "./assets/images/books/the-lighthouse-keeper.jpg",
    description:
      "A widowed keeper and a runaway girl share a winter on a remote island, learning what it means to keep a light burning for someone else.",
    details: {
      format: "Paperback",
      pages: "312",
      published: "2023",
      publisher: "Harbor & Vale",
      language: "English",
      isbn: "978-1-23456-001-2",
    },
  },
  {
    title: "Ashes in the Archive",
    slug: "ashes-in-the-archive",
    author: "J. P. Crowe",
    price: 15.5,
    oldPrice: null,
    rating: 4.4,
    category: "Mystery",
    tags: ["featured"],
    cover: "blue",
    image: "./assets/images/books/ashes-in-the-archive.jpg",
    description:
      "A quiet archivist discovers a series of letters hidden inside burned manuscripts, each one pointing toward a crime everyone thought was buried.",
    details: {
      format: "Paperback",
      pages: "284",
      published: "2022",
      publisher: "Crow & Lantern Press",
      language: "English",
      isbn: "978-1-23456-002-9",
    },
  },
  {
    title: "Salt & Other Small Gods",
    slug: "salt-and-other-small-gods",
    author: "Imani Okafor",
    price: 13,
    oldPrice: null,
    rating: 4.8,
    category: "Poetry",
    tags: ["featured", "new"],
    cover: "pink",
    image: "./assets/images/books/salt-and-other-small-gods.jpg",
    description:
      "A lyrical collection about memory, migration, food, faith, and the small rituals people use to survive ordinary grief.",
    details: {
      format: "Paperback",
      pages: "176",
      published: "2024",
      publisher: "Copper Finch",
      language: "English",
      isbn: "978-1-23456-003-6",
    },
  },
  {
    title: "A House of Borrowed Light",
    slug: "a-house-of-borrowed-light",
    author: "Sofia Marchetti",
    price: 17.25,
    oldPrice: 22,
    rating: 4.5,
    category: "Fiction",
    tags: ["featured"],
    cover: "purple",
    image: "./assets/images/books/a-house-of-borrowed-light.jpg",
    description:
      "After inheriting a crumbling hillside home, a translator uncovers the unfinished lives of the women who lived there before her.",
    details: {
      format: "Hardcover",
      pages: "336",
      published: "2021",
      publisher: "North Window Books",
      language: "English",
      isbn: "978-1-23456-004-3",
    },
  },
  {
    title: "Everything the River Took",
    slug: "everything-the-river-took",
    author: "Ada Fenwick",
    price: 18.75,
    oldPrice: null,
    rating: 4.6,
    category: "Mystery",
    tags: ["featured", "bestseller", "new"],
    cover: "brown",
    image: "./assets/images/books/everything-the-river-took.jpg",
    description:
      "When a riverbank collapse reveals a missing boy’s bicycle, a small town is forced to reopen a case it spent years trying to forget.",
    details: {
      format: "Paperback",
      pages: "368",
      published: "2024",
      publisher: "Marsh House",
      language: "English",
      isbn: "978-1-23456-005-0",
    },
  },
  {
    title: "Orbital Driftwood",
    slug: "orbital-driftwood",
    author: "Nadia Vance",
    price: 21,
    oldPrice: null,
    rating: 4.7,
    category: "Sci-Fi",
    tags: ["bestseller"],
    cover: "teal",
    image: "./assets/images/books/orbital-driftwood.jpg",
    description:
      "A salvage pilot finds a living forest growing inside an abandoned orbital station and must decide whether to report it or protect it.",
    details: {
      format: "Hardcover",
      pages: "402",
      published: "2023",
      publisher: "Starling Gate",
      language: "English",
      isbn: "978-1-23456-006-7",
    },
  },
  {
    title: "Pip and the Paper Moon",
    slug: "pip-and-the-paper-moon",
    author: "Lena Hart",
    price: 11.5,
    oldPrice: null,
    rating: 4.9,
    category: "Children",
    tags: ["bestseller"],
    cover: "gold",
    image: "./assets/images/books/pip-and-the-paper-moon.jpg",
    description:
      "Pip folds a paper moon for a school project, only to wake up and find it glowing above the garden with a map tucked inside.",
    details: {
      format: "Paperback",
      pages: "144",
      published: "2020",
      publisher: "Little Acorn Press",
      language: "English",
      isbn: "978-1-23456-007-4",
    },
  },
  {
    title: "Threads of the Void",
    slug: "threads-of-the-void",
    author: "Kai Tanaka",
    price: 20.5,
    oldPrice: null,
    rating: 4.6,
    category: "Sci-Fi",
    tags: ["new"],
    cover: "blue",
    image: "./assets/images/books/threads-of-the-void.jpg",
    description:
      "A quantum engineer investigating lost transmissions discovers that every message from deep space carries a memory from someone on Earth.",
    details: {
      format: "Paperback",
      pages: "390",
      published: "2024",
      publisher: "Nebula House",
      language: "English",
      isbn: "978-1-23456-008-1",
    },
  },
  {
    title: "The Button Thief",
    slug: "the-button-thief",
    author: "Marco Diaz",
    price: 10.99,
    oldPrice: null,
    rating: 4.7,
    category: "Children",
    tags: ["new"],
    cover: "gold",
    image: "./assets/images/books/the-button-thief.jpg",
    description:
      "Every night, buttons disappear from coats across town. A curious child follows the trail and finds a tiny tailor with a very big problem.",
    details: {
      format: "Paperback",
      pages: "128",
      published: "2024",
      publisher: "Buttonwood Kids",
      language: "English",
      isbn: "978-1-23456-009-8",
    },
  },
];

export const categoryFilters = [
  "All",
  "Fiction",
  "Mystery",
  "Sci-Fi",
  "Non-fiction",
  "Poetry",
  "Children",
  "Biography",
];

export function findBookBySlug(slug) {
  return books.find((book) => book.slug === slug);
}

export function getBooksByTag(tag, limit) {
  const taggedBooks = books.filter((book) => book.tags.includes(tag));

  if (typeof limit === "number") {
    return taggedBooks.slice(0, limit);
  }

  return taggedBooks;
}
