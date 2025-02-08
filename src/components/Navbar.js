import React from "react";
import '../stylesheet/Navbar.css';
import logo from '../images/SDG_LOGO.png';
import goal1 from '../images/Goal 1.png';
import goal3 from '../images/Goal 3.png';
import goal10 from '../images/Goal 10.png';
import goal14 from '../images/Goal 14.jpg';
import goal15 from '../images/Goal 15.png';



export default function Navbar() {
    return (
        <div className="Navbar">

            <div className="Title">
                <h1>Technology & The Body</h1>
                <h2>A non-invasive, Inexpensive Prosthetic Prototype</h2>
            </div>


            <div className="Awards">

                <a href="https://sdgs.un.org/goals">
                    <img src={logo} alt="Logo" className="sdg-logo" />
                </a>

                <a href="https://www.globalgoals.org/goals/1-no-poverty/">
                    <img src={goal1} alt="Goal 1" className="goal1" />
                </a>

                <a href="https://www.globalgoals.org/goals/3-good-health-and-well-being/">
                    <img src={goal3} alt="Goal 3" className="goal3" />
                </a>

                <a href="https://www.globalgoals.org/goals/10-reduced-inequalities/">
                    <img src={goal10} alt="Goal 10" className="goal10" />
                </a>

                <a href="https://www.globalgoals.org/goals/14-life-below-water/">
                    <img src={goal14} alt="Goal 14" className="goal14" />
                </a>

                <a href="https://www.globalgoals.org/goals/15-life-on-land/">
                    <img src={goal15} alt="Goal 15" className="goal15" />
                </a>
            </div>
        </div>
    );
}