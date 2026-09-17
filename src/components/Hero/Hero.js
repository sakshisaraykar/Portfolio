function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-small-title">Hello, I'm</p>

          <h1>
            Sakshi <span>Saraykar</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using
            React.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
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

        {/* RIGHT PROFILE PHOTO */}
        <div className="hero-image-area">
          <div className="image-glow"></div>

          <div className="profile-image-wrapper">
            <img
              src="/profile.jpg"
              alt="Sakshi Saraykar"
              className="profile-image"
            />
          </div>

          <div className="floating-card card-one">
            <span>⚛</span>
            React.js
          </div>

          <div className="floating-card card-two">
            <span>◆</span>
            MERN Stack
          </div>
        </div>

      </div>

      <style>{`

        .hero-section {
          min-height: 100vh;
          padding: 120px 7% 80px;
          display: flex;
          align-items: center;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(59, 130, 246, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(37, 99, 235, 0.10),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #f8fbff 0%,
              #eef6ff 50%,
              #ffffff 100%
            );

          color: #0f172a;
          overflow: hidden;
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: auto;

          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 70px;
        }

        /* LEFT */

        .hero-content {
          max-width: 650px;
        }

        .hero-small-title {
          margin-bottom: 12px;

          color: #2563eb;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .hero-content h1 {
          margin: 0;

          font-size: clamp(45px, 6vw, 76px);
          line-height: 1.05;
          font-weight: 800;
          color: #0f172a;
        }

        .hero-content h1 span {
          display: block;
          color: #2563eb;
        }

        .hero-content h2 {
          margin: 20px 0;

          font-size: clamp(25px, 3vw, 36px);
          font-weight: 600;

          color: #334155;
        }

        .hero-description {
          max-width: 600px;

          font-size: 18px;
          line-height: 1.8;

          color: #64748b;
          margin-bottom: 32px;
        }

        /* BUTTONS */

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          padding: 13px 25px;

          border-radius: 8px;

          text-decoration: none;
          font-weight: 600;

          transition: all 0.3s ease;
        }

        .primary-btn {
          background: #2563eb;
          color: white;

          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
        }

        .primary-btn:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        .secondary-btn {
          border: 1.5px solid #2563eb;
          color: #2563eb;
          background: white;
        }

        .secondary-btn:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-3px);
        }

        /* SOCIAL */

        .hero-socials {
          display: flex;
          gap: 25px;
          margin-top: 30px;
        }

        .hero-socials a {
          color: #475569;
          text-decoration: none;
          font-weight: 600;

          transition: 0.3s;
        }

        .hero-socials a:hover {
          color: #2563eb;
        }

        /* IMAGE AREA */

        .hero-image-area {
          position: relative;

          min-height: 500px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-glow {
          position: absolute;

          width: 360px;
          height: 360px;

          border-radius: 50%;

          background: rgba(37, 99, 235, 0.18);

          filter: blur(45px);
        }

        .profile-image-wrapper {
          position: relative;

          width: 340px;
          height: 340px;

          padding: 7px;

          border-radius: 50%;

          background: linear-gradient(
            135deg,
            #2563eb,
            #60a5fa,
            #93c5fd
          );

          box-shadow:
            0 25px 60px rgba(37, 99, 235, 0.25);

          z-index: 2;
        }

        .profile-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          border-radius: 50%;

          border: 7px solid white;
        }

        /* FLOATING CARDS */

        .floating-card {
          position: absolute;

          z-index: 3;

          padding: 13px 18px;

          display: flex;
          align-items: center;
          gap: 8px;

          background: rgba(255, 255, 255, 0.95);

          border: 1px solid #dbeafe;

          border-radius: 12px;

          color: #1e293b;

          font-size: 14px;
          font-weight: 700;

          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12);

          backdrop-filter: blur(10px);
        }

        .floating-card span {
          color: #2563eb;
          font-size: 20px;
        }

        .card-one {
          top: 80px;
          left: 20px;
        }

        .card-two {
          right: 10px;
          bottom: 85px;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {

          .hero-section {
            padding: 110px 6% 70px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;

            gap: 40px;
          }

          .hero-content {
            max-width: 700px;
            margin: auto;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons,
          .hero-socials {
            justify-content: center;
          }

          .hero-image-area {
            min-height: 400px;
            order: -1;
          }

          .profile-image-wrapper {
            width: 280px;
            height: 280px;
          }

          .image-glow {
            width: 300px;
            height: 300px;
          }

          .card-one {
            left: 10%;
            top: 50px;
          }

          .card-two {
            right: 8%;
            bottom: 45px;
          }
        }

        @media (max-width: 600px) {

          .hero-section {
            padding: 100px 20px 60px;
          }

          .hero-content h1 {
            font-size: 45px;
          }

          .hero-content h2 {
            font-size: 25px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-image-area {
            min-height: 340px;
          }

          .profile-image-wrapper {
            width: 230px;
            height: 230px;
          }

          .image-glow {
            width: 240px;
            height: 240px;
          }

          .floating-card {
            padding: 9px 12px;
            font-size: 12px;
          }

          .card-one {
            left: 0;
            top: 35px;
          }

          .card-two {
            right: 0;
            bottom: 25px;
          }
        }

      `}</style>
    </section>
  );
}

export default Hero;