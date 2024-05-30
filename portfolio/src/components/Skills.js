import React from 'react';

function Skills() {
  return (
    <div className="comp_item comp_item--end" id="Description">
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
          <progress id="file1" value="80" max="100"> 80% </progress> <br />
          <progress id="file2" value="75" max="100"> 75% </progress> <br />
          <progress id="file3" value="90" max="100"> 90% </progress> <br />
          <progress id="file4" value="95" max="100"> 95% </progress> <br />
          <progress id="file5" value="95" max="100"> 95% </progress> <br />
          <progress id="file6" value="100" max="100"> 100% </progress> <br />
          <progress id="file7" value="95" max="100"> 95% </progress> <br />
          <progress id="file8" value="80" max="100"> 80% </progress> <br />
          <progress id="file9" value="75" max="100"> 75% </progress> <br />
          <progress id="file10" value="100" max="100"> 100% </progress>
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
          <progress id="file11" value="80" max="100"> 80% </progress> <br />
          <progress id="file12" value="100" max="100"> 100% </progress> <br />
          <progress id="file13" value="90" max="100"> 90% </progress>
        </div>
      </div>
    </div>
  );
}

export default Skills;
