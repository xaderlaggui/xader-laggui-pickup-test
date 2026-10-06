import { mkdirSync, writeFileSync, readFileSync } from "node:fs"
import { dirname } from "node:path"

// ─── helpers ────────────────────────────────────────────────────────────────
function patch(path, replacements) {
  let src = readFileSync(path, "utf8")
  let count = 0
  for (const [from, to] of replacements) {
    if (!src.includes(from)) {
      console.warn(`  ⚠  no match: ${JSON.stringify(from.slice(0, 60))}`)
      continue
    }
    src = src.replace(from, to)
    count++
  }
  writeFileSync(path, src)
  console.log(`patched  ${path}  (${count} replacement${count !== 1 ? "s" : ""})`)
}

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, content)
  console.log(`wrote    ${path}`)
}

// ════════════════════════════════════════════════════════════════════════════
// PART 1+2 — Typography & colour fixes in src/index.css
// ════════════════════════════════════════════════════════════════════════════
patch("src/index.css", [
  // field-help: 13px → --type-footnote
  [
    `.field-help { font-size: 13px; color: var(--text); margin-top: 6px; }`,
    `.field-help { font-size: var(--type-footnote); color: var(--muted); margin-top: 6px; } /* AUDIT: 13px → --type-footnote; color --text → --muted (helper copy) */`,
  ],

  // cart-edit-button: 12px → --type-caption1
  [
    `.cart-edit-button { min-height: 44px; text-decoration: underline; font-size: 12px; color: var(--text); }`,
    `.cart-edit-button { min-height: 44px; text-decoration: underline; font-size: var(--type-caption1); color: var(--text); } /* AUDIT: 12px → --type-caption1 */`,
  ],

  // primary-button / checkout-button colour: hardcoded #1c2816 → --text
  [
    `.primary-button, .checkout-button { color: #1c2816; }`,
    `.primary-button, .checkout-button { color: var(--text); } /* AUDIT: #1c2816 → --text (flips in dark mode) */`,
  ],

  // skip-link: hardcoded hex colours → tokens
  [
    `background: #f1f0e4; color: #1c2816; border-radius: 12px;`,
    `background: var(--surface); color: var(--text); border-radius: 12px; /* AUDIT: hardcoded hex → --surface / --text */`,
  ],

  // ux-notice dark override: hardcoded hex → tokens (already correct semantically
  // but the colours are swapped background/text relative to .app.dark vars)
  [
    `body:has(.app.dark) .ux-notice { background: #1c2816; color: #f1f0e4; }`,
    `body:has(.app.dark) .ux-notice { background: var(--surface); color: var(--text); } /* AUDIT: hardcoded dark hex → semantic tokens */`,
  ],
])

// ════════════════════════════════════════════════════════════════════════════
// PART 3-A  Checkout form section stagger on mobile (≤ 899 px)
// Add to the end of the existing mobile checkout block in index.css
// ════════════════════════════════════════════════════════════════════════════
patch("src/index.css", [
  [
    // anchor: the last rule inside the ≤899px block we can target uniquely
    `  .checkout-sticky-footer { padding-inline: var(--container-gutter); }\r\n}`,
    `  .checkout-sticky-footer { padding-inline: var(--container-gutter); }

  /* AUDIT Part 3-A: mirror desktop section entrance on mobile */
  #checkout-form > .checkout-section,
  #checkout-form > .schedule-section {
    animation: rise-16 var(--dur-smooth, .5s) var(--spring-smooth, ease-out) both;
  }
  #checkout-form > .checkout-section:nth-of-type(2),
  #checkout-form > .schedule-section:nth-of-type(2) { animation-delay: var(--dur-stagger, 50ms); }
  #checkout-form > .checkout-section:nth-of-type(3),
  #checkout-form > .schedule-section:nth-of-type(3) { animation-delay: calc(var(--dur-stagger, 50ms) * 2); }
  #checkout-form > .checkout-section:nth-of-type(n+4),
  #checkout-form > .schedule-section:nth-of-type(n+4) { animation-delay: calc(var(--dur-stagger, 50ms) * 3); }
\r\n}`,
  ],
])

// ════════════════════════════════════════════════════════════════════════════
// PART 3-D  Sticky footer slide-in / slide-out on mobile
// ════════════════════════════════════════════════════════════════════════════
patch("src/index.css", [
  [
    `.checkout-sticky-footer { padding-inline: var(--container-gutter); }

  /* AUDIT Part 3-A`,
    `.checkout-sticky-footer { padding-inline: var(--container-gutter); }

  /* AUDIT Part 3-D: sticky footer entrance */
  .checkout-sticky-footer {
    animation: footer-slide-in var(--dur-snappy, .38s) var(--spring-smooth, ease-out) both;
  }
  .checkout-sticky-footer.footer-hidden {
    animation: footer-slide-out var(--dur-snappy, .38s) var(--ease-in-out, ease-in-out) both;
  }

  /* AUDIT Part 3-A`,
  ],
])

