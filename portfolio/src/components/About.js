import React from 'react';
import ph from '../media/phone-call.png';
import li from '../media/linkedin.png';
import ig from '../media/instagram.png';
import pi from '../media/pinterest.png';

function About() {
  return (
    <div className="comp_item comp_item--end" id="Description">
      <h1 className="space">Hi, I'm Teresa.</h1>
      <p className="padding">
        I'm studying <i>Software Engineering</i> at the University of Calgary, and I'm currently completing my third year.
      </p>
      <p className="padding">
        A project I'm working on right now is <i>"CasSet"</i>, a social media, music app connected with the Spotify API.
      </p>
      <p className="padding">
        I enjoy full-stack software development, UI & UX design, discussions on AI ethics, etc. I'm also interested in effective
        communication, cultural anthropology within the digital space, and psychology.
      </p>
      <p className="padding">
        <b>Things I want to learn more about:</b> data science and machine learning (data visualization), mobile app development, user-centered design, augmented reality (AR) and virtual reality (VR), human-computer interaction (HCI), entrepreneurship, fashion styling.
      </p>

      <h2 className="space">Contact Me</h2>

      <div className="liststyle padding">
        <p className='contact-list'><img src={ph} width="19" alt="phone icon"/>&nbsp;587-719-5077</p>
        <p className='contact-list'><img src={li} width="19" alt="linkedin icon"/> 
          &nbsp;<a href="https://www.linkedin.com/in/teresa-lavoie-0a1a44264/" target="_blank" rel="noopener noreferrer">Teresa Lavoie </a>
        </p>
        <p className='contact-list'><img src={ig} width="19" alt="instagram icon"/> 
          &nbsp;<a href="https://www.instagram.com/teresalavoie11/" target="_blank" rel="noopener noreferrer">teresalavoie11</a>
        </p>
        <p className='contact-list'><img src={pi} width="19" alt="instagram icon"/> 
          &nbsp;<a href="https://www.pinterest.ca/teresamarialavoie/" target="_blank" rel="noopener noreferrer">teresamarialavoie</a>
        </p>
      </div>
    </div>
  );
}

export default About;
