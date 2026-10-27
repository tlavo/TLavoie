import { useNavigate } from 'react-router-dom';
import './projects.css';
import familyofslush from '../../media/familyofslush.png';
import buttonresearch1 from '../../media/buttonresearch1.jpg';
import buttonresearch2 from '../../media/buttonresearch2.jpg';
import buttonsketches from '../../media/buttonsketches.jpg';
import button1 from '../../media/DragonFruitBefore.png';
import button2 from '../../media/DragonFruitAfter.png';
import button3 from '../../media/DragonFruitAfterOffset.png';
import pagelayout from '../../media/PageLayout.png';
import receipt1 from '../../media/receiptdraw.png';
import receipt2 from '../../media/receiptsite.png';

function FamilyOfSlush() {
    const navigate = useNavigate();

    return (
        <div className="comp_item main-content scrollable" id="Description">
            <button className="back-button" onClick={() => navigate('/TLavoie/experience')}>Back</button>
            <h1 className="space">Family of Slush</h1>
            <p className="padding">Family of Slush is a rich website experience to depict my <i>"HCI II"</i> group's similarities,
                differences, and dynamics in a novel and creative way. Feel free to visit the&nbsp;
                <a href="https://zakisalam223.github.io/CPSC581Group6Project1/"
                    target="_blank" rel="noopener noreferrer">deployed website</a>!</p>

            <div className="center-container">
                <img className="site-picture" src={familyofslush} alt="Family of Slush" />
            </div>
            <h4 style={{ textAlign: 'center' }}>
                Image of "Family of Slush" main page after filling cup with slush!
            </h4>

            <h2 className="space">Project Purpose and Goal</h2>
            <p className="project-descs padding">
                Family of Slush has many inspirations such as "Google Gravity" (weighted, interactive search page),
                but the closest inspiration my team was inspired by is the game "<a href="https://fliplinestudios.fandom.com/wiki/Papa's_Freezeria"
                    target="_blank" rel="noopener noreferrer">Papa’s Freezeria</a>". The context of the
                buttons on this website is a way to select slushy machine flavours at a local
                convenience-like store called “Family of Slush”.

            </p>
            <p className="project-descs">
                The project's main criteria were:
            </p>
            <div className="project-descs-bullets">
                <p>
                    &#x2605; Strong ability to evoke the individual's personalities/likenesses,
                    and team dynamics in a creative and insightful way
                </p>
                <p>
                    &#x2605; Reliable level of execution and clear user design on how to run
                    the application
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

            <p className="project-descs">
                <b>MY BUTTON:</b>
            </p>
            <div className="project-descs-bullets padding">
                <p>
                    &#x2605; Dragon Fruit Taste: The white fleshed dragon fruit (compared to other variants of it)
                    is considered light and refreshing, which emulates my personality trait of being kind, but not
                    always nice, or too sweet in other words.
                </p>
                <p>
                    &#x2605; Dragon Fruit Open Face: I decided on an open faced fruit to depict my overly
                    trusting nature.
                </p>
                <p>
                    &#x2605; Dragon Fruit Seeds: There are many seeds in a dragon fruit which physically
                    are representative of the moles on my face. On the right of the dragon fruit there is
                    a more prominent seed which is mapped to the most prominent mole on my face. The seeds
                    also represent my tendency to overthink.
                </p>
                <p>
                    &#x2605; Dragon Fruit Skin: The exterior of the dragon fruit is quite spikey, which
                    emulates my “kiki” type of personality, but also my disconnection from others (spikes
                    that often keep others away). “Kiki” is referring to the bouba–kiki effect, which is
                    a mental association with words and shapes which are (simply) more soft/sharp,
                    feminine/masculine, etc.
                </p>
                <p>
                    &#x2605; Dragon Fruit Tree Leaves: These come from the fruit’s tree which represents
                    the importance I have for my family, and the roots I came from. In the background of
                    my button there are a few of these leaves.
                </p>
            </div>

            <p className="project-descs padding">
                The images below have my research/sketches that led up to my final design. I first decided on
                the magenta version of a dragon fruit, as there are different variations (such as yellow).
                This is one of my favourite colors, but also represents me well. Some color psychology of
                magenta include aspects of harmony, emotional balance, transformation, uplifting,
                cheerfulness, and creativity. In general, I try to focus on balance in my everyday life,
                so I thought it was very fitting that green (also on the outer skin) is a color that
                balances out magenta (on outer skin).
            </p>
            <div className="dragon-fruit-research center-container">
                <img className="research-1" src={buttonresearch1} alt="dragon fruit button research 1" />
                <img className="research-2  " src={buttonresearch2} alt="dragon fruit button research 2" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of my dragon fruit button research
                </h4>
            </div>
            <div className="center-container">
                <img className="dragon-fruit-sketches-img" src={buttonsketches} alt="dragon fruit button sketches" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my dragon fruit button sketches
                </h4>
            </div>

            <p className="project-descs padding">
                Below are the 3 frames of my button designs (designed in Photopea).
                The first frame is the default frame when you have not interacted with my button at all,
                which signifies my introverted self that is a bit nervous upon first interaction. The second
                frame is the frame that happens after the user hovers over my button, to signify that I am
                generally a cheerful person. The third frame is when you click on my button - the animation
                flips between the second and third frames, to show a fun animation to indicate my
                personality/individuality!
            </p>

            <div className="dragon-fruit-frames center-container">
                <img src={button1} alt="dragon fruit button frame 1" />
                <img src={button2} alt="dragon fruit button frame 2" />
                <img src={button3} alt="dragon fruit button frame 3" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of my dragon fruit button frames
                </h4>
            </div>

            <p className="project-descs padding">
                <b>PAGE LAYOUT:</b> Early into the project's development phase I structured out the main
                HTML page of the website (seperated into main sections, divs, etc.) to allow for easier
                development with my team members, as well as to emphasize code organization. I added some
                general logic and functionality of the site (such as clicking the 4 main buttons, and pulling
                the lever). I also added some finished image elements such as the slushy cup, and the
                slushy receipt.
            </p>

            <p className="project-descs padding">
                Below is how the page layout looked after my initial implementation and structuring:
            </p>
            <div className="center-container">
                <img className="site-picture" src={pagelayout} alt="page layout" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Image of my initial page layout design
                </h4>
            </div>

            <p className="project-descs padding">
                <b>RECEIPT DRAWING/UI:</b> Since the website is an experience of a convenience-like store,
                the user is expected to have a receipt, which was decided on in ideation with my team members.
                I took on this design task, and following the decided upon drawn style of website components,
                I drew a receipt in Microsoft Paint, referencing receipts online.
            </p>
            <p className="project-descs padding">
                After I finished drawing and designing the receipt, I also inputted this into the website (HTML,
                CSS, and JavaScript), and added some more text on top conditionally shown based on the users
                actions to make the whole UI clean, complete, and cohesive with the overall design.
            </p>
            <div className="receipt-image-container center-container">
                <img className="" src={receipt1} alt="receipt drawing" />
                <img className="" src={receipt2} alt="receipt UI" />
            </div>
            <div className="padding">
                <h4 style={{ textAlign: 'center' }}>
                    Images of my receipt designs
                </h4>
            </div>

            <p className="project-descs padding">
                <b>SLUSH DESCRIPTIONS & ERROR HANDLING:</b> I wanted the website itself to have a distinct
                personality and feel to it. I emulated this in the way I wrote the slushy receipt descriptions
                (an example can be seen in the receipt image above), as well as the error handling pop-ups.
            </p>

            <p className="project-descs padding">
                <b>BUTTON SELECTION BORDER:</b> Late into the project, I realized that it is not always obvious
                that a user has a certain button selected (based on the specific button's animations, design,
                etc.), so I added a slight selection border arounded the button that is currently selected to
                make it obvious that the button is selected.
            </p>

            <h2 className="space">Problems and Thought Process</h2>
            <p className="project-descs padding">
                In progress...
            </p>
        </div >
    );
}

export default FamilyOfSlush;
