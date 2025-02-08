import React from "react";
import '../stylesheet/ProfileCard.css';
import ProfilePicture from '../images/profile picture.JPG';




export default function Navbar() {
    return (

        <a href="https://github.com/ShaneWhitmore" className="profileCard">

            <img src={ProfilePicture} alt="Poster" className="profileImage" />

            <div className="credentials">
                <p> Shane Whitmore </p>
                <p> 20098910 </p>
                <p> Bachelor in Applied Computing , Internet of Things</p>


            </div>



        </a>

    );
};