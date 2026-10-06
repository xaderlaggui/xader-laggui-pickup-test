import { readFileSync, writeFileSync } from "node:fs"

const MARKER = "/* ios-font-applied */"

let src = readFileSync("src/index.css", "utf8")

if (src.includes(MARKER)) {
  console.log("Already applied. Nothing changed.")
  process.exit(0)
}

// Remove the Google Fonts Inter import — we're going full system/SF Pro
src = src.replace(
  `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');\n`,
  ""
)

const block = `
${MARKER}

/* ─── iOS-style font stack ─────────────────────────────────────────────────
   SF Pro is served automatically by -apple-system / BlinkMacSystemFont on
   Apple devices. On Windows/Android the stack falls through to Segoe UI /
   Roboto which are the closest system equivalents.                          */
:root {
  --font-family-base:
    -apple-system,
    BlinkMacSystemFont,
    "SF Pro Display",
    "SF Pro Text",
    "Helvetica Neue",
    "Segoe UI",
    Roboto,
    Arial,
    sans-serif;

  /* ── iOS Dynamic Type scale (points → px at 1x) ─────────────────────── */
  --fs-large-title:  2.125rem;   /* 34px  — Large Title  */
  --fs-title-1:      1.75rem;    /* 28px  — Title 1      */
  --fs-title-2:      1.375rem;   /* 22px  — Title 2      */
  --fs-title-3:      1.25rem;    /* 20px  — Title 3      */
  --fs-headline:     1.0625rem;  /* 17px  — Headline (semibold) */
  --fs-body:         1.0625rem;  /* 17px  — Body         */
  --fs-callout:      1rem;       /* 16px  — Callout      */
  --fs-subhead:      0.9375rem;  /* 15px  — Subheadline  */
  --fs-footnote:     0.8125rem;  /* 13px  — Footnote     */
  --fs-caption-1:    0.75rem;    /* 12px  — Caption 1    */
  --fs-caption-2:    0.6875rem;  /* 11px  — Caption 2    */

  /* ── iOS font weights ───────────────────────────────────────────────── */
  --fw-ultralight: 100;
  --fw-thin:       200;
  --fw-light:      300;
  --fw-regular:    400;
  --fw-medium:     500;
  --fw-semibold:   600;
  --fw-bold:       700;
  --fw-heavy:      800;
  --fw-black:      900;

  /* ── iOS letter spacing (approximate) ──────────────────────────────── */
  --ls-large-title: -0.025em;
  --ls-title:       -0.02em;
  --ls-headline:    -0.025em;
  --ls-body:        -0.025em;
  --ls-subhead:     -0.016em;
  --ls-footnote:    -0.005em;
  --ls-caption:      0.004em;
  --ls-allcaps:      0.04em;

  /* ── iOS line heights ───────────────────────────────────────────────── */
  --lh-tight:    1.15;
  --lh-snug:     1.25;
  --lh-normal:   1.45;
  --lh-relaxed:  1.6;
}

/* ─── Base ──────────────────────────────────────────────────────────────── */
body {
  font-family: var(--font-family-base);
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* ─── Heading hierarchy ─────────────────────────────────────────────────── */
h1 {
  font-size: var(--fs-large-title);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-large-title);
}
h2 {
  font-size: var(--fs-title-2);
  font-weight: var(--fw-bold);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-title);
}
h3 {
  font-size: var(--fs-headline);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-headline);
}
h4 {
  font-size: var(--fs-subhead);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-subhead);
}

/* ─── Utility classes (iOS type roles) ─────────────────────────────────── */
.type-large-title {
  font-size: var(--fs-large-title);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-large-title);
}
.type-title-1 {
  font-size: var(--fs-title-1);
  font-weight: var(--fw-bold);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-title);
}
.type-title-2 {
  font-size: var(--fs-title-2);
  font-weight: var(--fw-bold);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-title);
}
.type-title-3 {
  font-size: var(--fs-title-3);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-title);
}
.type-headline {
  font-size: var(--fs-headline);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  letter-spacing: var(--ls-headline);
}
.type-body {
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-body);
}
.type-callout {
  font-size: var(--fs-callout);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-body);
}
.type-subhead {
  font-size: var(--fs-subhead);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-subhead);
}
.type-footnote {
  font-size: var(--fs-footnote);
  font-weight: var(--fw-regular);
  line-height: var(--lh-relaxed);
  letter-spacing: var(--ls-footnote);
}
.type-caption-1 {
  font-size: var(--fs-caption-1);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-caption);
}
.type-caption-2 {
  font-size: var(--fs-caption-2);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  letter-spacing: var(--ls-caption);
}

/* ─── Map existing tokens to new iOS scale ──────────────────────────────── */
/* keeps original.css token names working without touching that file         */
:root {
  --font-size-display:      var(--fs-large-title);
  --font-size-title:        var(--fs-title-1);
  --font-size-section-title:var(--fs-title-2);
  --font-size-heading:      var(--fs-headline);
  --font-size-body:         var(--fs-body);
  --font-size-text:         var(--fs-subhead);
  --font-size-description:  var(--fs-footnote);
  --font-size-label:        var(--fs-caption-1);
  --font-size-caption:      var(--fs-caption-2);
  --font-size-primary-button: var(--fs-body);
  --font-size-button:       var(--fs-subhead);
  --font-size-button-small: var(--fs-footnote);
}

/* ─── Checkout — iOS-sized, never tiny ─────────────────────────────────── */
.checkout-section-title,
#checkout-form .section-heading h2,
.schedule-section h2 {
  font-size: var(--fs-title-2);        /* 22px */
  font-weight: var(--fw-bold);
  letter-spacing: var(--ls-title);
}

/* labels */
.input-block label,
#checkout-form .name-field > label,
.payment-legend {
  font-size: var(--fs-subhead);        /* 15px */
  font-weight: var(--fw-semibold);
  letter-spacing: var(--ls-subhead);
}

/* inputs */
.name-input,
.note-input {
  font-size: var(--fs-callout);        /* 16px */
  font-family: var(--font-family-base);
}

/* helper text */
.field-help,
.payment-note,
.pickup-ready-note {
  font-size: var(--fs-footnote);       /* 13px */
  letter-spacing: var(--ls-footnote);
}

/* cart item names */
.cart-item-details h3 {
  font-size: var(--fs-subhead);        /* 15px */
  font-weight: var(--fw-semibold);
}

/* cart meta */
.cart-item-meta {
  font-size: var(--fs-footnote);       /* 13px */
}

/* cart prices */
.cart-item-price {
  font-size: var(--fs-subhead);        /* 15px */
  font-weight: var(--fw-bold);
}

/* order total */
.cart-total,
.checkout-footer-price,
.cart-breakdown-total {
  font-size: var(--fs-title-3);        /* 20px */
  font-weight: var(--fw-bold);
  letter-spacing: var(--ls-title);
}

/* payment cards */
.payment-card {
  font-size: var(--fs-subhead);        /* 15px */
  font-weight: var(--fw-medium);
}
.payment-card.selected,
.payment-card:has(input:checked) {
  font-weight: var(--fw-semibold);
}

/* primary button */
.primary-button,
.checkout-button {
  font-size: var(--fs-body);           /* 17px */
  font-weight: var(--fw-semibold);
  font-family: var(--font-family-base);
  letter-spacing: var(--ls-body);
}

/* ─── Mobile: hold the line, no shrinking ──────────────────────────────── */
@media (width <= 899px) {
  .checkout-section-title,
  #checkout-form .checkout-section-title,
  #checkout-form .schedule-section h2  { font-size: var(--fs-title-2); }
  #checkout-form .name-field           { font-size: var(--fs-subhead); }
  #checkout-form .name-input           { font-size: var(--fs-callout); }
  #checkout-form .payment-legend       { font-size: var(--fs-subhead); }
  #checkout-form .payment-note         { font-size: var(--fs-footnote); }
  #checkout-form .payment-card         { font-size: var(--fs-subhead); }
  #checkout-form .schedule-summary     { font-size: var(--fs-footnote); }
  #checkout-form .schedule-summary strong { font-size: var(--fs-subhead); }
  .checkout-page .cart-item-details h3 { font-size: var(--fs-subhead); }
  .checkout-page .cart-item-meta       { font-size: var(--fs-footnote); }
  .checkout-page .cart-item-price      { font-size: var(--fs-subhead); }
}
`

src = "@import 'tailwindcss';\n@import './original.css';\n@import './checkout-layout.css';\n" + block + "\n" + src.replace(/^@import 'tailwindcss';\r?\n/, "").replace(/^@import '\.\/original\.css';\r?\n/, "").replace(/^@import '\.\/checkout-layout\.css';\r?\n/, "")

writeFileSync("src/index.css", src)
console.log("✓ iOS font stack + Dynamic Type scale applied")
console.log("✓ Google Fonts Inter import removed (using system SF Pro now)")
console.log("✓ Checkout typography locked to readable minimums")
console.log("✓ Existing token names remapped to new scale")
console.log("\nDone. Run: npm run dev")
