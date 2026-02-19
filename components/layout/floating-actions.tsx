"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import CallPopup from "../ui/call-popup"

export default function FloatingActions() {
  const [showCallPopup, setShowCallPopup] = useState(false)

  const handleCallClick = (e: React.MouseEvent) => {
    // Check if device is desktop (screen width > 768px)
    if (window.innerWidth > 768) {
      e.preventDefault()
      setShowCallPopup(true)
    }
    // On mobile, let the default tel: link work
  }

  return (
    <>
      <div className="float-actions">
        <a href="tel:+918149794048" className="float-btn call" aria-label="Call Us" onClick={handleCallClick}>
          <i className="fas fa-phone"></i>
        </a>
        <a
          href="https://wa.me/918149794048"
          className="float-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <Link href="/book" className="float-btn book">
          Book
        </Link>
      </div>

      <CallPopup isOpen={showCallPopup} onClose={() => setShowCallPopup(false)} />
    </>
  )
}
