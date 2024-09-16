import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="flex:justify-center text-inline mx-auto p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">Skills</h2>
      <ul>
        <li><p className="text-center text-gray-700 text-lg leading-relaxed">Web Dev</p></li>
        <li><p className="text-center text-gray-700 text-lg leading-relaxed">Machine Learning</p></li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