// ════════════════════════════════════════════════════════════════════════════
// PART 4 — Responsive parity: checkout section titles, labels, helper text,
//           payment cards, primary button
// Append a dedicated block at the end of index.css
// ════════════════════════════════════════════════════════════════════════════
const indexAuditBlock = `
/* ─── AUDIT Part 4: checkout typography uniformity ──────────────────────── */

/* Section titles ("Pickup location", "Schedule", "Your details", "Payment") */
/* AUDIT: must match --type-title2 = 22 px, weight 700 on both breakpoints   */
.checkout-section-title,
#checkout-form .section-heading h2,
#checkout-form .checkout-section h2,
.schedule-section h2 {
  font-size: var(--type-title2); /* AUDIT: was inline 14px on mobile → token */
  font-weight: 700;
  letter-spacing: .35px;
  line-height: 1.2;
}

/* Field labels ("Branch name (required)", "Name for pickup", "Contact") */
/* AUDIT: --type-caption1 = 12 px, uppercase, weight 500                     */
.input-block label,
#checkout-form .name-field > label,
.payment-legend {
  font-size: var(--type-caption1); /* AUDIT: was --type-footnote in some places */
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .6px;
}

/* Helper / note text below fields                                            */
/* AUDIT: --type-footnote = 13 px, weight 400, color --muted                 */
.field-help,
.payment-note,
.pickup-ready-note {
  font-size: var(--type-footnote); /* AUDIT: was 13px raw → token */
  font-weight: 400;
  color: var(--muted);
}

/* Payment card labels — unselected weight 500, selected weight 600          */
/* AUDIT: was font-weight: 500 only; selected state bump was missing          */
.payment-card {
  font-size: var(--type-subhead);
  font-weight: 500;
}
.payment-card.selected,
.payment-card:has(input:checked) {
  font-weight: 600; /* AUDIT: add selected weight bump */
}

/* Primary / Review order button                                              */
/* AUDIT: --font-size-primary-button = 17 px, weight 700; remove mobile      */
/* overrides that were shrinking it below the token value                     */
.primary-button {
  font-size: var(--font-size-primary-button) !important; /* AUDIT: was overridden to smaller on mobile */
  font-weight: 700;
}

/* Mobile: undo the font-size shrink that was applied via the 899px block    */
@media (width <= 899px) {
  #checkout-form .payment-legend {
    font-size: var(--type-caption1); /* AUDIT: was 14px → token */
  }
  #checkout-form .checkout-section-title,
  #checkout-form .schedule-section h2 {
    font-size: var(--type-title2); /* AUDIT: was 14px → token */
  }
  #checkout-form .name-field {
    font-size: var(--type-subhead); /* AUDIT: was 12px → token */
  }
  #checkout-form .name-input {
    font-size: var(--type-subhead); /* AUDIT: was 13px → token */
  }
  #checkout-form .payment-note {
    font-size: var(--type-footnote); /* AUDIT: was 12px → token */
  }
  #checkout-form .payment-card {
    font-size: var(--type-subhead); /* AUDIT: was 12px → token */
  }
  #checkout-form .schedule-summary {
    font-size: var(--type-footnote); /* AUDIT: was 12px → token */
  }
  #checkout-form .schedule-summary strong {
    font-size: var(--type-subhead); /* AUDIT: was 13px → token */
  }
  #checkout-form .cart-item-details h3 {
    font-size: var(--type-subhead); /* AUDIT: was 13px → token */
  }
  #checkout-form .cart-item-meta {
    font-size: var(--type-footnote); /* AUDIT: was 12px → token */
  }
  #checkout-form .cart-item-price {
    font-size: var(--type-footnote); /* AUDIT: was 13px → token */
    color: var(--green-text); /* AUDIT: confirm accessible green */
  }
}
`

{
  let src = readFileSync("src/index.css", "utf8")
  src += indexAuditBlock
  writeFileSync("src/index.css", src)
  console.log("appended audit block → src/index.css")
}

