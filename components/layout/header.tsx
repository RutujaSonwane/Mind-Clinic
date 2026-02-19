"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

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
      <nav>
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
    </header>
  )
}
