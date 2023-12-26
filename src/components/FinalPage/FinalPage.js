import React from "react";
import "./FinalPage.scss";

function FinalPage(onClose) {
    return (
        <div className="overlay">
            <div className="quiz-container">
                <h2>Okay Great!</h2>
                <p>Hit submit and give me one moment while I find you the best beers</p>
                <button className="button">Show Me The Beers!</button>
            </div>
        </div>
    );
}

export default FinalPage;
