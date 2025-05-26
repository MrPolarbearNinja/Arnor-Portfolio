import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/images/profile.png" alt="Profile" className="profile-pic" />

      <h2>About Me</h2>
      <p className="tagline">
        Game Devoliper · Full-stack Programmer · Designer · Creator
      </p>

      <p className="bio">
        Hi! I'm a passionate developer who loves building beautiful, useful apps
        and games. I specialize in Game Designe, React, Node.js, and
        Programming.
      </p>

      <div className="contact-info">
        <p>📧 aronlex@gmail.com</p>
      </div>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/arn%C3%B3r-ingi-k%C3%A1rason-93706b263/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://itch.io/c/4644425/arch-mazters-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Itch.io
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
