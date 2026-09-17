function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "◈",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "React Router",
      ],
    },
    {
      title: "Backend",
      icon: "⚙",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "bcrypt.js",
        "API Integration",
      ],
    },
    {
      title: "Database",
      icon: "▣",
      skills: [
        "MongoDB",
        "Mongoose",
        "MongoDB Atlas",
      ],
    },
    {
      title: "Tools",
      icon: "🛠",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "AI Development Tools",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="section-heading">
          <span>MY SKILLS</span>
          <h2>Technologies I Work With</h2>
          <p>
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>

      <style>{`

        .skills-section {
          padding: 100px 7%;
          background: #f8fbff;
          color: #0f172a;
        }

        .skills-container {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .skill-card {
          padding: 30px 24px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          transition: 0.3s;
        }

        .skill-card:hover {
          transform: translateY(-7px);
          border-color: #93c5fd;
          box-shadow: 0 18px 40px rgba(37, 99, 235, 0.10);
        }

        .skill-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 23px;
          margin-bottom: 18px;
        }

        .skill-card h3 {
          margin-bottom: 20px;
          color: #0f172a;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skill-list span {
          padding: 7px 10px;
          background: #f1f5f9;
          color: #475569;
          border-radius: 6px;
          font-size: 13px;
          border: 1px solid #e2e8f0;
        }

        @media (max-width: 1000px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .skills-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
    </section>
  );
}

export default Skills;