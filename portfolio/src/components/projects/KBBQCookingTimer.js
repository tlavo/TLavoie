import { useNavigate } from 'react-router-dom';
import './projects.css';
import kbbqcookingtimer from '../../media/kbbqcookingtimer.png';

function KBBQCookingTimer() {
    const navigate = useNavigate();

    return (
        <div className="comp_item main-content scrollable" id="Description">
            <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
            <h1 className="space">K-BBQ Cooking Timer</h1>
            <p className="padding">K-BBQ Cooking Timer is in progress...
            </p>

            <div className="center-container">
                <img className="site-picture" src={kbbqcookingtimer} alt="K-BBQ Cooking Timer" />
            </div>
            <h4 style={{ textAlign: 'center' }}>
                Image of "K-BBQ" final system implementation
            </h4>

            <h2 className="space">Project Purpose and Goal</h2>
            <p className="project-descs padding">
                In progress...
            </p>
            <p className="project-descs">
                The project's main criteria were:
            </p>
            <div className="project-descs-bullets">
                <p>
                    &#x2605; Augments everyday object(s) using physical computing to improve the experience of
                    people eating together in a creative, evocative and insightful way
                </p>
                <p>
                    &#x2605; Reliable level of execution on electronic functionality and clear user
                    design on how to run the system
                </p>
                <p>
                    &#x2605; High attention to detail, and aspects of sensory (visual/auditory/etc.)
                    design considered to support the overall concept of the system
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

            <h2 className="space">Problems and Thought Process</h2>
            <p className="project-descs padding">
                In progress...
            </p>
        </div>
    );
}

export default KBBQCookingTimer;
