import { mkdirSync, writeFileSync, readFileSync } from "node:fs"
import { dirname } from "node:path"

const files = {
"src/checkout-layout.css": `/* Desktop checkout: one fixed, compact size at every width >= 900px. */
:root { --checkout-scale: 0.667; }

@media (width >= 900px) {
  body:has(.checkout-page) .top-header,
  body:has(.checkout-page) .main-content {
    zoom: var(--checkout-scale);
  }
  body:has(.checkout-page) .app .main-content.checkout-page-active {
    min-height: calc(100svh / var(--checkout-scale));
  }
  body:has(.checkout-page) .checkout-page {
    min-height: calc(
      (100svh / var(--checkout-scale)) - var(--header-height) - var(--space-4) - var(--space-5)
    );
  }
}
`,

"src/animations/AnimationLayer.tsx": `import "./animations.css"
import "./cart.css"
import useScrollEffects from "./useScrollEffects"

export default function AnimationLayer() {
  useScrollEffects()
  return null
}
`,

"src/animations/useScrollEffects.ts": `import { useEffect } from "react"

const REVEALS: { selector: string; mode?: "fade"; stagger?: number }[] = [
  { selector: ".section-heading" },
  { selector: ".review-strip-heading" },
  { selector: ".review-strip-window", mode: "fade" },
  { selector: ".pair-with-section" },
  { selector: ".footer-col", stagger: 80 },
]

export default function useScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const root = document.documentElement

    // Scroll-linked header/parallax effects run regardless of reveal support.
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const y = window.scrollY
        document.querySelector(".top-header")?.classList.toggle("is-scrolled", y > 8)
        if (y < 900 && !reduce.matches) {
          document
            .querySelector<HTMLElement>(".company-hero-visual")
            ?.style.setProperty("--parallax-y", Math.round(y * 0.08) + "px")
        }
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    // Reveal-on-scroll only if it can actually run. If not, nothing is ever hidden.
    let io: IntersectionObserver | undefined
    let mo: MutationObserver | undefined

    if (!reduce.matches && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            // data attribute, not a class: React rewrites className and would wipe it
            ;(entry.target as HTMLElement).dataset.revealed = "true"
            io!.unobserve(entry.target)
          }
        },
        // threshold 0: tall/wide elements can't fail to reach a % of their area
        { threshold: 0, rootMargin: "0px 0px -6% 0px" },
      )

      const tag = () => {
        for (const { selector, mode, stagger } of REVEALS) {
          document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
            if (el.dataset.reveal !== undefined) return
            el.dataset.reveal = mode ?? ""
            if (stagger) el.style.setProperty("--reveal-delay", i * stagger + "ms")
            io!.observe(el)
          })
        }
      }

      let queued = false
      mo = new MutationObserver(() => {
        if (queued) return
        queued = true
        requestAnimationFrame(() => {
          queued = false
          tag()
        })
      })
      mo.observe(document.body, { childList: true, subtree: true })

      // CSS only hides [data-reveal] once this flag is set
      root.classList.add("reveal-ready")
      tag()
    }

    return () => {
      io?.disconnect()
      mo?.disconnect()
      window.removeEventListener("scroll", onScroll)
      root.classList.remove("reveal-ready")
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        delete el.dataset.reveal
        delete el.dataset.revealed
      })
    }
  }, [])
}
`,

"src/animations/animations.css": `html { scroll-behavior: smooth; }

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
  .review-card { transition: transform var(--dur-snappy, .38s) var(--spring-snappy, ease-out); }
  .review-card:hover { transform: translateY(-4px); }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal-ready [data-reveal] { opacity: 1; transform: none; transition: none; }
  .company-hero-visual { transform: none; }
  .coffee-card:hover .product-visual img, .review-card:hover { transform: none; }
}
`,

"src/animations/cart.css": `@keyframes cart-row-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}
@keyframes cart-help-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}

.cart-list-item-wrap {
  max-height: 260px;
  animation: cart-row-in var(--dur-snappy, .38s) var(--spring-smooth, ease-out) backwards;
  transition:
    max-height .3s var(--ease-in-out, ease-in-out),
    opacity .2s var(--ease-out, ease-out),
    transform .3s var(--ease-in-out, ease-in-out);
}
.cart-list-item-wrap:nth-child(2) { animation-delay: 50ms; }
.cart-list-item-wrap:nth-child(3) { animation-delay: 100ms; }
.cart-list-item-wrap:nth-child(n+4) { animation-delay: 150ms; }

.cart-list-item-wrap.is-removing {
  max-height: 0;
  opacity: 0;
  transform: translateX(-12px);
  overflow: hidden;
  pointer-events: none;
}

.cart-limit-help {
  margin: 0;
  padding: 8px 0;
  font-size: 12px;
  color: var(--text);
  animation: cart-help-in var(--dur-snappy, .38s) var(--ease-out, ease-out) both;
}

.checkout-page .quantity-adjuster button,
.checkout-page .primary-button {
  transition: transform var(--dur-press, .12s) var(--spring-snappy, ease-out), background-color var(--dur-fade, .24s) var(--ease-out, ease-out);
}
.checkout-page .quantity-adjuster button:active:not(:disabled) { transform: scale(.92); }
@media (hover: hover) {
  .checkout-page .primary-button:hover:not(:disabled) { transform: translateY(-1px); }
}
.checkout-page .primary-button:active:not(:disabled) { transform: translateY(1px); }

@media (prefers-reduced-motion: reduce) {
  .cart-list-item-wrap, .cart-limit-help { animation: none; transition: none; }
  .checkout-page .quantity-adjuster button, .checkout-page .primary-button { transition: none; }
}
`,
}

for (const [path, text] of Object.entries(files)) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, text)
  console.log("wrote", path)
}

// Edit src/App.tsx
let app = readFileSync("src/App.tsx", "utf8")
if (!app.includes("AnimationLayer")) {
  app = app.replace(
    /(import InteractionSupport[^\r\n]*)/,
    '$1\nimport AnimationLayer from "./animations/AnimationLayer"',
  )
  app = app.replace(/(\s*)<InteractionSupport \/>/, "$1<InteractionSupport />$1<AnimationLayer />")
  writeFileSync("src/App.tsx", app)
  console.log("edited src/App.tsx")
}

// Edit src/index.css
let css = readFileSync("src/index.css", "utf8")
if (!css.includes("checkout-layout.css")) {
  css = css.replace(
    /(@import ['"]\.\/original\.css['"];)/,
    "$1\n@import './checkout-layout.css';",
  )
  writeFileSync("src/index.css", css)
  console.log("edited src/index.css")
}
console.log("Done. You can delete apply.mjs now.")
