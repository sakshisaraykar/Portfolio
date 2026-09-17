function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span>CONTACT ME</span>
          <h2>Let's Work Together</h2>
          <p>
            Have a project idea or looking for a Full Stack Developer?
            Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p className="contact-description">
              I'm open to Full Stack, MERN Stack and Frontend Developer
              opportunities. You can reach me through email or connect
              with me on LinkedIn and GitHub.
            </p>

            {/* Email */}
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

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <span>Location</span>
                <strong>India</strong>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-item">
              <div className="contact-icon">💼</div>

              <div>
                <span>Available For</span>
                <strong>Full Stack / MERN Opportunities</strong>
              </div>
            </div>

            {/* Social Links */}
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

              <a
                href="mailto:sakshisaraykar@gmail.com"
              >
                Email ↗
              </a>

            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-box">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been submitted.");
              }}
            >

              <div className="form-row">

                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit">
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>

      <style>{`

        .contact-section {
          padding: 100px 7%;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(59, 130, 246, 0.10),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #f8fbff 0%,
              #eef6ff 50%,
              #ffffff 100%
            );

          color: #0f172a;
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
        }

        .section-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 60px;
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
          color: #0f172a;
        }

        .section-heading p {
          color: #64748b;
          line-height: 1.7;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 30px;
          margin-bottom: 15px;
          color: #0f172a;
        }

        .contact-description {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 16px;
          margin-bottom: 15px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          text-decoration: none;
          transition: 0.3s;
        }

        .contact-item:hover {
          transform: translateX(5px);
          border-color: #93c5fd;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.08);
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
        }

        .contact-item span {
          display: block;
          color: #64748b;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .contact-item strong {
          display: block;
          color: #0f172a;
          font-size: 14px;
        }

        .social-links {
          display: flex;
          gap: 10px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .social-links a {
          padding: 10px 15px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          color: #2563eb;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: 0.3s;
        }

        .social-links a:hover {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .contact-form-box {
          padding: 35px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #334155;
          font-size: 14px;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          color: #0f172a;
          background: #ffffff;
          font-size: 14px;
          transition: 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.10);
        }

        .form-group textarea {
          resize: vertical;
        }

        .contact-form-box button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 8px;
          background: #2563eb;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact-form-box button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        @media (max-width: 850px) {

          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

        }

        @media (max-width: 600px) {

          .contact-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-form-box {
            padding: 25px 20px;
          }

        }

      `}</style>
    </section>
  );
}

export default Contact;