import React from "react";
import "./styles/SocialMedia.css";

const SocialMedia = () => {
  return (
    <div id="contacts">
      <h1>Contact me</h1>
      <div className="social-links">
        <a href="mailto:andrewslee030401@gmail.com">
          <img src="email.png" alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-lee-9083a6207/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="linkedin.png" alt="Linkedin" />
        </a>
        <a
          href="https://www.github.com/andrewleel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
