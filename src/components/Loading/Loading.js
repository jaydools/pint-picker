import React from "react";
import "./Loading.scss";

function Loading() {
    return (
        <div className="overlay">
            <div className="loading-background">
                <div className="loading"></div>
            </div>
        </div>
    );
}

export default Loading;
