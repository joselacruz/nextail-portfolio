'use client';

import { useState } from 'react';

export default function ProjectFilter({ updateProjects }) {
  const [filter, setFilter] = useState('all');

  const BtnFilter = ({ title }) => {
    return (
      <button
        className={`text-text-secondary px-6 py-2 rounded-full mr-2.5 ${
          filter == title.toLowerCase() ? 'active' : ''
        } hover:bg-primary hover:text-ternary`}
        onClick={() => handleFilter(title.toLowerCase())}
      >
        {title}
      </button>
    );
  };
  const handleFilter = (handler) => {
    setFilter(handler);

    if (handler === 'all') {
      updateProjects();
    } else {
      updateProjects(handler);
    }
  };

  return (
    <div className="mb-12">
      <BtnFilter
        title="All"
        active
      />
      <BtnFilter title="VanillaJS" />
      <BtnFilter title="React" />
      <BtnFilter title="NextJs" />
    </div>
  );
}
