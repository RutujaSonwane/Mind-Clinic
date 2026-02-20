"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="header">
      <h1>
        <span className="clinic-name">
          <span className="avaia-bold">AVAIA</span>
          <span className="mind-clinic">Mind Clinic</span>
        </span>
      </h1>
      <p className="tagline">Where insight goes beyond perception</p>
      <button
        type="button"
        className="menu-toggle"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? "Close" : "Menu"}
      </button>
      <nav className="header-nav">
        <Link href="/" className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        <Link href="/about" className={isActive("/about") ? "active" : ""}>
          About Us
        </Link>
        <Link href="/testimonials" className={isActive("/testimonials") ? "active" : ""}>
          Testimonials
        </Link>
        <Link href="/services" className={isActive("/services") ? "active" : ""}>
          Services
        </Link>
        <Link href="/book" className={isActive("/book") ? "active" : ""}>
          Book Appointment
        </Link>
      </nav>
      <div
        className={`mobile-sidebar-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <aside className={`mobile-sidebar ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-sidebar-header">
          <span>Menu</span>
          <button
            type="button"
            className="mobile-sidebar-close"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            X
          </button>
        </div>
        <nav className="mobile-sidebar-nav">
          <Link href="/" className={isActive("/") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link
            href="/testimonials"
            className={isActive("/testimonials") ? "active" : ""}
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link href="/services" className={isActive("/services") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/book" className={isActive("/book") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
            Book Appointment
          </Link>
        </nav>
      </aside>
    </header>
  )
}
