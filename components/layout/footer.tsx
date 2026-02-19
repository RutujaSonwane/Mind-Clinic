export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className="map-section"
          style={{
            marginBottom: "2rem",
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
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1rem",
              color: "#5B5144",
              textAlign: "center",
            }}
          >
            Visit Our Clinic
          </h3>

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
                  padding: "1.5rem",
                  marginBottom: "1rem",
                }}
              >
                <i
                  className="fas fa-map-marker-alt"
                  style={{
                    color: "#85775B",
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                ></i>
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
                height: "300px",
                border: "2px solid rgba(133, 119, 91, 0.3)",
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

      <div className="container mx-auto px-4 max-w-6xl text-center">
        <p>
          &copy; 2025 AVAIA Mind Clinic | Ground Floor, Anand Chamber, 219 Opposite Mokha Engineering, Shivajinagar,
          Pune 411005
        </p>
        <p>Phone: +91 814 979 4048 | Email: avaiamindclinic@gmail.com</p>
      </div>
    </footer>
  )
}
