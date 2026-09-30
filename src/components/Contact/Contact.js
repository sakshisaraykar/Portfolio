
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-heading">
          <span>CONTACT ME</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project idea or looking for a Full Stack Developer?
            Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p className="contact-description">
              I'm open to Full Stack, MERN Stack and Frontend Developer
              opportunities. You can reach me through phone, email or
              connect with me on LinkedIn and GitHub.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:sakshisaraykar@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">✉</div>
              <div>
                <span>Email</span>
                <strong>sakshisaraykar@gmail.com</strong>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+919309899215"
              className="contact-item"
            >
              <div className="contact-icon">📞</div>
              <div>
                <span>Phone</span>
                <strong>+91 9309899215</strong>
              </div>
            </a>

            {/* LOCATION */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <span>Location</span>
                <strong>Pune, Maharashtra, India</strong>
              </div>
            </div>

            {/* AVAILABLE FOR */}
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <span>Available For</span>
                <strong>Frontend Developer / MERN Stack</strong>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-links">

              <a
                href="https://github.com/sakshisaraykar"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sakshi-saraykar-061a07340/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:sakshisaraykar@gmail.com">
                Email ↗
              </a>

              <a href="tel:+919876543210">
                Call ↗
              </a>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 7%;
          background: linear-gradient(135deg, #f8fbff, #eef6ff);
          color: #0f172a;
        }

        .contact-container {
          max-width: 900px;
          margin: auto;
        }

        .section-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 55px;
        }

        .section-heading span {
          color: #2563eb;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 10px 0;
          font-size: 42px;
        }

        .section-heading p {
          color: #64748b;
          line-height: 1.7;
        }

        .contact-content {
          display: flex;
          justify-content: center;
        }

        .contact-info {
          width: 100%;
          max-width: 700px;
          padding: 40px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
        }

        .contact-info h3 {
          font-size: 26px;
          margin-bottom: 15px;
        }

        .contact-description {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 0;
          border-bottom: 1px solid #e2e8f0;
          text-decoration: none;
          color: inherit;
        }

        .contact-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          border-radius: 10px;
          font-size: 20px;
          flex-shrink: 0;
        }

        .contact-item span {
          display: block;
          color: #64748b;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .contact-item strong {
          color: #0f172a;
          font-size: 15px;
        }

        .social-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .social-links a {
          padding: 10px 18px;
          border: 1px solid #93c5fd;
          border-radius: 8px;
          color: #2563eb;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .social-links a:hover {
          background: #2563eb;
          color: #ffffff;
        }

        @media (max-width: 650px) {
          .contact-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .contact-info {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;

