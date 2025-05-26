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
        My name is Arnór Ingi, and I am a trained computer scientist with
        diverse experience in software development, including both front-end and
        back-end programming. Over the past few years, I have worked on a
        variety of projects, developing solutions based on clean code, clear
        thinking, and strong team collaboration.
        <br />
        <br />
        My education began in the computer science track at the Technical
        College of Iceland. I then attended the Icelandic School of Multimedia,
        where I deepened my understanding of design and media. I later earned a
        BSc degree in Computer Science from Reykjavik University, which provided
        a solid foundation for my technical work.
        <br />
        <br />
        Throughout my career, I have worked as a Full Stack Developer at KPMG,
        where I contributed to both front-end and back-end systems as well as
        data management. I also worked at Kiwi in game development, gaining
        valuable experience in creating functional, creative, and reliable
        solutions. I place strong emphasis on code quality, clear structure, and
        effective collaboration within teams.
        <br />
        <br />
        I am both motivated and equipped to take on challenging and varied
        software development projects. I look forward to applying the experience
        and skills I have developed to contribute value in a new role.
        <br />
        <br />I would appreciate the opportunity to attend an interview where I
        can further introduce myself and present examples of the projects I have
        worked on.
      </p>

      <div className="contact-info">
        <h4>aronlex@gmail.com</h4>
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
