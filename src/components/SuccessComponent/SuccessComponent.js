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
                <div className="response-box__body">{responseData.message}</div>
                <button className="button" onClick={refresh}>
                    Try again
                </button>
            </div>
        </div>
    );
}

export default SuccessComponent;
