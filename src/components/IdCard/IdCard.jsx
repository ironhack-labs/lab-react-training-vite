import React from "react";
import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className="id-card" >
            <div className="id-card-picture">
                <img src={picture} />
            </div>
            <div className="id-card-body">
                <p><b>First name:</b> {firstName}</p>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;