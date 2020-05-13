import React from "react";

const Education = ({ data }) => (
  <div id="education">
    <h2>Education</h2>
    {data.map((step) => (
      <div className="education" key={step.title}>
        <span className="title">{step.title}</span>
        <div className="info">
          <span className="by">{step.by}</span>
          <span className="duration">{step.duration}</span>
        </div>
      </div>
    ))}
  </div>
);
export default Education;
