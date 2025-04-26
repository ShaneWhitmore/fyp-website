import React from "react";
import '../stylesheet/Body.css';
import ProfileCard from '../components/ProfileCard.js'
import Poster from '../images/FYP Poster.png';
import Prototype from '../images/ArmRender.png';
import Link from '../images/youtubeIcon.png';

export default function Body() {
    return (
        <div className='Body'>

            <div className="Content">
                <div className="Content-description">
                    <p>
                        "Technology & The Body" , is a project with the aim of investigating the feasibility of creating a non-invasive, 
                        inexpensive prosthetic arm prototype all while using several of the United Nations sustainable Development Goals 
                        as the core foundation for the direction of the project.<br/><br/>

                        This project explores the use of non-invasive sensors such as sEMG (surface Electromyography) 
                        to monitor muscle stimulation from a user. These muscle signals are then translated into a binary value 
                        and sent to the prototype arm using ESP-NOW. Using MQTT (Message Queuing Telemetry Transport), there are several gestures to choose from which 
                        are selected using a smart device.
                    </p>

                </div>
                <div className="Content-Images">

                    <div className="Content-left">
                        <img src={Poster} alt="Poster" className="Poster" />
                    </div>

                    <div className="Content-right">

                        <img src={Prototype} alt="Poster" className="Prototype" />

                        <a href="https://www.youtube.com/watch?v=xkLfBaC3v_s" target="_blank" rel="noopener noreferrer">
                            <img src={Link} alt="Demo Video Link" className="Links" />
                        </a>


                    </div>

                </div>
            </div>
            <div className="Profile-information">
                <ProfileCard />
            </div>



        </div>
    );
}

