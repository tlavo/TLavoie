import { useNavigate } from 'react-router-dom';
import './projects.css';
import weemodel from '../../media/weemodel.png';
import userstories from '../../media/userstories.png';
import readyupversion1 from '../../media/ReadyUpVersion1.png';
import readyupversion2 from '../../media/ReadyUpVersion2.png';
import keybindmappingdesign from '../../media/keybindmappingdesign.png';
import helpbuttondesigns from '../../media/helpbuttondesigns.png';
import pagelayout1 from '../../media/PageLayoutWeeModel1.png';
import pagelayout2 from '../../media/PageLayoutWeeModel2.png';
import apprenticemainpuzzleversion1 from '../../media/apprenticemainpuzzleversion1.png';
import apprenticemainpuzzleversion2 from '../../media/apprenticemainpuzzleversion2.png';
import apprenticemainpuzzle from '../../media/ApprenticeMainPuzzle.png';
import apprenticelevelcomplete from '../../media/ApprenticeLevelComplete.png';
import gamemasterdemo from '../../media/GameMasterDemo.png';
import fakeremote from '../../media/FakeRemote.png';

function WeeModel() {
    const navigate = useNavigate();

    return (
        <div className="comp_item main-content scrollable" id="Description">
            <button className="back-button" onClick={() => navigate('/experience')}>Back</button>
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
                Image of "WeeModel" initial page — ready-up page
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
                <b>USER STORIES:</b> To give a clear picture of what the application is used for by
                different user groups I defined user stories for both the "Novice" and "Expert" users (as
                mentioned above, in the case of this application these users are called "Apprentice"
                and "Game Master", respectively). These defined user stories are apart of a&nbsp;
                <u>Defining Requirements</u> document created by my teammate Batool.
            </p>
            <p className="project-descs padding">
                Below are the defined user stories I wrote as well as assumptions associated with them
                (by Batool):
            </p>
            <div className="center-container">
                <img className="user-stories-research-img" src={userstories} alt="user stories" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my user story definitions and relevant assumptions
                </h4>
            </div>


            <p className="project-descs padding">
                <b>READY-UP SCREEN DESIGNS:</b> For this screen's designs I cooperated with my teammate Batool.
                I created the first version of the Figma page design, while Batool finalized the design in
                version two as well as in implementation. Our initial inspiration was to make it look like
                a TV or screen in general, and then this evolved into inspiration from Nintendo
                "<a href="https://simple.wikipedia.org/wiki/Game_Boy_line" target="_blank"
                    rel="noopener noreferrer">Game Boy</a>" screens.
            </p>
            <p className="project-descs padding">
                Below are me and Batool's ready-up screen Figma designs in the order of version one and two,
                tively:
            </p>
            <div className="two-pages-container center-container">
                <img className="" src={readyupversion1} alt="ready-up version 1" />
                <img className="" src={readyupversion2} alt="ready-up version 2" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of me and Batool's ready-up screen Figma designs
                </h4>
            </div>

            <p className="project-descs padding">
                <b>KEY BIND MAPPING DESIGN:</b> Since each 3D function needed a key bind mapping
                associated with it, I created a Figma design to make the mapping even clearer to the user.
                I tried to emulate the look of a keyboard button in my design through css drop shadows,
                which I think turned out exactly how I envisioned! This design only has one version since
                the team and I did not have any major critiques. This design is used in multiple pages on
                the site, and was important to finalize early on.
            </p>
            <p className="note-point project-descs padding">
                <u>Note:</u> Earlier on into the project, we thought it would be good to keep the key binds near the
                typical "WASD" keys as these are common when gaming and are all near each other, but this later
                changed to be "R" for rotation for example, and so on since we felt this was more self explanatory
                for the user.
            </p>
            <div className="center-container">
                <img className="key-bind-mapping-design-img" src={keybindmappingdesign} alt="key bind mapping design" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my key bind mapping Figma design
                </h4>
            </div>

            <p className="project-descs padding">
                <b>HELP BUTTON DESIGNS:</b> I created various help button designs in Figma to explore what
                would work best for our site. I played around with shape, colour, icon type, and orientation.
                Coming up with multiple different designs ensured that the final implementation was up to
                standard and polished due to multiple factors considered.
            </p>
            <div className="center-container">
                <img className="help-button-designs-img" src={helpbuttondesigns} alt="help button designs" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my help button Figma designs
                </h4>
            </div>

            <p className="project-descs padding">
                <b>PAGE LAYOUTS/NAVIGATION IMPLEMENTATION:</b> Early into the project's development phase
                (after my teammate Zaki added some initial three.js implementation) I structured out the main
                HTML pages and styling pages into organized folders (assets, css, puzzle, etc.). As this
                project has multiple different pages, I referenced some standard multi-page application
                structuring online for easier development with my team members, as well as to emphasize code
                organization and modularity. I added some general page navigation logic and functionality of
                the site where the ready-up page navigates to the main puzzle page. Since the project uses
                Vite for a build tool and development server, I also added web page addresses to the
                vite.config.js file for further use by my fellow team members.
            </p>
            <p className="project-descs padding">
                Below is how the initial pages looked after my initial implementation and structuring
                (ready-up page navigating to the main puzzle page):
            </p>
            <div className="two-pages-container center-container">
                <img className="" src={pagelayout1} alt="page layout 1" />
                <img className="" src={pagelayout2} alt="page layout 2" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of my initial page layouts/navigation implementation
                </h4>
            </div>

            <p className="project-descs padding">
                <b>APPRENTICE MAIN PUZZLE SCREEN DESIGNS/IMPLEMENTATION:</b> I designed the main look of the
                apprentice puzzle screen. This is where the main functionality of the application exists. This
                design (in Figma as usual) took approximately two versions of design where changes were made
                to some labels, colours, buttons, etc. This screen was vital to design and complete (see the
                initial implementation of this page in "PAGE LAYOUTS/NAVIGATION IMPLEMENTATION" above), since
                all other puzzle screens are based off of the look of this design (i.e. game master demo puzzle
                screen).
            </p>
            <p className="project-descs padding">
                Below are the Figma designs for the apprentice main puzzle screen in the order of version
                one and two, respectively:
            </p>
            <div className="two-pages-container center-container">
                <img className="" src={apprenticemainpuzzleversion1} alt="apprentice main puzzle version 1" />
                <img className="" src={apprenticemainpuzzleversion2} alt="apprentice main puzzle version 2" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of my apprentice main puzzle screen Figma designs
                </h4>
            </div>
            <p className="project-descs padding">
                Below is the final implementation of the apprentice main puzzle screen where all
                implementation was done by me, except for the mode indication at the top (by Zaki), and
                the gyroscopic phone pop-up and button (by Batool). The 3D modeling functionality was also
                not completed by me (by Zaki):
            </p>
            <p className="note-point project-descs padding">
                <u>Note on info pop-up:</u> The final key bind mapping can be seen in the info pop-up on this
                page — as a team, we also decided to add some extra information alongside each specific control
                to make the controls as easy as possible for the user to understand (I completed this task).
                Another addition to the final info pop-up implementation is a "more" button (I created this
                button) which opens a phone controls cheat sheet (Batool created this cheat sheet) with
                further information on how the gyroscopic controls would work, but because this application
                is a proof of concept this is more for show on how the controls would work in the future.
            </p>
            <p className="note-point project-descs padding">
                <u>Note on help button:</u> The final help button design can be seen on this page
                — my team decided that the circular help button with the bell icon was the best design for
                this page, and Batool and I adjusted the red colour to be more complimentary to the green
                used in the design.
            </p>
            <div className="center-container">
                <img className="site-picture" src={apprenticemainpuzzle} alt="apprentice main puzzle page final implementation" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my final apprentice main puzzle screen implementation
                </h4>
            </div>

            <p className="project-descs padding">
                <b>APPRENTICE LEVEL COMPLETE SCREEN IMPLEMENTATION:</b> My teammate Titan designed the look
                of the level complete screen, while I completed the implementation based off of his design.
            </p>
            <p className="project-descs padding">
                Below is the final implementation of the apprentice level complete screen done by me:
            </p>
            <div className="center-container">
                <img className="site-picture" src={apprenticelevelcomplete} alt="apprentice level complete page final implementation" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my final apprentice level complete screen implementation
                </h4>
            </div>

            <p className="project-descs padding">
                <b>GAME MASTER DEMO SCREEN IMPLEMENTATION:</b> The game master demo screen was implemented by
                me. This design was based off of my apprentice main puzzle screen design/implementation, with
                a few extra components: (1) A title reading "Demo", and (2) a "record" button to simulate the
                action of recording the game master's screen for the apprentice to reference later.
            </p>
            <p className="project-descs padding">
                Below is the final implementation of the game master demo screen done by me:
            </p>
            <div className="center-container">
                <img className="site-picture" src={gamemasterdemo} alt="game master demo page final implementation" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my final game master demo screen implementation
                </h4>
            </div>

            <p className="project-descs padding">
                <b>FAKE REMOTE:</b> I created an extra feature of a fake remote to simulate the embodied
                output to the user being a noise and vibration on their phone remote (constraint: vibration
                only works on Android devices (not Apple), and does not support all browsers). This
                functionality should be tested on a phone, and can be found at this&nbsp;
                <a href="https://zakisalam223.github.io/CPSC581Group6Project2/remote/remote.html"
                    target="_blank" rel="noopener noreferrer">link</a>.
            </p>
            <p className="project-descs padding">
                Below is the fake remote screen to simulate embodied output done by me (the "&#x2716;"
                button simulates when the apprentice does a task wrong with a fail noise and a long
                vibration, while the "&#x2714;" button simulates when the apprentice does a task right
                with a complete noise and three shorter vibrations ~mapped to the complete noise):
            </p>
            <div className="center-container">
                <img className="fake-remote" src={fakeremote} alt="fake remote page implementation" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my fake remote screen implementation
                </h4>
            </div>

            <h2 className="space">Problems and Thought Process</h2>
            <p className="project-descs padding">
                In progress...
            </p>
        </div>
    );
}

export default WeeModel;
