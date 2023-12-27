import React from "react";
import "./FinalPage.scss";
import axios from "axios";
import createPrompt from "../../createPrompt";

function FinalPage({ answers }) {
    const handleSubmit = async () => {
        const userPrompt = createPrompt(answers);
        try {
            let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getResponse`, {
                userPrompt: userPrompt,
            });
            console.log(res.data);
            if (res.status === 204) {
                window.location.reload();
            }
        } catch (err) {
            console.error("unknown error... initiate self destruct", err);
        }
    };

    return (
        <div className="overlay">
            <div className="quiz-container">
                <h2>Okay Great!</h2>
                <p>Hit submit and give me one moment while I find you the best beers</p>
                <button onClick={handleSubmit} className="button">
                    Show Me The Beers!
                </button>
            </div>
        </div>
    );
}
export default FinalPage;
