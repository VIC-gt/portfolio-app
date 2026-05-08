import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AddProjectForm from './components/AddProjectForm';

// Sample starting data so the page isn't empty
const initialProjects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'Fetches live weather data using the OpenWeather API.',
    tech: 'React, Fetch API',
    category: 'Web App',
  },
  {
    id: 2,
    title: 'Todo List',
    description: 'A simple task manager with add and delete features.',
    tech: 'React, useState',
    category: 'Tool',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    description: 'Personal portfolio built with React and CSS Grid.',
    tech: 'React, CSS',
    category: 'Web App',
  },
];

function App() {
  // State: the list of projects
  const [projects, setProjects] = useState(initialProjects);

  // State: what the user types in the search box
  const [searchTerm, setSearchTerm] = useState('');

  // State: show or hide the Add Project form
  const [showForm, setShowForm] = useState(false);

  // Add a new project to the list
  function handleAddProject(newProject) {
    const projectWithId = { ...newProject, id: Date.now() };
    setProjects([...projects, projectWithId]);
    setShowForm(false); // hide form after submitting
  }

  // Filter projects based on search input
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Navbar receives a handler to toggle the form */}
      <Navbar onAddClick={() => setShowForm(!showForm)} />

      <main className="main-content">
        <h1 className="hero-title">My Projects</h1>
        <p className="hero-sub">A showcase of things I have built.</p>

        {/* Search input — updates searchTerm on every keystroke */}
        <input
          type="text"
          className="search-bar"
          placeholder="Search by title, tech, or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Conditionally render the form */}
        {showForm && (
          <AddProjectForm onAdd={handleAddProject} />
        )}

        {/* Show message if no results */}
        {filteredProjects.length === 0 ? (
          <p className="no-results">No projects match your search.</p>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;