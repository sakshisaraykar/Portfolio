
function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <div className="section-heading">
          <span>EXPERIENCE</span>
          <h2>My Professional Journey</h2>
          <p>
            My professional software development experience and
            continuous learning journey.
          </p>
        </div>

        <div className="timeline">

          {/* PROFESSIONAL EXPERIENCE */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <span className="experience-label">
                    SOFTWARE DEVELOPMENT
                  </span>

                  <h3>Frontend Developer</h3>

                  <h4>Primal Infosys Pvt. Ltd. | On-Site</h4>

                  <p className="experience-duration">
                    2 Years of Experience
                  </p>
                </div>
              </div>

              <p className="experience-description">
                Experienced in developing responsive business websites
                and dynamic web applications using React.js and modern
                frontend technologies. Worked on building reusable UI
                components, improving user interfaces, and integrating
                REST APIs across different business domains.
              </p>

              <div className="experience-points">
                <p>
                  <span>✓</span>
                  Developed responsive and user-friendly web interfaces
                  using HTML5, CSS3 and JavaScript.
                </p>

                <p>
                  <span>✓</span>
                  Built dynamic React.js applications using reusable
                  components, props, state and hooks.
                </p>

                <p>
                  <span>✓</span>
                  Integrated REST APIs to fetch, display and manage
                  application data.
                </p>

                <p>
                  <span>✓</span>
                  Worked on projects across E-commerce and Cab Booking
                  domains.
                </p>

                <p>
                  <span>✓</span>
                  Improved UI responsiveness, fixed frontend bugs and
                  enhanced application usability.
                </p>

                <p>
                  <span>✓</span>
                  Collaborated on frontend development, component
                  reusability and application maintenance.
                </p>
              </div>

              <div className="experience-tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript (ES6+)</span>
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>REST APIs</span>
                <span>Git & GitHub</span>
              </div>
            </div>
          </div>

          {/* CONTINUOUS LEARNING */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="learning-card">
              <span>CONTINUOUS LEARNING</span>

              <h3>Modern Web Development</h3>

              <p>
                Continuously improving my skills in React.js, TypeScript,
                Next.js, Node.js, Express.js, MongoDB and REST APIs
                through hands-on projects and modern development practices.
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
          color: #334155;
          font-weight: 600;
          margin: 0;
        }

        .experience-duration {
          color: #64748b;
          font-size: 13px;
          margin-top: 7px;
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
          line-height: 1.6;
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
