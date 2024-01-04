import React, { useState } from "react";
import "./FinalPage.scss";
import axios from "axios";
import createPrompt from "../../createPrompt";
import SuccessComponent from "../SuccessComponent/SuccessComponent";
import Loading from "../Loading/Loading";

function FinalPage({ answers }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [responseData, setResponseData] = useState([]);

    const handleSubmit = async () => {
        setIsLoading(true);
        const userPrompt = createPrompt(answers);
        try {
            let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getResponse`, {
                userPrompt: userPrompt,
            });
            console.log(res.data);
            if (res.status === 200) {
                setIsSuccess(true);
                setResponseData(res.data);
            }
        } catch (err) {
            console.error("unknown error... initiate self destruct", err);
        }
    };

    if (isSuccess) {
        return <SuccessComponent responseData={responseData} />;
    }

    return (
        <div className="overlay">
            {isLoading && <Loading />}
            <div className="quiz-container">
                <h2>Okay Great!</h2>
                <p>Hit submit and give me one moment while I find you the best beers</p>
                <button onClick={handleSubmit} className="button" disabled={isLoading}>
                    Show Me The Beers!
                </button>
            </div>
        </div>
    );
}
export default FinalPage;
