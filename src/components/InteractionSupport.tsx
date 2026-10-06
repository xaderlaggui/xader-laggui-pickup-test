import { useEffect, useState } from "react"

type Notice = { message: string undo?: () => void }

export default function InteractionSupport() {
  const [notice, setNotice] = useState<Notice | null>(null)
  useEffect(() => {
    const announce = (event: Event) =>
      setNotice((event as CustomEvent<Notice>).detail)
    window.addEventListener("pickup-feedback", announce)
    return () => window.removeEventListener("pickup-feedback", announce)
  }, [])
  useEffect(() => {
    if (!notice || notice.undo) return
    const timeout = window.setTimeout(() => setNotice(null), 5000)
    return () => window.clearTimeout(timeout)
  }, [notice])
  useEffect(() => {
    let activeDialog: HTMLElement | null = null
    let returnFocus: HTMLElement | null = null
    let originalOverflow = ""
    let inertElements: HTMLElement[] = []
    const restore = () => {
      inertElements.forEach((element) => {
        element.inert = false
      })
      inertElements = []
      document.body.style.overflow = originalOverflow
      if (returnFocus?.isConnected) returnFocus.focus()
    }
    const synchronize = () => {
      const dialogs = document.querySelectorAll<HTMLElement>(
        '[role="dialog"][aria-modal="true"]',
      )
      const next = dialogs[dialogs.length - 1] || null
      if (next === activeDialog) return
      if (activeDialog) restore()
      activeDialog = next
      if (!next) return
      returnFocus = (document.activeElement as HTMLElement)
      originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      let branch: HTMLElement | null = next
      while (branch?.parentElement && branch !== document.body) {
        for (const sibling of Array.from(branch.parentElement.children)) {
          if (
            sibling instanceof HTMLElement &&
            sibling !== branch &&
            !sibling.inert &&
            !sibling.classList.contains("ux-notice")
          ) {
            sibling.inert = true
            inertElements.push(sibling)
          }
        }
        branch = branch.parentElement
      }
      next.tabIndex = -1
      const target = next.querySelector<HTMLElement>(
        'button:not(:disabled), input:not(:disabled), [tabindex="0"]',
      )
      ;(target || next).focus()
    }
    const trapFocus = (event: KeyboardEvent) => {
      if (!activeDialog || event.key !== "Tab") return
      const controls = Array.from(
        activeDialog.querySelectorAll<HTMLElement>(
          'button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), a[href], [tabindex="0"]',
        ),
      ).filter(
        (element) =>
          element.getClientRects().length && !element.closest("[inert]"),
      )
      const current = controls.indexOf(document.activeElement as HTMLElement)
      if (!controls.length) {
        event.preventDefault()
        activeDialog.focus()
        return
      }
      if (event.shiftKey && current <= 0) {
        event.preventDefault()
        controls[controls.length - 1].focus()
      } else if (
        !event.shiftKey &&
        (current === controls.length - 1 || current < 0)
      ) {
        event.preventDefault()
        controls[0].focus()
      }
    }
    const observer = new MutationObserver(synchronize)
    observer.observe(document.body, { childList: true, subtree: true })
    document.addEventListener("keydown", trapFocus, true)
    synchronize()
    return () => {
      observer.disconnect()
      document.removeEventListener("keydown", trapFocus, true)
      if (activeDialog) restore()
    }
  }, [])
  return (
    <div
      className={notice ? "ux-notice" : "sr-status"}
      role="status"
      aria-live="polite"
    >
      {notice && (
        <>
          <span>{notice.message}</span>
          {notice.undo && (
            <button
              type="button"
              onClick={() => {
                notice.undo?.()
                setNotice(null)
              }}
            >
              Undo
            </button>
          )}
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setNotice(null)}
          >
            ×
          </button>
        </>
      )}
    </div>
  )
}
