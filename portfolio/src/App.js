import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import PFP from './media/pfp.JPG';
import gh from './media/github.png';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';
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
                <NavLink to="/TLavoie/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/TLavoie/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/TLavoie/education" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/TLavoie/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/TLavoie/interests" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Interests
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <article>
        <div className="comp">
          <div className="comp_item comp_item--start" id="Image_Name">
            <a href="https://tlavo.github.io/TLavoie/">
              <img className="pfp" src={PFP} alt="Teresa Lavoie Pfp"/>
            </a>
            <h1>Teresa Lavoie</h1>
            <h4>She/Her/Hers</h4>
            <p className="email-git">
              <a href="mailto:teresalavoie11@gmail.com">teresalavoie11@gmail.com</a>
              &nbsp;|&nbsp;
              <img src={gh} width="25" alt="github icon"/>&nbsp;
              <a href="https://github.com/tlavo" target="_blank" rel="noopener noreferrer">tlavo</a>
            </p>
          </div>
          <Routes>
            <Route path="/TLavoie/" element={<About />} />
            <Route path="/TLavoie/education" element={<Education />} />
            <Route path="/TLavoie/experience" element={<Experience />} />
            <Route path="/TLavoie/experience/CasSet" element={<CasSet />} />
            <Route path="/TLavoie/experience/The-Last-Show" element={<TheLastShow />} />
            <Route path="/TLavoie/experience/Lotion" element={<Lotion />} />
            <Route path="/TLavoie/experience/My-Wordle" element={<MyWordle />} />
            <Route path="/TLavoie/experience/Airline-Flight-Reservation" element={<AirlineFlightReservation />} />
            <Route path="/TLavoie/experience/Data-Structs-Algos-Library" element={<DataStructsAlgosLibrary />} />
            <Route path="/TLavoie/experience/Wildlife-Rescue-Scheduler" element={<WildlifeRescueScheduler />} />
            <Route path="/TLavoie/skills" element={<Skills />} />
            <Route path="/TLavoie/interests" element={<Interests />} />
          </Routes>
        </div>
      </article>

      <footer>© Teresa Lavoie 2024</footer>
    </div>
  );
}

export default App;
