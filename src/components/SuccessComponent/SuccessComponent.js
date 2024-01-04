import React from "react";
import "./SuccessComponent.scss";

function SuccessComponent({ responseData, onClose }) {
    const refresh = () => {
        window.location.reload();
    };

    return (
        <div className="overlay">
            <div className="response-box">
                <h2 className="response-box__header">Cheers 🍻</h2>
                <div className="response-box__body">
                    {responseData.message.split("\n").map((line, index) => (
                        <p key={index}>
                            {line}
                            <br />
                        </p>
                    ))}
                </div>
                <div className="button-container">
                    <button className="button" onClick={refresh}>
                        Try again / Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SuccessComponent;
