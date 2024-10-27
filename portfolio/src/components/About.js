import React from 'react';
import ContactForm from './ContactForm';

function About() {
  return (
    <div className="comp_item comp_item--end scrollable" id="Description">
      <h1 className="space">Hi, I'm Teresa.</h1>
      <p className="padding">
        I'm studying <i>Software Engineering</i> at the University of Calgary, and I am on internship with Mobiltex after completing my third year of studies.
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
      <ContactForm /> 
    </div>
  );
}

export default About;
