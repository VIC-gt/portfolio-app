import React, { useState } from 'react';

function AddProjectForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [category, setCategory] = useState('Web App');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // stop page from refreshing

    // Basic validation
    if (!title.trim() || !description.trim() || !tech.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Pass data up to App.js
    onAdd({ title, description, tech, category });

    // Reset form fields
    setTitle('');
    setDescription('');
    setTech('');
    setCategory('Web App');
    setError('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a New Project</h2>

      {error && <p className="form-error">{error}</p>}

      <label>Title</label>
      <input
        type="text"
        placeholder="e.g. Weather App"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        placeholder="What does this project do?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Technologies</label>
      <input
        type="text"
        placeholder="e.g. React, Node.js"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      />

      <label>Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Web App</option>
        <option>Mobile</option>
        <option>Tool</option>
        <option>Library</option>
        <option>Other</option>
      </select>

      <button type="submit" className="submit-btn">Add Project</button>
    </form>
  );
}

export default AddProjectForm;