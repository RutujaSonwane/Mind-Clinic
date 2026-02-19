"use client"

import { useEffect } from "react"

interface CallPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function CallPopup({ isOpen, onClose }: CallPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="call-popup-overlay">
      <div className="call-popup">
        <button className="call-popup-close" onClick={onClose} aria-label="Close popup">
          <i className="fas fa-times"></i>
        </button>
        <div className="call-popup-content">
          <i className="fas fa-desktop call-popup-icon"></i>
          <h3>Call Not Available on Desktop</h3>
          <p>Phone calls are not supported on desktop devices. Please choose one of these alternatives:</p>
          <div className="call-popup-options">
            <a href="https://wa.me/918149794048" target="_blank" rel="noopener noreferrer" className="popup-option">
              <i className="fab fa-whatsapp"></i>
              WhatsApp Message
            </a>
            <button
              onClick={() => {
                onClose()
                const appointmentSection = document.getElementById("appointment-form")
                if (appointmentSection) {
                  appointmentSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  // If not on book page, navigate to it
                  window.location.href = "/book#appointment-form"
                }
              }}
              className="popup-option"
            >
              <i className="fas fa-calendar-alt"></i>
              Fill Appointment Form
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
