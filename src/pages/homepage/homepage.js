import React from "react";
import "./homepage.scss";

function homepage() {
    return (
        <section className="background">
            <h1 className="title-text">Help me choose a beer</h1>
            <div className="subhead">
                <p className="body-text">Not sure what you want to drink?</p>
                <p className="body-text">
                    No worries! Let's get to know what you like and I'll suggest something for you.
                </p>
            </div>
            <div className="subhead">
                <h2 className="subhead__text">Start the beer finder quiz below</h2>
            </div>
            <button className="button">Let's find you a beer</button>
        </section>
    );
}

export default homepage;
