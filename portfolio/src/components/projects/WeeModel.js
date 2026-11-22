import { useNavigate } from 'react-router-dom';
import './projects.css';
import weemodel from '../../media/weemodel.png';

function WeeModel() {
    const navigate = useNavigate();

    return (
        <div className="comp_item main-content scrollable" id="Description">
            <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
            <h1 className="space">WeeModel</h1>
            <p className="padding">WeeModel is an expertise sharing platform created by my <i>"HCI II"</i> group
                to bring the proof of concept of a 3D modeling software plug-in with gyroscopic
                functionality to life! Feel free to visit the <a href="https://zakisalam223.github.io/CPSC581Group6Project2/"
                    target="_blank" rel="noopener noreferrer">deployed website</a>!
            </p>

            <div className="center-container">
                <img className="site-picture" src={weemodel} alt="WeeModel" />
            </div>
            <h4 style={{ textAlign: 'center' }}>
                Image of "WeeModel" initial ready-up page
            </h4>

            <h2 className="space">Project Purpose and Goal</h2>
            <p className="project-descs padding">
                WeeModel has many inspirations for the look of the system, but a main inspiration my group had
                is the Nintendo "<a href="https://en.wikipedia.org/wiki/Wii" target="_blank"
                    rel="noopener noreferrer">Wii</a>" game console since the system utilizes gyroscopic
                movements through a remote (the user's phone) as input, much like the game console remotes.
                Essentially, these gyroscopic movements are mapped to certain functionality in the 3D modeling
                software to make the learning experience and process easier for novices, as well as for
                experts to teach these said novices. Looking at the ready-up page above, we can see that in
                the case of this system the novice is called the "Apprentice", while the expert is called the
                "Game Master". This vocabulary is intential to further push the gamified experience, keeping
                the users engaged and imersed in the expertise sharing experience.
            </p>
            <p className="project-descs">
                The project's main criteria were:
            </p>
            <div className="project-descs-bullets">
                <p>
                    &#x2605; Helps experts share 3D CAD expertise with novice users through embodied
                    input and output in a creative, evocative and insightful way
                </p>
                <p>
                    &#x2605; Reliable level of execution and clear user design on how to run
                    the application, even for complex features
                </p>
                <p>
                    &#x2605; High attention to detail, and aspects of sensory (visual/auditory/etc.)
                    design considered to support the overall concept of the application
                </p>
            </div>

            <h2 className="space">Team Design and Ideations</h2>
            <p className="project-descs padding">
                In progress...
            </p>

            <h2 className="space">Individual Contributions</h2>
            <p className="project-descs padding">
                <b>TO-DO:</b> In progress...
            </p>
        </div>
    );
}

export default WeeModel;
