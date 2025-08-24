import React from "react";
import "./Home.css"; // Importing raw CSS

export default function Home() {
    return (
        <div className="portfolio">
            {/* Hero Section */}
            <section className="hero">
  <h1>
    Hi, I'm <span className="highlight">Talha Jubaer Prantor</span>
  </h1>
  <p>A Passionate Web Developer | MERN Stack | DSA in C++</p>

  <a href="#projects" className="btn">
    View My Work
  </a>

  {/* Social Icons */}
  <div className="social-icons">
    <a
      href="https://www.facebook.com/talha.jubaer.prantor.2001"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/talha-jubaer-prantor/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      href="https://github.com/TalhaJubaerPrantor"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </a>
  </div>
</section>


            {/* Skills Section */}
            <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {[
                        "React.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "CSS / HTML",
                        "API",
                        "C++ (DSA)",
                        "Git & GitHub",
                    ].map((skill, i) => (
                        <div key={i} className="skill-card">
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <img
                            style={{ width: "200px" }}
                            src="Edtech.png"
                            alt="Ed-Tech Platform"
                            className="project-img"
                        />
                        <h3>Ed-Tech Platform</h3>
                        <h5>(Web Application)</h5>

                        <p>
                            A modern e-learning platform.
                        </p>
                        <a
                            href="https://ed-tech-flax.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo →
                        </a>
                    </div>
                    <div className="project-card">
                        <img
                            src="shauqh.png"
                            alt="Blood Donation App"
                            className="project-img"
                            style={{ width: "200px" }}
                        />
                        <h3>E-Commarce</h3>
                        <h5>(Web Application)</h5>

                        <p>
                            A modern e-commarce platform.
                        </p>
                        <a href="https://starlit-paprenjak-d93000.netlify.app/">Live Demo →</a>
                    </div>
                    <div className="project-card">
                        <img
                            src="aqsait.png"
                            alt="Blood Donation App"
                            className="project-img"
                            style={{ width: "200px" }}
                        />
                        <h3>E-Commarce</h3>
                        <h5>(Web Application)</h5>

                        <p>
                            A modern business portfolio.
                        </p>
                        <a href="https://effulgent-bombolone-242f94.netlify.app/">Live Demo →</a>
                    </div>
                </div>
            </section>

            {/* Currently Working Section */}
            <section id="projects" className="projects">
                <h2>Currently Working</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <img
                            style={{ width: "200px" }}
                            src="neoBlood.png"
                            alt="Ed-Tech Platform"
                            className="project-img"
                        />
                        <h3>NeoBlood</h3>
                        <h5> (Web Application) </h5>

                        <p>
                            An online live blood bank.
                        </p>
                        <a
                            href="https://neo-blood-web.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo →
                        </a>
                    </div>
                    <div className="project-card">
                        <img
                            src="neoBlood-android.jpg"
                            style={{ width: "70px" }}
                            alt="Blood Donation App"
                            className="project-img"
                        />
                        <h3>Blood Donation App</h3>
                        <h5>(Android Application)</h5>

                        <p>
                            A React Native app for NeoBlood.
                        </p>
                        <a href="https://github.com/TalhaJubaerPrantor/neoblood-app">Coming Soon →</a>
                    </div>
                </div>
            </section>

            {/* Contribution Section */}
            <section id="projects" className="projects">
                <h2>Contributions</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <img
                            style={{ width: "400px" }}
                            src="pocketcap.jpg"
                            alt="Ed-Tech Platform"
                            className="project-img"
                        />
                        <h3>PocketCap</h3>
                        <h5>(Web Application)</h5>
                        <p>
                            An online insvestment platform.
                        </p>
                        <a
                            href="https://github.com/nafizul-islam-r/pocketcap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github Link →
                        </a>
                    </div>
                </div>
            </section>

            {/* DSA Platforms Section */}
            <section id="dsa" className="dsa">
                <h2>DSA Practice Platforms</h2>
                <p>
                    I regularly practice Data Structures and Algorithms to sharpen my
                    problem-solving skills. You can check out my profiles:
                </p>
                <div className="dsa-links">
                    <a
                        href="https://leetcode.com/u/talhajubaer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn secondary dsa-btn"
                    >
                        LeetCode
                    </a>
                    <a
                        href="https://codeforces.com/profile/talha_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn secondary dsa-btn"
                    >
                        Codeforces
                    </a>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <p>Let’s connect! Feel free to reach out via email or LinkedIn.</p>
                <div className="contact-buttons">
                    <a href="mailto:talhajubaer3121@email.com" className="btn">
                        Email Me
                    </a>
                    {/* <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn secondary"
                    >
                        LinkedIn
                    </a> */}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                © {new Date().getFullYear()} Talha Jubaer Prantor | All Rights Reserved
            </footer>
        </div>
    );
}
