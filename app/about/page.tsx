import Link from "next/link"

export default function AboutPage() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
      <div
        className="card director-card"
        style={{
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "400px",
            background: "rgba(233, 225, 204, 0.3)",
            borderRadius: "15px",
            border: "2px dashed #85775B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#85775B",
            fontStyle: "italic",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Upload Founder&apos;s Photo Here
          <br />
          <small>Recommended: 300x400px</small>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "2rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "#5B5144",
            }}
          >
            Dr. Pranali Deokar
          </h2>
          <p style={{ fontStyle: "italic", color: "#85775B", fontWeight: 600, marginBottom: "1.5rem" }}>
            M.Phil in Clinical Psychology from [University Name]
          </p>
          <p className="director-description">
            Dr. Pranali Deokar is a licensed clinical psychologist with extensive experience in evidence-based
            therapeutic approaches. Specializing in trauma-informed therapy, cognitive behavioral therapy, and
            mindfulness-based interventions, Dr. Deokar is passionate about creating a safe, professional environment
            where clients can explore their inner world and develop meaningful insights.
          </p>
          <p className="director-description">
            With a commitment to clinical excellence and genuine compassion, Dr. Deokar understands that therapy
            isn&apos;t just about managing symptoms—it&apos;s about fostering deep awareness, facilitating healing, and
            supporting sustainable growth.
          </p>
          <p className="director-description">
            Professional credentials include [add specific credentials, certifications, and training here].
          </p>
        </div>
      </div>

      <div className="card" style={{ gridColumn: "1 / -1" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "1.8rem",
            fontWeight: 600,
            marginBottom: "1rem",
            color: "#5B5144",
          }}
        >
          Our Story
        </h2>
        <p>
          AVAIA Mind Clinic was founded on the belief that mental health care should be both professionally rigorous and
          deeply compassionate. We understand that seeking therapy requires courage, and we&apos;re honored to be
          trusted with our clients&apos; most vulnerable experiences.
        </p>
        <p>
          Our name, AVAIA, represents our core mission: to help individuals develop greater awareness of their thoughts,
          emotions, and patterns; to facilitate genuine healing from past wounds; and to support sustainable growth and
          transformation.
        </p>
        <p>
          We don&apos;t believe in quick fixes or surface-level conversations. Real therapeutic work requires diving
          deep, facing what we&apos;ve been avoiding, and doing the difficult work of change. That&apos;s exactly what
          we&apos;re here to support.
        </p>
      </div>

      <div
        style={{
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(12px)",
            padding: "1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(91, 81, 68, 0.1)",
            border: "1px solid rgba(233, 225, 204, 0.5)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
            }}
          >
            Awareness
          </h3>
          <p>
            Helping clients develop deeper insight into their thoughts, emotions, and behavioral patterns through
            evidence-based therapeutic approaches.
          </p>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(12px)",
            padding: "1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(91, 81, 68, 0.1)",
            border: "1px solid rgba(233, 225, 204, 0.5)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
            }}
          >
            Healing
          </h3>
          <p>
            Creating a safe therapeutic space where clients can process trauma, work through difficult emotions, and
            heal from past wounds.
          </p>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(12px)",
            padding: "1.5rem",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(91, 81, 68, 0.1)",
            border: "1px solid rgba(233, 225, 204, 0.5)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
            }}
          >
            Growth
          </h3>
          <p>
            Supporting clients in developing new coping skills, building resilience, and creating lasting positive
            changes in their lives.
          </p>
        </div>
      </div>

      <div
        className="card"
        style={{
          gridColumn: "1 / -1",
          textAlign: "center",
          background: "rgba(133, 119, 91, 0.1)",
          padding: "3rem 2rem",
          borderRadius: "20px",
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
          Ready to Begin Your Journey?
        </h2>
        <p>
          Take the first step toward greater awareness, healing, and growth. Professional clinical psychology services
          tailored to your unique needs.
        </p>
        <Link href="/book" className="btn-primary">
          Book Your Consultation
        </Link>
      </div>
    </div>
  )
}
