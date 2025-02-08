import React from "react";
import '../stylesheet/Body.css';
import ProfileCard from '../components/ProfileCard.js'
import Poster from '../images/PosterV1.png';
import Prototype from '../images/arm.JPG';

export default function Body() {
    return (
        <div className='Body'>

            <div className="Content">
                <div className="Content-description">
                    <p>
                        "Technology & The Body" , is a project with the aim of investigating the feasibility
                        of creating a non-invasive, inexpensive prosthetic arm prototype all while using serveral
                        of the United Nations sustainable Development Goals as the core foundation for the direction of the project.
                    </p>

                </div>
                <div className="Content-Images">

                    <div className="Content-left">
                        <img src={Poster} alt="Poster" className="Poster" />
                    </div>

                    <div className="Content-right">
                        <img src={Prototype} alt="Poster" className="Profile" />


                        <div className="Links">
                            <h2>Demo Video Link Coming Soon</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className="Profile-information">
                <ProfileCard />
            </div>



        </div>
    );
}

