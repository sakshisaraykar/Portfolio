function Projects() {
  const projects = [
    {
      number: "01",
      type: "MOVIE PLATFORM",
      title: "CineHub",
      link: "https://cinehub-git-sakshi-sarjya.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
      description:
        "A movie streaming and discovery application where users can explore movies, search for titles and view detailed movie information.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "Movie Listing",
        "Search & Filtering",
        "Movie Details",
        "User Authentication",
      ],
      github: "#",
    },

    {
      number: "02",
      type: "BANKING MANAGEMENT",
      title: "Banking Management System",
      link: "https://banking-management-client.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
      description:
        "A secure full-stack banking application that allows users to manage accounts, transfer money, make deposits and withdrawals, and track transactions.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      features: [
        "User Authentication",
        "Account Management",
        "Money Transfer",
        "Deposit & Withdrawal",
        "Loan Management",
        "Transaction History",
      ],
      github: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <span>MY PROJECTS</span>

          <h2>Things I've Built</h2>

          <p>
            Practical full-stack projects built using modern web
            technologies and real-world development concepts.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              {/* PROJECT IMAGE */}
              <div className="project-preview">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="image-overlay"></div>

                <div className="preview-topbar">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-url">
                    {project.type}
                  </div>
                </div>

                <span className="preview-number">
                  {project.number}
                </span>

                <div className="image-project-title">
                  <h4>{project.title}</h4>
                  <span>{project.type}</span>
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="technology-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* FEATURES */}
                <div className="features">
                  <h4>Key Features</h4>

                  {project.features.map((feature) => (
                    <p key={feature}>
                      <span>✓</span>
                      {feature}
                    </p>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="project-buttons">

                  {/* VIEW PROJECT */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project ↗
                  </a>

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* =========================
          CSS
      ========================= */}
      <style>{`

        /* =========================
           SECTION
        ========================= */

        .projects-section {
          padding: 100px 7%;
          background: #ffffff;
          color: #0f172a;
        }

        .projects-container {
          max-width: 1200px;
          margin: auto;
        }

        /* =========================
           HEADING
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
           PROJECT GRID
        ========================= */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 500px));
          justify-content: center;
          gap: 25px;
        }

        /* =========================
           CARD
        ========================= */

        .project-card {
          overflow: hidden;
          background: #f8fbff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #93c5fd;
          box-shadow:
            0 20px 45px rgba(37, 99, 235, 0.12);
        }

        /* =========================
           PROJECT IMAGE
        ========================= */

        .project-preview {
          position: relative;
          height: 235px;
          overflow: hidden;
          background: #0f172a;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition:
            transform 0.5s ease,
            filter 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.07);
          filter: brightness(0.85);
        }

        /* =========================
           IMAGE OVERLAY
        ========================= */

        .image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to bottom,
              rgba(15, 23, 42, 0.45),
              rgba(15, 23, 42, 0.05) 40%,
              rgba(15, 23, 42, 0.85)
            );
        }

        /* =========================
           BROWSER BAR
        ========================= */

        .preview-topbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 38px;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.92);
          border-bottom: 1px solid
            rgba(226, 232, 240, 0.8);
        }

        .browser-dots {
          display: flex;
          gap: 5px;
        }

        .browser-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #94a3b8;
        }

        .preview-url {
          font-size: 8px;
          color: #64748b;
          letter-spacing: 0.7px;
          font-weight: 700;
        }

        /* =========================
           NUMBER
        ========================= */

        .preview-number {
          position: absolute;
          top: 52px;
          right: 15px;
          padding: 6px 11px;
          background: rgba(255, 255, 255, 0.95);
          color: #2563eb;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 800;
          box-shadow:
            0 5px 15px rgba(15, 23, 42, 0.12);
        }

        /* =========================
           IMAGE TITLE
        ========================= */

        .image-project-title {
          position: absolute;
          left: 20px;
          bottom: 18px;
          color: white;
          z-index: 2;
        }

        .image-project-title h4 {
          margin: 0;
          font-size: 20px;
          font-weight: 800;
          text-shadow:
            0 2px 8px rgba(0, 0, 0, 0.35);
        }

        .image-project-title span {
          display: block;
          margin-top: 4px;
          font-size: 9px;
          letter-spacing: 1.5px;
          opacity: 0.85;
        }

        /* =========================
           CONTENT
        ========================= */

        .project-content {
          padding: 28px;
        }

        .project-card h3 {
          font-size: 23px;
          margin-bottom: 14px;
          color: #0f172a;
        }

        .project-description {
          color: #64748b;
          line-height: 1.7;
          font-size: 15px;
          min-height: 82px;
        }

        /* =========================
           TECHNOLOGIES
        ========================= */

        .technology-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0;
        }

        .technology-list span {
          padding: 6px 9px;
          background: #dbeafe;
          color: #1d4ed8;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
        }

        /* =========================
           FEATURES
        ========================= */

        .features {
          padding-top: 18px;
          border-top: 1px solid #e2e8f0;
        }

        .features h4 {
          margin-bottom: 12px;
          color: #0f172a;
          font-size: 14px;
        }

        .features p {
          display: flex;
          gap: 8px;
          color: #64748b;
          font-size: 13px;
          margin: 9px 0;
        }

        .features p span {
          color: #2563eb;
          font-weight: bold;
        }

        /* =========================
           BUTTONS
        ========================= */

        .project-buttons {
          display: flex;
          gap: 10px;
          margin-top: 25px;
        }

        .project-buttons a {
          flex: 1;
          text-align: center;
          padding: 10px;
          border-radius: 7px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          background: #2563eb;
          color: white;
          transition: 0.3s;
        }

        .project-buttons a:hover {
          background: #1d4ed8;
        }

        .project-buttons a:last-child {
          background: white;
          color: #2563eb;
          border: 1px solid #93c5fd;
        }

        .project-buttons a:last-child:hover {
          background: #eff6ff;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {
          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 650px) {
          .projects-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-description {
            min-height: auto;
          }

          .project-preview {
            height: 220px;
          }
        }

      `}</style>
    </section>
  );
}

export default Projects;