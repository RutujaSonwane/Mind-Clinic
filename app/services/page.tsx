import Link from "next/link"

export default function ServicesPage() {
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
          Clinical Psychology Services
        </h2>
        <p>
          Evidence-based therapeutic approaches that address the complexity of human experience with professional
          expertise and genuine compassion.
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
        <div className="card" style={{ position: "relative" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <i className="fas fa-brain" style={{ fontSize: "1.8rem", color: "#85775B" }}></i> Individual Psychotherapy
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Personalized one-on-one therapy sessions focused on your unique needs, challenges, and goals. We create a
            safe, confidential space for deep exploration and healing.
          </p>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#5B5144" }}>Best for:</h4>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Depression and anxiety</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Life transitions and stress</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Personal growth and self-awareness</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Relationship difficulties</li>
            </ul>
          </div>
          <Link
            href="/book?service=individual"
            className="service-book-btn"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#2a241c",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Appointment
          </Link>
        </div>

        <div className="card" style={{ position: "relative" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <i className="fas fa-heart" style={{ fontSize: "1.8rem", color: "#85775B" }}></i> Trauma-Informed Therapy
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Specialized treatment for individuals who have experienced trauma, using evidence-based approaches that
            prioritize safety, choice, and empowerment.
          </p>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#5B5144" }}>Approaches include:</h4>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>
                EMDR (Eye Movement Desensitization and Reprocessing)
              </li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Somatic experiencing</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Cognitive processing therapy</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Narrative therapy techniques</li>
            </ul>
          </div>
          <Link
            href="/book?service=trauma"
            className="service-book-btn"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#2a241c",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Appointment
          </Link>
        </div>

        <div className="card" style={{ position: "relative" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <i className="fas fa-cogs" style={{ fontSize: "1.8rem", color: "#85775B" }}></i> Cognitive Behavioral
            Therapy (CBT)
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
            A structured, goal-oriented approach that helps identify and change negative thought patterns and behaviors
            that contribute to emotional distress.
          </p>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#5B5144" }}>Effective for:</h4>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Anxiety disorders and phobias</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Depression and mood disorders</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>OCD and related conditions</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Sleep disorders</li>
            </ul>
          </div>
          <Link
            href="/book?service=cbt"
            className="service-book-btn"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#2a241c",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Appointment
          </Link>
        </div>

        <div className="card" style={{ position: "relative" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <i className="fas fa-leaf" style={{ fontSize: "1.8rem", color: "#85775B" }}></i> Mindfulness-Based
            Interventions
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Integration of mindfulness practices with clinical psychology to develop present-moment awareness, emotional
            regulation, and resilience.
          </p>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#5B5144" }}>Benefits include:</h4>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Stress reduction and relaxation</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Improved emotional regulation</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Enhanced self-awareness</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Better coping with chronic pain</li>
            </ul>
          </div>
          <Link
            href="/book?service=mindfulness"
            className="service-book-btn"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#2a241c",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Appointment
          </Link>
        </div>

        <div className="card" style={{ position: "relative" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <i className="fas fa-users" style={{ fontSize: "1.8rem", color: "#85775B" }}></i> Couples & Relationship
            Therapy
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Professional guidance for couples seeking to improve communication, resolve conflicts, and strengthen their
            emotional connection.
          </p>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#5B5144" }}>We address:</h4>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Communication breakdowns</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Trust and intimacy issues</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Life transitions affecting relationships</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Pre-marital counseling</li>
            </ul>
          </div>
          <Link
            href="/book?service=couples"
            className="service-book-btn"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#2a241c",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Appointment
          </Link>
        </div>

        <div className="card" style={{ position: "relative" }}>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <i className="fas fa-clipboard-check" style={{ fontSize: "1.8rem", color: "#85775B" }}></i> Psychological
            Assessment
          </h3>
          <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Comprehensive psychological evaluation to better understand cognitive, emotional, and behavioral patterns
            for accurate diagnosis and treatment planning.
          </p>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#5B5144" }}>Assessments for:</h4>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>ADHD and learning differences</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Autism spectrum disorders</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Mood and anxiety disorders</li>
              <li style={{ marginBottom: "0.3rem", color: "#6B6257" }}>Personality assessments</li>
            </ul>
          </div>
          <Link
            href="/book?service=assessment"
            className="service-book-btn"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "#2a241c",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "#5B5144",
            textAlign: "center",
          }}
        >
          Our Clinical Approach
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          We believe that effective therapy requires more than theoretical knowledge—it demands clinical skill, genuine
          empathy, and the courage to accompany clients through their most vulnerable moments.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "15px",
              padding: "1.5rem",
              textAlign: "center",
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
              Developing deeper insight into thoughts, emotions, and behavioral patterns through clinical exploration
              and evidence-based interventions.
            </p>
          </div>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "15px",
              padding: "1.5rem",
              textAlign: "center",
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
              Creating a therapeutic alliance that allows for safe processing of trauma, grief, and other painful
              experiences that need professional attention.
            </p>
          </div>
          <div
            style={{
              background: "rgba(133, 119, 91, 0.1)",
              borderRadius: "15px",
              padding: "1.5rem",
              textAlign: "center",
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
              Building resilience, coping skills, and sustainable strategies for long-term mental health and personal
              development beyond symptom management.
            </p>
          </div>
        </div>
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
          Ready to Begin Your Therapeutic Journey?
        </h2>
        <p>
          Professional, confidential, and personalized clinical psychology services. Take the first step toward greater
          awareness, healing, and growth.
        </p>
        <Link href="/book" className="btn-primary">
          Schedule Your Consultation
        </Link>
      </div>
    </div>
  )
}
