function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-heading">
          <span>QUALIFICATION</span>
          <h2>My Qualification</h2>
          <p>
            My academic background in Mechanical Engineering and practical
            learning in modern web development.
          </p>
        </div>

        <div className="education-card">
          <div className="education-icon">🎓</div>

          <div className="education-content">
            <span className="education-year">Bachelor's Degree</span>
            <h3>Bachelor of Technology</h3>
            <h4>Mechanical Engineering</h4>

            <p>
              Completed Bachelor of Technology in Mechanical Engineering,
              developing problem-solving, analytical thinking and technical
              skills.
            </p>

            <div className="education-tags">
              <span>Mechanical Engineering</span>
              <span>Problem Solving</span>
              <span>Technical Skills</span>
              <span>Web Development</span>
            </div>
          </div>
        </div>

        <div className="learning-card">
          <h3>Additional Learning</h3>
          <p>
            MERN Stack Development with hands-on experience in React.js,
            Node.js, Express.js and MongoDB.
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
          max-width: 1000px;
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

        .education-card {
          display: flex;
          gap: 25px;
          padding: 35px;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          background: #f8fbff;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
        }

        .education-icon {
          width: 70px;
          height: 70px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dbeafe;
          border-radius: 15px;
          font-size: 32px;
        }

        .education-year {
          color: #2563eb;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .education-content h3 {
          margin: 10px 0 6px;
          font-size: 25px;
        }

        .education-content h4 {
          margin-bottom: 15px;
          color: #2563eb;
          font-size: 17px;
        }

        .education-content p {
          color: #64748b;
          line-height: 1.7;
        }

        .education-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .education-tags span {
          padding: 7px 12px;
          background: #e0edff;
          color: #1d4ed8;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .learning-card {
          margin-top: 25px;
          padding: 28px 35px;
          border-left: 4px solid #2563eb;
          background: #eff6ff;
          border-radius: 10px;
        }

        .learning-card h3 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .learning-card p {
          color: #64748b;
          line-height: 1.7;
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
            padding: 25px;
          }

          .education-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;