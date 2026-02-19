"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

interface Testimonial {
  id: number
  text: string
  author: string
  rating: number
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading testimonials from backend
    const loadTestimonials = () => {
      setTimeout(() => {
        // Sample testimonials - in real app, this would come from your backend
        const sampleTestimonials: Testimonial[] = [
          {
            id: 1,
            text: "The therapy sessions have been transformative. Dr. [Name] creates such a safe space where I can explore my thoughts and feelings without judgment. I've gained so much insight into my patterns and developed healthier coping strategies.",
            author: "- S.M., 28",
            rating: 5,
          },
          {
            id: 2,
            text: "I was hesitant about online therapy, but the experience has been incredible. The professional approach combined with genuine empathy made all the difference in my healing journey.",
            author: "- R.K., 35",
            rating: 5,
          },
          {
            id: 3,
            text: "After struggling with anxiety for years, I finally found the right support. The evidence-based approaches really work, and I feel equipped with tools to manage my mental health.",
            author: "- A.P., 42",
            rating: 5,
          },
        ]
        setTestimonials(sampleTestimonials)
        setLoading(false)
      }, 1500)
    }

    loadTestimonials()
  }, [])

  const renderStars = (rating: number) => {
    return "★".repeat(rating)
  }

  return (
    <div>
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
          What Our Clients Say
        </h2>
        <p>
          Real stories from real people who have found healing, growth, and transformation through our clinical
          psychology services.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        {loading ? (
          <div
            className="card"
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.6)",
              border: "2px dashed #85775B",
              color: "#85775B",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
              Testimonials Loading...
            </h3>
            <p>Client testimonials will be displayed here once they are loaded.</p>
            <p>
              <strong>For Developers:</strong> Use the testimonials state to inject testimonial cards dynamically.
            </p>
          </div>
        ) : testimonials.length === 0 ? (
          <div
            className="card"
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.6)",
              border: "2px dashed #85775B",
              color: "#85775B",
            }}
          >
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", marginBottom: "1rem" }}>
              No Testimonials Yet
            </h3>
            <p>Client testimonials will be displayed here once they are added through the backend system.</p>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card" style={{ position: "relative" }}>
              <div
                style={{
                  content: '"',
                  fontSize: "4rem",
                  fontFamily: "var(--font-playfair), serif",
                  color: "#85775B",
                  position: "absolute",
                  top: "-10px",
                  left: "20px",
                  opacity: 0.3,
                }}
              >
                "
              </div>
              <div style={{ color: "#DAA520", marginBottom: "1rem", fontSize: "1.2rem" }}>
                {renderStars(testimonial.rating)}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                  color: "#5B5144",
                }}
              >
                {testimonial.text}
              </div>
              <div style={{ fontWeight: 600, color: "#85775B", fontSize: "0.9rem" }}>{testimonial.author}</div>
            </div>
          ))
        )}
      </div>

      <div
        className="card"
        style={{
          textAlign: "center",
          background: "rgba(133, 119, 91, 0.1)",
          borderRadius: "20px",
          padding: "3rem 2rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "2rem",
            marginBottom: "1rem",
            color: "#5B5144",
          }}
        >
          Ready to Start Your Own Journey?
        </h2>
        <p>
          Join others who have chosen to prioritize their mental health and personal growth. Professional, confidential
          clinical psychology services.
        </p>
        <Link href="/book" className="btn-primary">
          Book Your Consultation
        </Link>
      </div>
    </div>
  )
}
