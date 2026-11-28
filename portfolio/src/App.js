import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import PFP from './media/pfp.JPG';
import LOGO from './media/logo.png';
import gh from './media/github.png';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';
import FamilyOfSlush from './components/projects/FamilyOfSlush';
import WeeModel from './components/projects/WeeModel';
import KBBQCookingTimer from './components/projects/KBBQCookingTimer';
import CasSet from './components/projects/CasSet';
import TheLastShow from './components/projects/TheLastShow';
import Lotion from './components/projects/Lotion';
import MyWordle from './components/projects/MyWordle';
import AirlineFlightReservation from './components/projects/AirlineFlightReservation';
import DataStructsAlgosLibrary from './components/projects/DataStructsAlgosLibrary';
import WildlifeRescueScheduler from './components/projects/WildlifeRescueScheduler';

function App() {
  return (
    <div className="body">
      <header>
        <nav className="navbar">
          <div className="container">
            <ul className="nav nolist">
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/interests" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Interests
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <article>
        <div className="comp">
          <div className="image-content">
            <a href="https://tlavo.github.io/TLavoie">
              <img className="pfp" src={PFP} alt="Teresa Lavoie Pfp" />
            </a>
            <h1 className="pfp-name">Teresa Lavoie</h1>
            <h4>She/Her/Hers</h4>
            <p className="email-git">
              <a href="mailto:teresalavoie11@gmail.com">teresalavoie11@gmail.com</a>
              &nbsp;|&nbsp;
              <img src={gh} width="25" alt="github icon" />&nbsp;
              <a href="https://github.com/tlavo" target="_blank" rel="noopener noreferrer">tlavo</a>
            </p>
          </div>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/Family-of-Slush" element={<FamilyOfSlush />} />
            <Route path="/experience/WeeModel" element={<WeeModel />} />
            <Route path="/experience/K-BBQ-Cooking-Timer" element={<KBBQCookingTimer />} />
            <Route path="/experience/CasSet" element={<CasSet />} />
            <Route path="/experience/The-Last-Show" element={<TheLastShow />} />
            <Route path="/experience/Lotion" element={<Lotion />} />
            <Route path="/experience/My-Wordle" element={<MyWordle />} />
            <Route path="/experience/Airline-Flight-Reservation" element={<AirlineFlightReservation />} />
            <Route path="/experience/Data-Structs-Algos-Library" element={<DataStructsAlgosLibrary />} />
            <Route path="/experience/Wildlife-Rescue-Scheduler" element={<WildlifeRescueScheduler />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/interests" element={<Interests />} />

            {/* Redirect any unknown hash routes back to About (#/) */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </article>

      <footer>
        <a href="https://tlavo.github.io/TLavoie">
          <img className="logo" src={LOGO} alt="Teresa Lavoie Pfp" />
        </a>
        © Teresa Lavoie {(new Date().getFullYear())}
      </footer>
    </div>
  );
}

export default App;
