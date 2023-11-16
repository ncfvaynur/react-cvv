// App.js

import React from "react";
import "./styles.css";

const PersonalInfo = () => {
  return (
    <section>
      <h2>Personal Information</h2>
      <p>Date of Birth: June 12,2003</p>
      <p>Address: Azerbaijan, Sumgait city</p>
      <p>Phone: +994 (70) 943-33-00</p>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nacafova Aynur </h1>
        <p>Web Developer</p>
      </header>

      <PersonalInfo />

      <section>
        <h2>Contact Information</h2>
        <p>Email: nacafovaaynur3@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/ncfvaynur</p>
        <p>GitHub: github.com/ncfvaynur</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>Bachelor's Degree Process Automation Engineering</p>
        <p>Azerbaijan State of Oil And Industry University, 2020-now</p>
      </section>
      <section>
        <h2>Skills</h2>
        <li>HTML,CSS</li>
        <li>Javascript</li>
      </section>
      <section>
        <h2>Experience</h2>
        <p>Web Developer Course: Code For Future</p>
        <p>I prepared projects using HTML,CSS and JS</p>
      </section>
    </div>
  );
};

export default App;
