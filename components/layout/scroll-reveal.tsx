"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const REVEAL_SELECTORS = ["main > *", "main > * > *", "main .card", "main form", "main section", "main article"]

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observedElements = new Set<HTMLElement>()

    const addTarget = (element: Element, index: number) => {
      if (!(element instanceof HTMLElement)) return
      if (element.dataset.noReveal === "true") return
      if (observedElements.has(element)) return

      observedElements.add(element)

      if (reduceMotion) {
        element.classList.add("reveal-visible")
        return
      }

      element.classList.add("reveal-on-scroll")
      element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 300)}ms`)
    }

    let index = 0
    REVEAL_SELECTORS.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        addTarget(element, index)
        index += 1
      })
    })

    if (reduceMotion || observedElements.size === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target as HTMLElement
          element.classList.add("reveal-visible")
          observer.unobserve(element)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    observedElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return null
}
