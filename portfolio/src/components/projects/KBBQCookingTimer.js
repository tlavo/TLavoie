import { useNavigate } from 'react-router-dom';
import './projects.css';
import kbbqcookingtimer from '../../media/kbbqcookingtimer.png';
import userresearch from '../../media/userresearch.png';
import pindefinitions1 from '../../media/pindefs1.png';
import pindefinitions2 from '../../media/pindefs2.png';
import wokwisiminit from '../../media/wokwisiminit.png';
import wokwisimfinal from '../../media/wokwisimfinal.png';
import circuitdiagram from '../../media/circuitdiagram.drawio.png';
import tablemodelcloseup from '../../media/tablemodelcloseup.png';
import circuitwiring from '../../media/circuitwiring.png';

function KBBQCookingTimer() {
    const navigate = useNavigate();

    return (
        <div className="comp_item main-content scrollable" id="Description">
            <button className="back-button" onClick={() => navigate('/experience')}>Back</button>
            <h1 className="space">K-BBQ Cooking Timer</h1>
            <p className="padding">K-BBQ Cooking Timer is a hardware system created by my <i>"HCI II"</i> group
                to explore the experience of people eating together through augmenting an everyday object
                (in this case a table). Feel free to check out the <a href="https://www.youtube.com/watch?v=VABHzoFOO8U"
                    target="_blank" rel="noopener noreferrer">demo video</a>!
            </p>

            <div className="center-container">
                <img className="site-picture" src={kbbqcookingtimer} alt="K-BBQ Cooking Timer" />
            </div>
            <h4 style={{ textAlign: 'center' }}>
                Image of "K-BBQ Cooking Timer" final system implementation
            </h4>

            <h2 className="space">Project Purpose and Goal</h2>
            <p className="project-descs padding">
                The K-BBQ Cooking Timer idea and system came to fruition after user research and many
                ideations. Overall, this system augments a table that customers (a group of ~4 people)
                sit at in a Korean barbecue restaurant by adding multiple timers that can run
                simultaneously for different types of meats. My group converged on this idea
                because while the main appeal of this activity is the novelty of cooking your own food
                at the table, it tends to introduce many variables of inconvenience.
            </p>
            <p className="project-descs padding">
                This augmentation would help people keep track of their cooking more easily to prevent
                both undercooking your food (improving potential health risks), and overcooking your
                food (improving the taste and overall eating part of the eating experience). Although
                the cooking timer feature is what was implemented in the scope of this project, some
                other features that my group designed and considered include, but are not limited to:
                (1) a mini-game to select whose turn it is to be the “Grill Master”, and (2) a cooling
                fan that turns on based off of a temperature sensor to keep the “Grill Master” cool
                and collected during their grilling shift!
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
                <b>USER RESEARCH:</b> At the start of this project I brought up the idea to collect
                user research with my team, since every person experiences eating with other people
                in varying ways. Collecting this user research ensured that many perspectives were
                considered. My teammate Batool and I took on this task by asking family members, friends,
                etc. about potential ideas to improve their eating experiences with others.
            </p>
            <p className="project-descs padding">
                Below are the user research responses I got from various users (including myself!):
            </p>
            <div className="center-container">
                <img className="user-stories-research-img" src={userresearch} alt="user research" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my user research responses
                </h4>
            </div>

            <p className="project-descs padding">
                <b>ARDUINO PIN ASSIGNMENTS:</b> It was crucial that the pin assignments were configured
                correctly as early as possible since there is a limited amount of pins, and different
                pins have different capabilities/functionality (i.e. digital vs. analog pins).
                Before any of the system's final code was written, Batool and I laid out the pin
                assignments by referencing documentation and writing the code within a WOKWI simulation.
            </p>
            <p className="project-descs padding">
                Below is the final code for the Arduino pin assignments:
            </p>
            <div className="two-pages-container center-container">
                <img className="" src={pindefinitions1} alt="pin definitions 1" />
                <img className="" src={pindefinitions2} alt="pin definitions 2" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of the Arduino pin assignment code
                </h4>
            </div>

            <p className="project-descs padding">
                <b>WOKWI SIMULATION:</b> I set up the components and initial circuit design in the WOKWI
                simulation after the initial pin assignments were complete. This was later updated and
                added to by many of my team members, but the initial set up was vital!
            </p>
            <p className="project-descs padding">
                Below are images of both the initial WOKWI simulation and the <a
                    href="https://wokwi.com/projects/480898714553074689" target="_blank"
                    rel="noopener noreferrer">final WOKWI simulation</a>, respectively:
            </p>
            <div className="two-pages-container center-container">
                <img className="" src={wokwisiminit} alt="wokwi simulation initial" />
                <img className="" src={wokwisimfinal} alt="wokwi simulation final" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of the initial and final WOKWI simulations
                </h4>
            </div>

            <p className="project-descs padding">
                <b>CIRCUIT DIAGRAM/SCHEMATIC:</b> Since the Arduino kit provided for this project
                had to be returned at the end of the project life-cycle, in order for the project to
                potentially be replicated, a circuit diagram/schematic (created by me) and a complete parts
                list (created by Zaki) were documented.
            </p>
            <p className="project-descs padding">
                Below you can see the circuit diagram I created in draw.io (I created various custom components
                in draw.io - the Arduino used for the system (Elegoo Uno R3), the analog joystick, the 16/2
                LCD screen, and the RGB LEDs):
            </p>
            <div className="center-container">
                <img className="site-picture" src={circuitdiagram} alt="circuit diagram" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my draw.io circuit diagram of the system
                </h4>
            </div>

            <p className="project-descs padding">
                <b>TABLE MODEL ASSISTANCE:</b> Titan took on the role of creating the majority of the table
                model, while the rest of the team provided assistance in providing materials, making
                smaller components, etc. My part in this assistance included providing cardstock to give the
                model a polished look, helping map out where some components would be situated in the table,
                and cutting holes for both the RGB LEDs and the analog joystick.
            </p>
            <p className="project-descs padding">
                Below is a close-up of the table model's top view:
            </p>
            <div className="center-container">
                <img className="site-picture" src={tablemodelcloseup} alt="table model close-up" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of table model close-up
                </h4>
            </div>

            <p className="project-descs padding">
                <b>CIRCUIT WIRING LEAD:</b> Testing out the system in a simulation website was very
                convenient for the whole team to work on, but in order to have a final product, the
                wiring had to be neat and correct—to be able to fit inside our table model, and in
                order to function. Since I created the circuit diagram, I took on the role of
                circuit wiring lead, collaborating (mainly) with my teammate Titan.
            </p>
            <p className="project-descs padding">
                Below is the system's circuit wiring inside the table model:
            </p>
            <div className="center-container">
                <img className="site-picture" src={circuitwiring} alt="circuit wiring" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of the final system's circuit wiring
                </h4>
            </div>

            <p className="project-descs padding">
                <b>GRILL MASTER RATING SYSTEM IDEA:</b> As an extra feature of the system that could be
                implemented in the future, I thought of a "Grill Master Rating System": After each "Grill
                Master" is done cooking, the users can rate their cooking and experience through a
                separate app, a tablet that is passed around, or something augmented directly within the
                eating experience such as a utensil, cup, napkin, etc. The winner (the grill master who
                got the highest rating) receives a special chef hat!
            </p>

            <h2 className="space">Problems and Thought Process</h2>
            <p className="project-descs padding">
                In progress...
            </p>
        </div>
    );
}

export default KBBQCookingTimer;
