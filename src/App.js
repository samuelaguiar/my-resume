import "./style.scss";

import Education from "./component/Education";
import Experience from "./component/Experience";
import Header from "./component/Header";
import React from "react";
import Skills from "./component/Skills";
import data from "./data";

// console.log(data);

const App = () => (
  <div className="App">
    <Header data={data.personalInfo}></Header>
    <Skills data={data.skills}></Skills>
    <Experience data={data.experience}></Experience>
    <Education data={data.education}></Education>
  </div>
);

export default App;
