#!/usr/bin/env node
/**
 * Updates dynamic sections in the profile README.
 * Run locally: node scripts/update-readme.js
 */

const fs = require("fs");
const path = require("path");

const README = path.join(__dirname, "..", "README.md");
let content = fs.readFileSync(README, "utf8");

const quotes = [
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Simplicity is the soul of efficiency. — Austin Freeman",
  "Make it work, make it right, make it fast. — Kent Beck",
  "The best error message is the one that never shows up. — Thomas Fuchs",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
];

const today = new Date().toISOString().split("T")[0];
const quote = quotes[Math.floor(Math.random() * quotes.length)];

const quoteBlock = `> 💡 *${quote}*`;

content = content.replace(
  /<!-- QUOTE_START -->[\s\S]*?<!-- QUOTE_END -->/,
  `<!-- QUOTE_START -->\n${quoteBlock}\n<!-- QUOTE_END -->`
);

content = content.replace(
  /<!-- LAST_UPDATED: .* -->/,
  `<!-- LAST_UPDATED: ${today} -->`
);

fs.writeFileSync(README, content, "utf8");
console.log(`✓ README updated (${today})`);