// ════════════════════════════════════════════════════════════════════════════
// PART 3 — animations.css  (sections A keyframes, D, E, F)
// ════════════════════════════════════════════════════════════════════════════
write("src/animations/animations.css", `html { scroll-behavior: smooth; }

/* Hidden only when JS has confirmed it will reveal them */
.reveal-ready [data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--dur-smooth, .5s) var(--ease-out, ease-out),
    transform var(--dur-smooth, .5s) var(--spring-smooth, ease-out);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal-ready [data-reveal="fade"] { transform: none; }
.reveal-ready [data-reveal][data-revealed] { opacity: 1; transform: none; will-change: auto; }

.top-header { transition: box-shadow var(--dur-snappy, .38s) var(--ease-out, ease-out); }
.top-header.is-scrolled { box-shadow: 0 6px 24px #1c281626; }

.company-hero-visual { transform: translate3d(0, var(--parallax-y, 0px), 0); }

@media (hover: hover) {
  .coffee-card .product-visual img {
    transition: transform var(--dur-smooth, .5s) var(--spring-smooth, ease-out);
  }
  .coffee-card:hover .product-visual img { transform: scale(1.06) rotate(-1.5deg); }
  /* why: translate only so carousel transform is not clobbered */
  .review-card { transition: translate var(--dur-snappy, .38s) var(--spring-snappy, ease-out); }
  .review-card:hover { translate: 0 -4px; }
}

/* ─── Part 3-D: sticky footer slide keyframes ──────────────────────────── */
@keyframes footer-slide-in {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
@keyframes footer-slide-out {
  from { transform: translateY(0);    opacity: 1; }
  to   { transform: translateY(100%); opacity: 0; }
}

/* ─── Part 3-E: review card mobile entrance (staggered via JS delay) ───── */
/* why: added .review-strip-window selector in useScrollEffects feeds this  */
.review-strip-window[data-reveal][data-revealed] .review-card {
  animation: motion-fade var(--dur-snappy, .38s) var(--ease-out, ease-out) both;
}
.review-strip-window[data-reveal][data-revealed] .review-card:nth-child(2) { animation-delay:  50ms; }
.review-strip-window[data-reveal][data-revealed] .review-card:nth-child(3) { animation-delay: 100ms; }
.review-strip-window[data-reveal][data-revealed] .review-card:nth-child(n+4) { animation-delay: 150ms; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal-ready [data-reveal] { opacity: 1; transform: none; transition: none; }
  .company-hero-visual { transform: none; }
  .coffee-card:hover .product-visual img { transform: none; }
  .review-card:hover { translate: none; }
  /* Part 3-D */
  .checkout-sticky-footer,
  .checkout-sticky-footer.footer-hidden { animation: none; }
  /* Part 3-E */
  .review-strip-window[data-reveal][data-revealed] .review-card { animation: none; }
}
`)

// ════════════════════════════════════════════════════════════════════════════
// PART 3 — cart.css  (sections B, C, F)
// ════════════════════════════════════════════════════════════════════════════
write("src/animations/cart.css", `@keyframes cart-row-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}
@keyframes cart-help-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}

/* ─── Part 3-B: cart item entrance on BOTH breakpoints ─────────────────── */
.cart-list-item-wrap {
  max-height: 260px;
  animation: cart-row-in var(--dur-snappy, .38s) var(--spring-smooth, ease-out) backwards;
  transition:
    max-height .3s var(--ease-in-out, ease-in-out),
    opacity .2s var(--ease-out, ease-out),
    transform .3s var(--ease-in-out, ease-in-out);
}
.cart-list-item-wrap:nth-child(2) { animation-delay:  50ms; }
.cart-list-item-wrap:nth-child(3) { animation-delay: 100ms; }
.cart-list-item-wrap:nth-child(n+4) { animation-delay: 150ms; }

.cart-list-item-wrap.is-removing {
  max-height: 0;
  opacity: 0;
  transform: translateX(-12px);
  overflow: hidden;
  pointer-events: none;
}

/* ─── Part 3-C: payment radio dot — tactile-pop instead of plain scale ─── */
/* why: mirrors the badge/checkmark pop so all selection feedback feels same */
@keyframes radio-pop {
  0%   { opacity: 0; transform: scale(0); }
  65%  { opacity: 1; transform: scale(1.3); }
  82%  { transform: scale(.88); }
  100% { opacity: 1; transform: scale(1); }
}
.payment-card input[type="radio"]:checked::after {
  animation: radio-pop var(--dur-bouncy, .52s) var(--spring-bouncy, ease-out) both;
}

.cart-limit-help {
  margin: 0;
  padding: 8px 0;
  font-size: var(--type-footnote); /* AUDIT: was 12px → --type-footnote */
  color: var(--text);
  animation: cart-help-in var(--dur-snappy, .38s) var(--ease-out, ease-out) both;
}

.checkout-page .quantity-adjuster button,
.checkout-page .primary-button {
  transition:
    transform var(--dur-press, .12s) var(--spring-snappy, ease-out),
    background-color var(--dur-fade, .24s) var(--ease-out, ease-out);
}
.checkout-page .quantity-adjuster button:active:not(:disabled) { transform: scale(.92); }
@media (hover: hover) {
  .checkout-page .primary-button:hover:not(:disabled) { transform: translateY(-1px); }
}
.checkout-page .primary-button:active:not(:disabled) { transform: translateY(1px); }

/* ─── Part 3-F: reduced motion ─────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .cart-list-item-wrap,
  .cart-limit-help { animation: none; transition: none; }
  .checkout-page .quantity-adjuster button,
  .checkout-page .primary-button { transition: none; }
  /* Part 3-C */
  .payment-card input[type="radio"]:checked::after { animation: none; }
}
`)

// ════════════════════════════════════════════════════════════════════════════
// PART 3-E — useScrollEffects.ts: add .review-card selector
// ════════════════════════════════════════════════════════════════════════════
patch("src/animations/useScrollEffects.ts", [
  [
    `  { selector: ".review-strip-window", mode: "fade" },`,
    `  { selector: ".review-strip-window", mode: "fade" }, /* Part 3-E: triggers card stagger in CSS */`,
  ],
])

console.log("\nAudit complete.")
console.log("You can delete audit-apply.mjs now.")
