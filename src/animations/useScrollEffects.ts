import { useEffect } from "react"

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
