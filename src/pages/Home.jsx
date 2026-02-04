import React, { useState } from "react";
import Projects from "../components/Projects.jsx";
import Testimonials from "../components/Testimonials.jsx";
import { projectsData, testimonialsData } from "../data/data.js";

function Home() {
  const [projects] = useState(projectsData);
  const [testimonials] = useState(testimonialsData);

  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <Projects projects={projects} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export default Home;
