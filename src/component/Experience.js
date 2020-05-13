import React from "react";

const Experience = ({ data }) => (
  <div id="workExperience">
    <h2>Experience</h2>
    {data.map((exp) => (
      <div className="experience" key={exp.where}>
        <a href={exp.link}>{exp.where}</a>
        <span className="where">
          {exp.role}
          <span className="duration">
            {exp.start} - {exp.current ? "current" : exp.end}
          </span>
        </span>
        {exp.description.map((desc, id) => (
          <span className="description" key={id}>
            {desc}
          </span>
        ))}
      </div>
    ))}
  </div>
);
export default Experience;
