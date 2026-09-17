function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="section-heading">
          <span>EXPERIENCE</span>
          <h2>My Professional Journey</h2>
          <p>
            My practical development experience and continuous learning
            journey.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <div className="experience-header">
                <div>
                  <span className="experience-label">
                    SOFTWARE DEVELOPMENT
                  </span>

                  <h3>Frontend / Full Stack Developer</h3>

                  <h4>Software Development Internship</h4>
                </div>

                <span className="completed">
                  Completed
                </span>
              </div>

              <p className="experience-description">
                Worked on web application development and gained practical
                experience in frontend development, API integration and
                full-stack application development.
              </p>

              <div className="experience-points">

                <p>
                  <span>✓</span>
                  Developed reusable React components and responsive UI.
                </p>

                <p>
                  <span>✓</span>
                  Integrated REST APIs with frontend applications.
                </p>

                <p>
                  <span>✓</span>
                  Worked with Git and GitHub for version control.
                </p>

                <p>
                  <span>✓</span>
                  Improved practical knowledge of MERN stack development.
                </p>

              </div>

              <div className="experience-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Git</span>
              </div>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="learning-card">

              <span>CONTINUOUS LEARNING</span>

              <h3>MERN Stack Development</h3>

              <p>
                Continuously improving my skills in React, TypeScript,
                Node.js, Express.js, MongoDB, REST APIs and modern
                development practices through hands-on projects.
              </p>

            </div>

          </div>

        </div>

      </div>

      <style>{`

        .experience-section {
          padding: 100px 7%;
          background: #f8fbff;
          color: #0f172a;
        }

        .experience-container {
          max-width: 950px;
          margin: auto;
        }

        .section-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 65px;
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

        .timeline {
          position: relative;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 10px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: #bfdbfe;
        }

        .timeline-item {
          position: relative;
          padding-left: 45px;
          margin-bottom: 35px;
        }

        .timeline-dot {
          position: absolute;
          left: 1px;
          top: 5px;

          width: 20px;
          height: 20px;

          background: #2563eb;
          border: 4px solid #dbeafe;
          border-radius: 50%;
          z-index: 2;
        }

        .experience-card,
        .learning-card {
          padding: 32px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .experience-label,
        .learning-card > span {
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .experience-card h3 {
          font-size: 25px;
          margin: 8px 0;
        }

        .experience-card h4 {
          color: #64748b;
          font-weight: 500;
        }

        .completed {
          height: fit-content;
          padding: 7px 12px;
          background: #dcfce7;
          color: #15803d;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .experience-description {
          margin: 22px 0;
          color: #64748b;
          line-height: 1.8;
        }

        .experience-points p {
          margin: 10px 0;
          color: #475569;
          font-size: 14px;
        }

        .experience-points span {
          color: #2563eb;
          margin-right: 8px;
          font-weight: bold;
        }

        .experience-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .experience-tech span {
          padding: 7px 10px;
          background: #eff6ff;
          color: #2563eb;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .learning-card h3 {
          margin: 10px 0;
        }

        .learning-card p {
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        @media (max-width: 600px) {
          .experience-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .experience-header {
            flex-direction: column;
          }

          .experience-card,
          .learning-card {
            padding: 24px;
          }
        }

      `}</style>
    </section>
  );
}

export default Experience;