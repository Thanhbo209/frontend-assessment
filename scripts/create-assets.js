const fs = require("fs");
const path = require("path");

const books = [
  {
    title: "The Lighthouse Keeper",
    author: "Mara Ellison",
    filename: "the-lighthouse-keeper.jpg",
    colors: ["#2f664c", "#609774"],
  },
  {
    title: "Ashes in the Archive",
    author: "J. P. Crowe",
    filename: "ashes-in-the-archive.svg",
    colors: ["#41577e", "#7d97c1"],
  },
  {
    title: "Salt & Other Small Gods",
    author: "Imani Okafor",
    filename: "salt-and-other-small-gods.svg",
    colors: ["#842f5b", "#b76289"],
  },
  {
    title: "A House of Borrowed Light",
    author: "Sofia Marchetti",
    filename: "a-house-of-borrowed-light.svg",
    colors: ["#51406d", "#78628d"],
  },
  {
    title: "Everything the River Took",
    author: "Ada Fenwick",
    filename: "everything-the-river-took.svg",
    colors: ["#754635", "#9b664e"],
  },
  {
    title: "Orbital Driftwood",
    author: "Nadia Vance",
    filename: "orbital-driftwood.svg",
    colors: ["#346d72", "#6fa2a4"],
  },
  {
    title: "Pip and the Paper Moon",
    author: "Lena Hart",
    filename: "pip-and-the-paper-moon.svg",
    colors: ["#a56e20", "#d5a24c"],
  },
  {
    title: "Threads of the Void",
    author: "Kai Tanaka",
    filename: "threads-of-the-void.svg",
    colors: ["#314b78", "#6d88b7"],
  },
  {
    title: "The Button Thief",
    author: "Marco Diaz",
    filename: "the-button-thief.svg",
    colors: ["#a66a22", "#e0b252"],
  },
];

const genres = [
  {
    name: "Fiction",
    count: 3,
    filename: "fiction.svg",
    colors: ["#9e4b39", "#a55b48"],
  },
  {
    name: "Mystery",
    count: 2,
    filename: "mystery.svg",
    colors: ["#405b8a", "#7894c1"],
  },
  {
    name: "Sci-Fi",
    count: 2,
    filename: "sci-fi.svg",
    colors: ["#2f7478", "#79a7a7"],
  },
  {
    name: "Poetry",
    count: 2,
    filename: "poetry.svg",
    colors: ["#88315d", "#b8668d"],
  },
  {
    name: "Children",
    count: 2,
    filename: "children.svg",
    colors: ["#a86d1e", "#d4a14b"],
  },
  {
    name: "Non-fiction",
    count: 2,
    filename: "non-fiction.svg",
    colors: ["#66507c", "#86709d"],
  },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function splitTitle(title, maxWordsPerLine = 2) {
  const words = title.split(" ");
  const lines = [];

  for (let index = 0; index < words.length; index += maxWordsPerLine) {
    lines.push(words.slice(index, index + maxWordsPerLine).join(" "));
  }

  return lines.slice(0, 4);
}

function createBookSvg(book) {
  const [start, end] = book.colors;
  const titleLines = splitTitle(book.title);

  const titleText = titleLines
    .map((line, index) => {
      const y = 170 + index * 32;

      return `<text x="32" y="${y}" fill="#fff8ec" font-family="Georgia, serif" font-size="28" font-weight="700">${escapeXml(line)}</text>`;
    })
    .join("\n");

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="620" viewBox="0 0 420 620" role="img" aria-label="${escapeXml(book.title)} cover">
  <defs>
    <linearGradient id="coverGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${start}" />
      <stop offset="100%" stop-color="${end}" />
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="18%" r="45%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.24" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="420" height="620" rx="16" fill="url(#coverGradient)" />
  <rect width="420" height="620" rx="16" fill="url(#glow)" />

  <circle cx="336" cy="96" r="54" fill="#fff8ec" opacity="0.18" />
  <circle cx="358" cy="118" r="18" fill="#fff8ec" opacity="0.28" />

  <path d="M36 476 C118 430, 178 522, 260 472 S366 470, 392 430" stroke="#fff8ec" stroke-width="3" fill="none" opacity="0.28" />
  <path d="M36 504 C118 458, 178 550, 260 500 S366 498, 392 458" stroke="#fff8ec" stroke-width="3" fill="none" opacity="0.18" />

  <text x="32" y="86" fill="#fff8ec" font-family="Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="5" opacity="0.82">PAGES &amp; CO.</text>

  ${titleText}

  <text x="32" y="560" fill="#fff8ec" font-family="Arial, sans-serif" font-size="18" font-style="italic" opacity="0.9">${escapeXml(book.author)}</text>
</svg>
`.trim();
}

function createGenreSvg(genre) {
  const [start, end] = genre.colors;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="220" viewBox="0 0 360 220" role="img" aria-label="${escapeXml(genre.name)} genre">
  <defs>
    <linearGradient id="genreGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${start}" />
      <stop offset="100%" stop-color="${end}" />
    </linearGradient>
  </defs>

  <rect width="360" height="220" rx="20" fill="url(#genreGradient)" />

  <circle cx="292" cy="52" r="48" fill="#fff8ec" opacity="0.16" />
  <circle cx="316" cy="82" r="22" fill="#fff8ec" opacity="0.18" />

  <path d="M68 70 H138 C150 70 160 80 160 92 V154 C160 162 154 168 146 168 H68 Z" fill="#fff8ec" opacity="0.24" />
  <path d="M160 92 C160 80 170 70 182 70 H252 V168 H174 C166 168 160 162 160 154 Z" fill="#fff8ec" opacity="0.17" />
  <path d="M160 92 V162" stroke="#fff8ec" stroke-width="3" opacity="0.45" />

  <text x="28" y="154" fill="#fff8ec" font-family="Arial, sans-serif" font-size="32" font-weight="800">${escapeXml(genre.name)}</text>
  <text x="28" y="184" fill="#fff8ec" font-family="Arial, sans-serif" font-size="15" font-weight="700" opacity="0.85">${genre.count} titles</text>
</svg>
`.trim();
}

const bookDir = path.join("assets", "images", "books");
const genreDir = path.join("assets", "images", "genres");

ensureDir(bookDir);
ensureDir(genreDir);

books.forEach((book) => {
  fs.writeFileSync(path.join(bookDir, book.filename), createBookSvg(book));
});

genres.forEach((genre) => {
  fs.writeFileSync(path.join(genreDir, genre.filename), createGenreSvg(genre));
});

console.log("Generated book and genre SVG assets.");
