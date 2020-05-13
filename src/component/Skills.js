import React from "react";

const Skills = ({ data }) => (
  <div id="skills">
    <h2>Skills</h2>
    <div className="bullets">
      {data.map((skill) => (
        <div className="bullet" key={skill}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);
export default Skills;
