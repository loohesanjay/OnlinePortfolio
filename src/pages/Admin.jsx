import React, { useState } from "react";

function Admin() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectLink, setProjectLink] = useState("");

  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialFeedback, setTestimonialFeedback] = useState("");

  const handleAddProject = () => {
    alert(`Project added:\n${projectTitle}\n${projectDesc}\n${projectLink}`);
    setProjectTitle("");
    setProjectDesc("");
    setProjectLink("");
  };

  const handleAddTestimonial = () => {
    alert(`Testimonial added:\n${testimonialName}\n${testimonialFeedback}`);
    setTestimonialName("");
    setTestimonialFeedback("");
  };

  return (
    <div className="container">
      <h1>Admin Panel</h1>

      <h2>Add Project</h2>
      <input
        type="text"
        placeholder="Project Title"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />
      <textarea
        placeholder="Project Description"
        value={projectDesc}
        onChange={(e) => setProjectDesc(e.target.value)}
      />
      <input
        type="text"
        placeholder="Project Link"
        value={projectLink}
        onChange={(e) => setProjectLink(e.target.value)}
      />
      <button onClick={handleAddProject}>Add Project</button>

      <h2>Add Testimonial</h2>
      <input
        type="text"
        placeholder="Name"
        value={testimonialName}
        onChange={(e) => setTestimonialName(e.target.value)}
      />
      <textarea
        placeholder="Feedback"
        value={testimonialFeedback}
        onChange={(e) => setTestimonialFeedback(e.target.value)}
      />
      <button onClick={handleAddTestimonial}>Add Testimonial</button>
    </div>
  );
}

export default Admin;
