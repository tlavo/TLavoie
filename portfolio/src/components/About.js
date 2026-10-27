import ContactForm from './ContactForm';

function About() {
  return (
    <div className="comp_item main-content scrollable" id="Description">
      <h1 className="space">Hi, I'm Teresa.</h1>
      <p className="padding">
        I'm studying <i>Software Engineering</i> at the University of Calgary,
        and I'm currently completing my final semester of studies after my year
        long internship with Mobiltex.
      </p>
      <p className="padding">
        A progam I'm in right now is <i>"Embedded in Embedded"</i> where I will
        finish developing an embedded project of my choice by the end of the
        spring!
      </p>
      <p className="padding">
        I enjoy full-stack software development, UI & UX design (user-centered design), human-computer
        interaction (HCI), discussions on AI ethics, etc. I'm also interested in
        effective communication, cultural anthropology (specifically within
        the digital space), and psychology.
      </p>
      <p className="padding">
        <b>Things I want to learn more about:</b> data science and machine learning
        (data visualization), mobile app development, augmented reality
        (AR) and virtual reality (VR), entrepreneurship, fashion styling.
      </p>

      <h2 className="space">Contact Me</h2>
      <ContactForm />
    </div>
  );
}

export default About;
