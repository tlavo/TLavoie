import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';
import arch from '../../media/casset_arch.png';
import data from '../../media/casset_data.png';

function CasSet() {
  const navigate = useNavigate();

  return (
    <div className="comp_item comp_item--end scrollable" id="Description">
      <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
      <h1 className="space">CasSet</h1>
      <p className="padding">CasSet is a convenient place to customize and write notes for playlists without using several apps together.</p>
      
      <div className="center-container">
        <iframe className="demo-video" src="https://www.youtube.com/embed/xplmfhf57QM?si=7p-NnxD3r3myZpNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <h2 className="space">Project Purpose and Goal</h2>
      <p className="project-descs">CasSet is inspired by the old trend from the 1970’s to 1980’s when the youth would create mixtapes on their cassette recorders for the sole purpose to share it with their friends or loved ones. This sharing of songs and the sincereness of the act is something that was lost in the digital age as people can create online playlists that can be sent over a message through links. We wanted to capture the intimacy of sharing something special, even though it’s small, with your loved ones and friends.</p>

      <h2 className="space">Web Stack and Explanation</h2>
      <p className="project-descs padding">The application’s architecture is a hybrid of Model-View-Controller (MVC) and Microservices, that utilizes <b>React</b> and <b>Javascript</b> for the Front-End and <b>Python</b>, connected to MongoDB for the back-end which is all connected using Flask. With seven members in my team, the system architecture had to be organized so that multiple members could develop the application at the same time. Since MVC’s basic model separates the front and back-end, it naturally helped the team divide into two groups for development.</p>
      <div className="center-container">
        <img className="project-pics padding" src={arch} alt="casset architecture"/>
      </div>
      <p className="project-descs padding ">The front-end of the app is made with <b>React</b> and <b>Javascript</b>, utilizing the Google Authentication to power our login for the application and the Spotify API to power the connection between user and their Spotify account so the playlists can be saved onto their Spotify on top of our database. <b>React</b> was used as it makes the process of creating front-end web development easier with its real time updates of the web app based on the changes in the code, speeding up the development process.</p>
      <p className="project-descs padding">The back-end has the microservices model and controllers where each important dataset is separated and stored in their own database collection, these datasets are, Users, Playlists, Songs, Friends. All the datasets are stored in MongoDB, a database based on horizontal scaling that uses a flexible schema for storing information. The entire back-end is coded in <b>Python</b>, as its simplicity is unmatched when creating the back-end functions needed to post, fetch and delete data while using the Flask framework to connect the back-end to the front-end.</p>
      <div className="center-container">
        <img className="project-pics padding" src={data} alt="casset database"/>
      </div>

      <h2 className="space">Problems and Throught Process</h2>
      <p className="project-descs">Connecting the notes functionality to show with its respective song was difficult with the Spotify API because sometimes when the user clicks the previous button of the music player, the song restarts rather than moving back a song in the playlist. Also, after the playlist has played all its songs, rather than the playlist restarting, after the next button is clicked, the playlist moves onto recommended songs based on the Spotify playlist and the users preferences. This additional functionality with the Spotify API music player, made presenting the right note with its respective song challenging, and with the time constraints of the project, this functionality was not implemented before the due date. Initially, this task did not seem as complex, but with earlier research of this part of the Spotify API, this could’ve held higher priority in the project timeline. I implemented this functionality through accessing the track ID, and matching that ID within the database, since that is how the song information was stored.</p>
    </div>
  );
}

export default CasSet;
