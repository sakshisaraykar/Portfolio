function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sakshi<span>.</span>
            </a>

            <p>
              Full Stack Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-connect">
            <h4>Connect</h4>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:your-email@example.com">
              Email
            </a>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} Sakshi Saraykar. All rights reserved.
          </p>

          <p className="footer-built">
            Built with <span>React.js</span> & passion for development.
          </p>

        </div>

      </div>

      <style>{`
        .footer {
          padding: 65px 6% 25px;
          background: #060d18;
          color: #ffffff;
          border-top: 1px solid #17283d;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr;
          gap: 70px;
          padding-bottom: 45px;
        }

        .footer-logo {
          display: inline-block;
          margin-bottom: 15px;
          color: #f8fafc;
          font-size: 27px;
          font-weight: 800;
          text-decoration: none;
        }

        .footer-logo span {
          color: #60a5fa;
        }

        .footer-brand p {
          max-width: 330px;
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        .footer-links,
        .footer-connect {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .footer-links h4,
        .footer-connect h4 {
          margin: 0 0 8px;
          color: #f8fafc;
          font-size: 13px;
        }

        .footer-links a,
        .footer-connect a {
          color: #64748b;
          font-size: 12px;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-links a:hover,
        .footer-connect a:hover {
          color: #60a5fa;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 22px;
          border-top: 1px solid #17283d;
        }

        .footer-bottom p {
          margin: 0;
          color: #475569;
          font-size: 11px;
        }

        .footer-built span {
          color: #60a5fa;
        }

        @media (max-width: 750px) {
          .footer {
            padding: 50px 5% 22px;
          }

          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 450px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-brand {
            grid-column: auto;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;