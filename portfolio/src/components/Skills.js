import React from 'react';

function Skills() {
  return (
    <div className="comp_item main-content scrollable" id="Description">
      <h1 className="space">Skills</h1>
      <h2 className="space2">Programming</h2>
      <div className="row padding">
        <div className="column_skills">
          <strong>Skill</strong> <br />
          <label htmlFor="file1">Python:</label> <br />
          <label htmlFor="file2">C/C++:</label> <br />
          <label htmlFor="file3">SQL:</label> <br />
          <label htmlFor="file4">Java:</label> <br />
          <label htmlFor="file5">UML:</label> <br />
          <label htmlFor="file6">HTML:</label> <br />
          <label htmlFor="file7">CSS:</label> <br />
          <label htmlFor="file8">JavaScript:</label> <br />
          <label htmlFor="file9">React:</label> <br />
          <label htmlFor="file10">RISC-V Assembly:</label>
        </div>
        <div className="column_skills">
          <strong>Expertise</strong> <br />
          <div className="bar-container" id="file1">
            <div className="bar-fill" style={{ width: `${80}%` }} />
          </div>
          <div className="bar-container" id="file2">
            <div className="bar-fill" style={{ width: `${75}%` }} />
          </div>
          <div className="bar-container" id="file3">
            <div className="bar-fill" style={{ width: `${90}%` }} />
          </div>
          <div className="bar-container" id="file4">
            <div className="bar-fill" style={{ width: `${95}%` }} />
          </div>
          <div className="bar-container" id="file5">
            <div className="bar-fill" style={{ width: `${95}%` }} />
          </div>
          <div className="bar-container" id="file6">
            <div className="bar-fill" style={{ width: `${100}%` }} />
          </div>
          <div className="bar-container" id="file7">
            <div className="bar-fill" style={{ width: `${95}%` }} />
          </div>
          <div className="bar-container" id="file8">
            <div className="bar-fill" style={{ width: `${80}%` }} />
          </div>
          <div className="bar-container" id="file9">
            <div className="bar-fill" style={{ width: `${75}%` }} />
          </div>
          <div className="bar-container" id="file10">
            <div className="bar-fill" style={{ width: `${100}%` }} />
          </div>
        </div>
      </div>
      <h2 className="space2">Software</h2>
      <div className="row padding">
        <div className="column_skills">
          <strong>Skill</strong> <br />
          <label htmlFor="file11">Git:</label> <br />
          <label htmlFor="file12">Jupyter Notebook:</label> <br />
          <label htmlFor="file13">Microsoft Office:</label> <br />
        </div>
        <div className="column_skills">
          <strong>Expertise</strong> <br />
          <div className="bar-container" id="file11">
            <div className="bar-fill" style={{ width: `${80}%` }} />
          </div>
          <div className="bar-container" id="file12">
            <div className="bar-fill" style={{ width: `${100}%` }} />
          </div>
          <div className="bar-container" id="file13">
            <div className="bar-fill" style={{ width: `${100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
