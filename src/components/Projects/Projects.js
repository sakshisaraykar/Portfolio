function Projects() {
  const projects = [
    {
      number: "01",
      icon: "🐾",
      title: "Pet Shop",
      description:
        "A modern e-commerce style pet shop application where users can explore pets, products and manage their shopping experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "Pet & Product Listing",
        "Search & Filtering",
        "User Authentication",
        "Shopping Cart",
      ],
    },

    {
      number: "02",
      icon: "🏨",
      title: "Hotel Booking System",
      description:
        "A full-stack hotel booking application that allows users to explore hotels, view rooms and manage their bookings.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "Hotel & Room Listing",
        "Room Booking",
        "User Authentication",
        "Booking Management",
      ],
    },

    {
      number: "03",
      icon: "🏢",
      title: "Society Management App",
      description:
        "A society management application designed to simplify resident, maintenance, complaint and notice management.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      features: [
        "Resident Management",
        "Maintenance Management",
        "Complaint Management",
        "Notice & Updates",
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="section-heading">
          <span>MY PROJECTS</span>

          <h2>Things I've Built</h2>

          <p>
            Practical full-stack projects built using modern web
            technologies and real-world development concepts.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-top">

                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">

                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="features">

                <h4>Key Features</h4>

                {project.features.map((feature, featureIndex) => (
                  <p key={featureIndex}>
                    <span>✓</span>
                    {feature}
                  </p>
                ))}

              </div>

              <div className="project-buttons">

                <a href="#contact">
                  View Project
                </a>

                <a href="#contact">
                  GitHub ↗
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

      <style>{`

        .projects-section {
          padding: 100px 7%;
          background: #ffffff;
          color: #0f172a;
        }

        .projects-container {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .project-card {
          padding: 30px;
          background: #f8fbff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #93c5fd;
          box-shadow: 0 20px 45px rgba(37, 99, 235, 0.10);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .project-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          border-radius: 12px;
          font-size: 28px;
        }

        .project-number {
          color: #2563eb;
          font-size: 20px;
          font-weight: 800;
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

        @media (max-width: 1000px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 650px) {
          .projects-section {
            padding: 70px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-description {
            min-height: auto;
          }
        }

      `}</style>
    </section>
  );
}

export default Projects;