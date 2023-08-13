import React from "react";
import Profile from "./../components/Profile";
import Description from "./../components/Description";
import SocialMedia from "./../components/SocialMedia";
import Header from "./../components//Header";
import Project from "./../components/Project";
import "./Main.css";
import Stack from "react-bootstrap/Stack";

const Main = () => {
  const projects = [
    {
      name: "Vet Finder Service for Chewy",
      tools: "Next, TypeScript, Node, Express, Elastic Search",
      description: [
        "Developed web-based application for Chewy Pet Health using Next.js and TypeScript.",
        "Implemented a filtering functionality by leveraging the Google Maps API for precise locations of 1000+ clinics.",
        "Linked Elastic Search with Express.js back-end to develop APIs for front-end communication.",
        "Place 3rd place in a competitive challenge, developing a complete and comprehensive application in 24 hours.",
      ],
    },
    {
      name: "Image Processor ",
      tools: "Java, Swing Framework, JUnit",
      description: [
        "Built an image processor in Java through Object-Oriented Design and MVC pattern.",
        "Included 14 image modifications and loading & saving functionality to the user's local machine.",
        "Ensured code quality through Unit Testing with JUnit, verifying the functionality of each command.",
        "Achieved 70% code reduction with scalable and stable design through inheritance and abstraction.",
      ],
    },
  ];
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Profile />
      <Description />
      <SocialMedia />
      <div id="projects">
        <h1>Projects</h1>
        <Stack gap={3}>
          {projects.map((each) => {
            return (
              <Project className="project"
                name={each.name}
                tools={each.tools}
                description={each.description}
              />
            );
          })}
        </Stack>
      </div>
    </div>
  );
};

export default Main;
