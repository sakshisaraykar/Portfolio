function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-small-text">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Sakshi Saraykar</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/sakshisaraykar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi-saraykar-061a07340/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

           
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <div className="hero-photo-section">
          <div className="hero-image-wrapper">
            <img
              src="/sakshi photo.jpeg"
              alt="Sakshi Saraykar"
            />
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          min-height: calc(100vh - 70px);
          padding: 65px 7% 60px;
          background: #ffffff;
          color: #0f172a;
          display: flex;
          align-items: center;
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 70px;
        }

        /* LEFT CONTENT */

        .hero-small-text {
          color: #2563eb;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .hero-content h1 {
          font-size: 56px;
          line-height: 1.15;
          margin: 0 0 12px;
          color: #0f172a;
          font-weight: 800;
        }

        .hero-content h1 span {
          color: #2563eb;
        }

        .hero-content h2 {
          font-size: 28px;
          margin: 0 0 22px;
          color: #334155;
          font-weight: 600;
        }

        .hero-description {
          max-width: 620px;
          font-size: 17px;
          line-height: 1.8;
          color: #64748b;
          margin-bottom: 30px;
        }

        /* BUTTONS */

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 28px;
        }

        .primary-btn,
        .secondary-btn {
          padding: 13px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .primary-btn {
          background: #2563eb;
          color: #ffffff;
        }

        .primary-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .secondary-btn {
          background: #ffffff;
          color: #2563eb;
          border: 1px solid #2563eb;
        }

        .secondary-btn:hover {
          background: #eff6ff;
          transform: translateY(-2px);
        }

        /* SOCIAL LINKS */

        .hero-social {
          display: flex;
          gap: 25px;
        }

        .hero-social a {
          color: #475569;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: 0.3s;
        }

        .hero-social a:hover {
          color: #2563eb;
        }

        /* PHOTO */

        .hero-photo-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          width: 380px;
          height: 380px;
          border-radius: 50%;
          overflow: hidden;
          background: #ffffff;
          border: 8px solid #ffffff;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.14);
          position: relative;
        }

        .hero-image-wrapper img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        /* SUBTLE IMAGE SHINE */

        .hero-image-wrapper::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 60%;
          height: 250%;
          background: rgba(255, 255, 255, 0.18);
          transform: rotate(25deg);
          animation: photoShine 5s infinite;
          pointer-events: none;
        }

        @keyframes photoShine {
          0% {
            left: -100%;
          }

          35% {
            left: 150%;
          }

          100% {
            left: 150%;
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .hero-section {
            padding: 60px 5%;
          }

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-social {
            justify-content: center;
          }

          .hero-photo-section {
            order: -1;
          }

          .hero-image-wrapper {
            width: 320px;
            height: 320px;
          }

          .hero-content h1 {
            font-size: 46px;
          }
        }

        /* MOBILE */

        @media (max-width: 550px) {
          .hero-section {
            padding: 45px 20px;
          }

          .hero-image-wrapper {
            width: 250px;
            height: 250px;
          }

          .hero-content h1 {
            font-size: 36px;
          }

          .hero-content h2 {
            font-size: 23px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .primary-btn,
          .secondary-btn {
            width: 200px;
            text-align: center;
          }

          .hero-social {
            gap: 18px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;