import React from 'react';
import ProjectCard from './ProjectCard';
import CasSet from  '../media/casset.png';
import TheLastShow from  '../media/thelastshow.png';
import Lotion from  '../media/lotion.png';
import Wordle from  '../media/wordle.png';
import AirlineFlight from  '../media/airlineflight.png';
import DataStructsAlgos from  '../media/datastructsalgos.png';
import WildlifeRescue from  '../media/wildliferescue.png';

function Experience() {
  return (
    <div className="comp_item comp_item--end scrollable" id="Description">
      <h1 className="space">Experience</h1>
      <div className="e-list">
      <div className="e-item">
          <div className="e-details">
            <strong>Software Developer Intern</strong><br />
            Mobiltex Data Ltd.
          </div>
          <div className="e-dates">
            September 2024-August 2025<br />
            Calgary, Canada
          </div>
        </div>

        <div className="e-item">
          <div className="e-details">
            <strong>Volunteer - Women in Engineering Day Event</strong><br />
            Schulich School of Engineering
          </div>
          <div className="e-dates">
            February 23, 2023<br />
            Calgary, Canada
          </div>
        </div>

        <div className="e-item">
          <div className="e-details">
            <strong>Carpentry/Bookkeeping</strong><br />
            Lavoie Contracting and Design
          </div>
          <div className="e-dates">
            2018-2024<br />
            Calgary, Canada
          </div>
        </div>

        <div className="e-item">
          <div className="e-details">
            <strong>Server</strong><br />
            OPA! of Greece
          </div>
          <div className="e-dates">
            2021-2022<br />
            Calgary, Canada
          </div>
        </div>

        <div className="e-item">
          <div className="e-details">
            <strong>Wait Staff</strong><br />
            BMO Centre
          </div>
          <div className="e-dates">
            2018-2020<br />
            Calgary, Canada
          </div>
        </div>
      </div>
      
      <h2 className="space">Projects</h2>
      <div className="projects-grid">
        <ProjectCard 
          image={CasSet} 
          title="CasSet" 
          description="Full-Stack app for users to annotate playlists, capturing intimacy of sharing music with the use of React.js, Spotify API, Flask, and MongoDB"
          github="https://github.com/kdafrose/CasSet" 
          inDevelopment={true}
          message=<p>Sorry, this site is still in development; See the <a href="https://youtu.be/xplmfhf57QM" target="_blank" rel="noopener noreferrer">demo video</a> to preview</p>
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
          description="React.js notes app with react-router-dom for Front-End routing, react-quill, and uuid (no Back-End, but localStorage for browser persistence)"
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
        <ProjectCard 
          image={AirlineFlight}
          title="Airline Flight Reservation" 
          description="Java app using an SQL database, an access control system (data security), and the Strategy pattern for a flexible UI/UX approach"
          github="https://github.com/tlavo/480-Term-Project" 
          inDevelopment={true}
          message=<p>Sorry, this is a Java project; Download the <a href="https://github.com/tlavo/480-Term-Project/blob/main/ensf480-term-project.jar" target="_blank" rel="noopener noreferrer">.jar file</a> to view</p>
        />
        <ProjectCard 
          image={DataStructsAlgos}
          title="Data Structs/Algos Library" 
          description=<p style={{ fontSize: 'medium' }}>Java data structures and algorithms library of the types linear, node, and tree; this library can be used publicly (see <a href="https://github.com/tlavo/ensf338-final-project/blob/main/ENSF%20338%20Final%20Project.pdf" target="_blank" rel="noopener noreferrer">project pdf</a> for details)</p>
          website="https://tlavo.github.io/ensf338-final-project/" 
          github="https://github.com/tlavo/ensf338-final-project" 
          inDevelopment={false} 
        />
        <ProjectCard 
          image={WildlifeRescue}
          title="Wildlife Rescue Scheduler" 
          description="OOP Java app to generate a daily schedule for a wildlife rescue center with the use of SQL, and error handling & informative feedback"
          github="https://github.com/tlavo/380-Final-Project" 
          inDevelopment={true}
          message=<p>Sorry, this is a Java project; Download the <a href="https://github.com/tlavo/380-Final-Project/blob/main/EWRDemo.mp4" target="_blank" rel="noopener noreferrer">demo video</a> to view</p>
        />
      </div>
    </div>
  );
}

export default Experience;
