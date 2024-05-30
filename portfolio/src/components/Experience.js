import React from 'react';

function Experience() {
  return (
    <div className="comp_item comp_item--end" id="Description">
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
      <p>
        Explore my software engineering projects on&nbsp; 
        <a href="https://github.com/tlavo">GitHub</a>.
      </p>
      {/* <h2 className="space">Projects</h2> */}
    </div>
  );
}

export default Experience;
