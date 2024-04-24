'use client';
import { getProject } from 'app/api';
import React, { useState } from 'react';
import CardProject from '@components/CardProject';
import ProjectFilter from '@components/ProjectFilter';

export default function Portfolio() {
  const allProjects = getProject.allProjects();
  const [projects, setProjects] = useState(allProjects);

  function updateProjects(newValue) {
    if (newValue) {
      setProjects(allProjects.filter((project) => project.group === newValue));
    } else {
      setProjects(allProjects);
    }
  }

  return (
    <section
      className="pt-28 grid justify-center justify-items-center bg-bg-ternary"
      id="portfolio"
    >
      <div className="max-w-xl">
        <h3 className="text-xlg text-center mb-5 ">Recent Works</h3>
        <p className="text-text-secondary text-center mb-12 font-medium">
          Discover some of my most recent projects that showcase my passion and
          skills in web development and user interface design.
        </p>
      </div>
      <ProjectFilter
        projects={allProjects}
        updateProjects={updateProjects}
      />

      {/* Project List */}
      <div className="max-w-1/2 flex flex-wrap justify-center  smd:grid smd:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
