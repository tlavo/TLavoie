import React from 'react';
import ProjectCard from './ProjectCard';
import CasSet from  '../media/casset.png';
import TheLastShow from  '../media/thelastshow.png';
import Lotion from  '../media/lotion.png';
import Wordle from  '../media/wordle.png';

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
          description="Full-Stack app for users to annotate playlists, capturing intimacy of sharing music with the use of React.js, Spotify API, Flask, and MongoDB"
          website="#" 
          github="https://github.com/kdafrose/CasSet" 
          inDevelopment={true}
        />
        <ProjectCard 
          image={TheLastShow} 
          title="The Last Show" 
          description="Full-Stack app with React.js & AWS to generate obituaries using ChatGPT, Amazon Polly to turn it into speech, and Cloudinary to store it"
          website="https://main--thelastshow.netlify.app/" 
          github="https://github.com/tlavo/The-Last-Show" 
          inDevelopment={false}
        />
        <ProjectCard 
          image={Lotion}
          title="Lotion" 
          description="React.js notes app with react-router-dom for front-end routing, react-quill, and uuid (no Back-End, but localStorage for browser persistence)"
          website="https://tealotion.netlify.app/"
          github="https://github.com/tlavo/assignment-06-lotion-tlavo-personal" 
          inDevelopment={false}
        />
        <ProjectCard 
          image={Wordle}
          title="My Wordle" 
          description="'Wordle' game made with HTML, CSS, and JavaScript that provides hints, instructions, and a light & dark mode"
          website="https://tlavo.github.io/Wordle/" 
          github="https://github.com/tlavo/Wordle" 
          inDevelopment={false}
        />
      </div>
    </div>
  );
}

export default Experience;
