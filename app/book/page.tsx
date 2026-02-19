"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import CallPopup from "../../components/ui/call-popup"

export default function BookPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    preferredTime: "",
    serviceType: "",
    concerns: "",
    previousTherapy: "",
  })
  const [showGlow, setShowGlow] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      const serviceMap: { [key: string]: string } = {
        individual: "individual",
        trauma: "trauma",
        cbt: "cbt",
        mindfulness: "mindfulness",
        couples: "couples",
        assessment: "assessment",
      }

      if (serviceMap[serviceParam]) {
        setFormData((prev) => ({
          ...prev,
          serviceType: serviceMap[serviceParam],
        }))

        setShowGlow(true)
        setTimeout(() => setShowGlow(false), 3500) // Remove glow after 3.5 seconds

        const scrollToForm = () => {
          const appointmentSection = document.getElementById("appointment-form")
          if (appointmentSection) {
            appointmentSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            })
          } else {
            // Retry if element not found yet
            setTimeout(scrollToForm, 200)
          }
        }

        // Wait longer for page to fully load before scrolling
        setTimeout(scrollToForm, 500)
      }
    }
  }, [searchParams.get("service")]) // Fixed infinite re-render by using searchParams.get() directly and proper dependency

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the form data to your backend
    alert(
      "Thank you for your appointment request! We will contact you within 24 hours to confirm your appointment details.",
    )

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      preferredTime: "",
      serviceType: "",
      concerns: "",
      previousTherapy: "",
    })
  }

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
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="card" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#5B5144",
            }}
          >
            Schedule Your Consultation
          </h2>
          <p>
            Take the first step toward professional clinical psychology care. Choose your preferred method to connect
            with us.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div className="card" style={{ textAlign: "center" }}>
            <h3
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1rem",
                color: "#5B5144",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <i className="fas fa-phone" style={{ fontSize: "2rem", color: "#85775B" }}></i> Call Us
            </h3>
            <p>Speak directly with our team to schedule your appointment and ask any questions about our services.</p>
            <a href="tel:+918149794048" className="btn-primary" onClick={handleCallClick}>
              Call +91 814 979 4048
            </a>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "1rem",
                color: "#5B5144",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: "2rem", color: "#85775B" }}></i> WhatsApp
            </h3>
            <p>Send us a message on WhatsApp for quick responses and easy scheduling at your convenience.</p>
            <a href="https://wa.me/918149794048" className="btn-primary" target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="card" style={{ marginBottom: "3rem" }} id="appointment-form">
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              color: "#5B5144",
              textAlign: "center",
            }}
          >
            Request an Appointment
          </h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <label
                  htmlFor="firstName"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid rgba(133, 119, 91, 0.3)",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontSize: "1rem",
                    color: "#5B5144",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid rgba(133, 119, 91, 0.3)",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontSize: "1rem",
                    color: "#5B5144",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid rgba(133, 119, 91, 0.3)",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontSize: "1rem",
                    color: "#5B5144",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid rgba(133, 119, 91, 0.3)",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontSize: "1rem",
                    color: "#5B5144",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <label
                  htmlFor="age"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="18"
                  max="100"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid rgba(133, 119, 91, 0.3)",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontSize: "1rem",
                    color: "#5B5144",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="preferredTime"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
                >
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid rgba(133, 119, 91, 0.3)",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "var(--font-roboto), sans-serif",
                    fontSize: "1rem",
                    color: "#5B5144",
                  }}
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="serviceType"
                style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
              >
                Type of Service Needed
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className={showGlow ? "service-glow" : ""}
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid rgba(133, 119, 91, 0.3)",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "var(--font-roboto), sans-serif",
                  fontSize: "1rem",
                  color: "#5B5144",
                }}
              >
                <option value="">Select service type</option>
                <option value="individual">Individual Psychotherapy</option>
                <option value="couples">Couples Therapy</option>
                <option value="trauma">Trauma-Informed Therapy</option>
                <option value="cbt">Cognitive Behavioral Therapy</option>
                <option value="mindfulness">Mindfulness-Based Interventions</option>
                <option value="assessment">Psychological Assessment</option>
                <option value="consultation">Initial Consultation</option>
              </select>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="concerns"
                style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
              >
                Brief Description of Concerns (Optional)
              </label>
              <textarea
                id="concerns"
                name="concerns"
                value={formData.concerns}
                onChange={handleInputChange}
                placeholder="Please share any specific concerns or goals you'd like to address in therapy. This information helps us prepare for your session."
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid rgba(133, 119, 91, 0.3)",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "var(--font-roboto), sans-serif",
                  fontSize: "1rem",
                  color: "#5B5144",
                  resize: "vertical",
                  minHeight: "100px",
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="previousTherapy"
                style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "#5B5144" }}
              >
                Have you had therapy before?
              </label>
              <select
                id="previousTherapy"
                name="previousTherapy"
                value={formData.previousTherapy}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid rgba(133, 119, 91, 0.3)",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.9)",
                  fontFamily: "var(--font-roboto), sans-serif",
                  fontSize: "1rem",
                  color: "#5B5144",
                }}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ display: "block", width: "100%", fontSize: "1.1rem", textAlign: "center" }}
            >
              Submit Appointment Request
            </button>
          </form>
        </div>

        <div
          className="card"
          style={{ textAlign: "center", background: "rgba(133, 119, 91, 0.1)", borderRadius: "20px", padding: "2rem" }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
            }}
          >
            Get in Touch
          </h3>
          <p>We&apos;re here to answer your questions and help you take the first step toward mental wellness.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "15px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <i className="fas fa-phone" style={{ color: "#85775B", fontSize: "1.5rem", marginBottom: "0.5rem" }}></i>
              <div>
                <strong>Phone</strong>
                <br />
                <a href="tel:+918149794048" style={{ color: "#5B5144", textDecoration: "none", fontWeight: 600 }}>
                  +91 814 979 4048
                </a>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "15px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <i
                className="fas fa-envelope"
                style={{ color: "#85775B", fontSize: "1.5rem", marginBottom: "0.5rem" }}
              ></i>
              <div>
                <strong>Email</strong>
                <br />
                <a
                  href="mailto:avaiamindclinic@gmail.com"
                  style={{ color: "#5B5144", textDecoration: "none", fontWeight: 600 }}
                >
                  avaiamindclinic@gmail.com
                </a>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "15px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{ color: "#85775B", fontSize: "1.5rem", marginBottom: "0.5rem" }}
              ></i>
              <div>
                <strong>Location</strong>
                <br />
                Ground Floor, Anand Chamber
                <br />
                219 Opposite Mokha Engineering
                <br />
                Shivajinagar, Pune 411005
              </div>
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginTop: "2rem",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "2rem",
            border: "1px solid rgba(133, 119, 91, 0.2)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              textAlign: "center",
            }}
          >
            Find Us Here
          </h3>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Located in the heart of Shivajinagar, our clinic is easily accessible and provides a comfortable environment
            for your therapy sessions.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "15px",
                  padding: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{
                    color: "#85775B",
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                  }}
                ></i>
                <h4
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#5B5144",
                    marginBottom: "0.5rem",
                  }}
                >
                  Our Address
                </h4>
                <p
                  style={{
                    fontWeight: 600,
                    color: "#5B5144",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  Ground Floor, Anand Chamber
                  <br />
                  219 Opposite Mokha Engineering
                  <br />
                  Shivajinagar, Pune 411005
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/y5HePCdGDnimNFMz8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  padding: "1rem 2rem",
                }}
              >
                <i className="fas fa-directions"></i>
                Get Directions
              </a>
            </div>

            <div
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                height: "350px",
                border: "2px solid rgba(133, 119, 91, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.83947831489315!3d18.53017708741684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0713139b2a9%3A0x4a4b0b0b0b0b0b0b!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AVAIA Mind Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <CallPopup isOpen={showCallPopup} onClose={() => setShowCallPopup(false)} />
    </>
  )
}
