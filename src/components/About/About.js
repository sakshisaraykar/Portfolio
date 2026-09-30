function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <span>ABOUT ME</span>

          <h2>Get to Know Me</h2>

          <p>
            A passionate developer focused on building modern and
            user-friendly web applications.
          </p>
        </div>


        <div className="about-content">

          {/* ABOUT TEXT */}
          <div className="about-text">

            <h3>I'm Sakshi Saraykar</h3>

            <p>
              I'm a Full Stack Developer with a strong interest in building
              responsive, scalable and user-friendly web applications.
            </p>

            <p>
              I work with the MERN stack and have hands-on experience with
              React.js, JavaScript, TypeScript, Node.js, Express.js and
              MongoDB.
            </p>

            <p>
              I enjoy solving problems, learning new technologies and turning
              ideas into practical web applications.
            </p>

            <a href="#contact" className="about-btn">
              Let's Connect →
            </a>

          </div>


          {/* ABOUT CARDS */}
          <div className="about-cards">

            <a href="#education" className="about-card">
              <div className="about-icon">🎓</div>

              <h4>Education</h4>

              <p>Bachelor of Technology</p>
            </a>


            <a href="#skills" className="about-card">
              <div className="about-icon">💻</div>

              <h4>Specialization</h4>

              <p>MERN Stack Development</p>
            </a>


            <a href="#contact" className="about-card">
              <div className="about-icon">📍</div>

              <h4>Location</h4>

              <p>Pune, Maharashtra, India</p>
            </a>


            <a href="#experience" className="about-card">
              <div className="about-icon">🚀</div>

              <h4>Focus</h4>

              <p>Full Stack Web Development</p>
            </a>

          </div>

        </div>

      </div>


      <style>{`

        /* =========================
           ABOUT SECTION
        ========================= */

        .about-section {
          padding: 100px 7%;

          /* SAME BACKGROUND AS SKILLS */
          background: #f8fbff;

          color: #0f172a;
        }


        .about-container {
          max-width: 1200px;

          margin: auto;
        }


        /* =========================
           SECTION HEADING
        ========================= */

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


        /* =========================
           CONTENT
        ========================= */

        .about-content {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 70px;

          align-items: center;
        }


        /* =========================
           ABOUT TEXT
        ========================= */

        .about-text h3 {
          font-size: 30px;

          margin-bottom: 20px;

          color: #0f172a;
        }


        .about-text p {
          color: #64748b;

          line-height: 1.8;

          margin-bottom: 16px;

          font-size: 16px;
        }


        /* =========================
           BUTTON
        ========================= */

        .about-btn {
          display: inline-block;

          margin-top: 15px;

          padding: 12px 22px;

          background: #2563eb;

          color: white;

          text-decoration: none;

          border-radius: 8px;

          font-weight: 600;

          transition: 0.3s;
        }


        .about-btn:hover {
          background: #1d4ed8;

          transform: translateY(-2px);
        }


        /* =========================
           CARDS
        ========================= */

        .about-cards {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 20px;
        }


        .about-card {
          display: block;

          padding: 28px 22px;

          background: #ffffff;

          border: 1px solid #e2e8f0;

          border-radius: 14px;

          transition: 0.3s;

          text-decoration: none;

          color: inherit;

          cursor: pointer;
        }


        .about-card:hover {
          transform: translateY(-6px);

          border-color: #93c5fd;

          box-shadow:
            0 15px 35px rgba(37, 99, 235, 0.10);
        }


        .about-icon {
          font-size: 30px;

          margin-bottom: 15px;
        }


        .about-card h4 {
          margin-bottom: 8px;

          color: #0f172a;
        }


        .about-card p {
          margin: 0;

          color: #64748b;

          font-size: 14px;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 800px) {

          .about-content {
            grid-template-columns: 1fr;

            gap: 40px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 500px) {

          .about-section {
            padding: 70px 20px;
          }


          .section-heading h2 {
            font-size: 32px;
          }


          .about-cards {
            grid-template-columns: 1fr;
          }

        }

      `}</style>
    </section>
  );
}

export default About;