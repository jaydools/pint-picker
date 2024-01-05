import React, { useState } from "react";
import "./QuizButton.scss";
import FinalPage from "../FinalPage/FinalPage";

function QuizButton({ questions, onClose }) {
    const [currentQuestion, setCurrentQuestion] = useState(0); // state to hold current question
    const [answers, setAnswers] = useState([]); // state to hold the answer selected to pass to ai as prompt
    const [quizComplete, setQuizComplete] = useState(false);

    const { question, choices } = questions[currentQuestion];

    const onAnswerClick = (choice) => {
        let newAnswer = [...answers];
        newAnswer[currentQuestion] = choice;
        setAnswers(newAnswer);

        if (currentQuestion === questions.length - 1) {
            setQuizComplete(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    if (quizComplete) {
        return <FinalPage answers={answers} onClose={onClose} />;
    }

    return (
        <div className="overlay">
            <article className="quiz-container">
                <nav className="question-nav">
                    <div className="question-nav__active">
                        {currentQuestion + 1} /{questions.length}
                    </div>
                    <button className="question-nav__close" onClick={onClose}>
                        Close
                    </button>
                </nav>
                <h2 className="quiz-container__header">{question}</h2>
                <ul className="quiz-container__list">
                    {choices.map((choice, index) => (
                        <li
                            key={index}
                            onClick={() => onAnswerClick(choice.index)}
                            className="quiz-container__items"
                        >
                            {choice}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );
}

export default QuizButton;
