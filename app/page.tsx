import Link from "next/link"

export default function HomePage() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
      <div className="card hero-card">
        <h2>Professional Online Therapy with a Clinical Psychologist</h2>
        <p>
          Evidence-based clinical psychology services that foster awareness, healing, and growth. Take care of your
          mental health anytime, anywhere in the world.
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">1400+</span>
            <div className="stat-label">Consultations Monthly</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">180,000+</span>
            <div className="stat-label">Lives Touched</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">3000+</span>
            <div className="stat-label">Hours of Therapy</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <div className="stat-label">Confidentiality</div>
          </div>
        </div>
      </div>

      <div className="card service-card">
        <h3>Clinical Excellence</h3>
        <p>
          Our approach combines deep clinical expertise with genuine compassion, creating a safe space for
          transformative therapeutic work.
        </p>
        <Link href="/services" className="btn-primary">
          Explore Services
        </Link>
      </div>

      <div className="card service-card">
        <h3>Evidence-Based Therapy</h3>
        <p>
          We use scientifically-proven therapeutic approaches including CBT, trauma-informed therapy, and
          mindfulness-based interventions.
        </p>
        <Link href="/about" className="btn-primary">
          Learn More
        </Link>
      </div>

      <div className="card service-card">
        <h3>Professional Support</h3>
        <p>
          Led by qualified clinical psychologists who understand that real healing requires both courage and
          professional guidance.
        </p>
        <Link href="/book" className="btn-primary">
          Start Your Journey
        </Link>
      </div>
    </div>
  )
}
