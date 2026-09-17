function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <div className="section-heading">
          <span>EDUCATION</span>
          <h2>My Educational Background</h2>
          <p>
            Academic foundation combined with practical software
            development skills.
          </p>
        </div>

        <div className="education-card">

          <div className="education-icon">
            🎓
          </div>

          <div className="education-content">

            <span className="education-label">
              BACHELOR'S DEGREE
            </span>

            <h3>Bachelor of Technology</h3>

            <h4>Computer Science / Information Technology</h4>

            <p>
              Built a strong foundation in programming, software development,
              databases and web technologies while developing practical
              full-stack projects.
            </p>

            <div className="education-tags">
              <span>Programming</span>
              <span>Web Development</span>
              <span>Database</span>
              <span>Software Development</span>
            </div>

          </div>

        </div>

        <div className="learning-box">

          <div>
            <span>PROFESSIONAL LEARNING</span>
            <h3>MERN Stack Development</h3>
          </div>

          <p>
            Practical learning through real-world projects using React,
            Node.js, Express.js, MongoDB and modern development tools.
          </p>

        </div>

      </div>

      <style>{`

        .education-section {
          padding: 100px 7%;
          background: #ffffff;
          color: #0f172a;
        }

        .education-container {
          max-width: 950px;
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
        }

        .section-heading p {
          color: #64748b;
          line-height: 1.7;
        }

        .education-card {
          display: flex;
          gap: 30px;
          padding: 40px;
          background: #f8fbff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.05);
        }

        .education-icon {
          min-width: 70px;
          height: 70px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #dbeafe;
          border-radius: 16px;
          font-size: 35px;
        }

        .education-label,
        .learning-box span {
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .education-content h3 {
          font-size: 28px;
          margin: 8px 0;
        }

        .education-content h4 {
          color: #475569;
          font-weight: 500;
          margin-bottom: 18px;
        }

        .education-content p {
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .education-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .education-tags span {
          padding: 7px 10px;
          background: white;
          color: #475569;
          border: 1px solid #dbeafe;
          border-radius: 6px;
          font-size: 12px;
        }

        .learning-box {
          margin-top: 25px;
          padding: 28px 32px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;

          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 15px;
        }

        .learning-box h3 {
          margin-top: 8px;
        }

        .learning-box p {
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 650px) {
          .education-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .education-card {
            flex-direction: column;
            padding: 28px;
          }

          .learning-box {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }

      `}</style>
    </section>
  );
}

export default Education;