import React from 'react';
import ProjectCard from './ProjectCard';
import CasSet from  '../media/casset.png';

function Experience() {
  return (
    <div className="comp_item comp_item--end scrollable" id="Description">
      <h1 className="space">Experience</h1>
      <div className="row padding">
        <div className="column_experience">
          <strong>Volunteer - Women in Engineering Day Event</strong> <br />
          Schulich School of Engineering
        </div>
        <div className="column_experience">
          February 23, 2023 <br />
          Calgary, Canada
        </div>
      </div>
      <div className="row padding">
        <div className="column_experience">
          <strong>Carpentry/Bookkeeping</strong> <br />
          Lavoie Contracting and Design
        </div>
        <div className="column_experience">
          2018-Present <br />
          Calgary, Canada
        </div>
      </div>
      <div className="row padding">
        <div className="column_experience">
          <strong>Server</strong> <br />
          OPA! of Greece
        </div>
        <div className="column_experience">
          2021-2022 <br />
          Calgary, Canada
        </div>
      </div>
      <div className="row padding">
        <div className="column_experience">
          <strong>Wait Staff</strong> <br />
          BMO Centre
        </div>
        <div className="column_experience">
          2018-2020 <br />
          Calgary, Canada
        </div>
      </div>
      <div className="row padding">
        <div className="column_experience">
          <strong>Volunteering</strong> <br />
          Westwood Cultural Centre
        </div>
        <div className="column_experience">
          2016-2019 <br />
          Calgary, Canada
        </div>
      </div>
      {/* <p>
        Explore my software engineering projects on&nbsp; 
        <a href="https://github.com/tlavo">GitHub</a>.
      </p> */}
      <h2 className="space">Projects</h2>
      <div className="projects-grid">
        <ProjectCard 
          image={CasSet} 
          title="CasSet" 
          description="Description for Project 1"
          website="https://project1.com" 
          github="https://github.com/user/project1" 
        />
        <ProjectCard 
          image="https://via.placeholder.com/150" 
          title="Project 2" 
          description="Description for Project 2"
          website="https://project2.com" 
          github="https://github.com/user/project2" 
        />
        <ProjectCard 
          image="https://via.placeholder.com/150" 
          title="Project 3" 
          description="Description for Project 3"
          website="https://project3.com" 
          github="https://github.com/user/project3" 
        />
        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
}

export default Experience;
