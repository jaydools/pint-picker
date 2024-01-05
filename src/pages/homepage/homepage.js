import React, { useState } from "react";
import "./Homepage.scss";
import QuizButton from "../../components/quizButton/QuizButton";
import { beerQuiz } from "../../constants";

function Homepage() {
    const [showQuiz, setShowQuiz] = useState(false);
    const handleButtonClick = () => {
        setShowQuiz(true);
    };

    return (
        <section className="background">
            <h1 className="title-text">Help me choose a beer</h1>
            <div className="background__spacer">
                <div className="subhead">
                    <p className="body-text">Not sure what you want to drink?</p>
                    <p className="body-text">
                        No worries! Let's get to know what you like and I'll suggest something for
                        you.
                    </p>
                </div>
                <div className="subhead">
                    <h2 className="subhead__text">Start the beer finder quiz below</h2>
                </div>
                <button className="button" onClick={handleButtonClick}>
                    Start Quiz
                </button>
                {showQuiz && (
                    <QuizButton questions={beerQuiz.questions} onClose={() => setShowQuiz(false)} />
                )}
            </div>
        </section>
    );
}

export default Homepage;
