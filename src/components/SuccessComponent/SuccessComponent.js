import React from "react";
import "./SuccessComponent.scss";

function SuccessComponent({ responseData }) {
    return (
        <div className="overlay">
            <div className="response-box">
                <h2 className="response-box__header">Cheers 🍻</h2>
                <div className="response-box__body">{responseData.message}</div>
            </div>
        </div>
    );
}

export default SuccessComponent;
