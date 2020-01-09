import React, { useState, useRef } from 'react';
import '../styles/confirmScoreStyle.scss';
const ConfirmScoreComponent = props => {
    const [finalScore, setFinalScore] = useState('');
    const inputRef = useRef();

    /**
     * confirms story last score
     * @param {Object} event
     */
    const finishStoryScore = event => {
        event.preventDefault();
        if (finalScore === '') {
            inputRef.current.style.border = '3px solid red';
        } else {
            props.onConfirmStoryScore(finalScore);
        }
    };
    return (
        <div className="confirm-score">
            <div>Seems team has different votes</div>
            <div>Please discuss and finalize the score below textbox</div>

            <form className="end-story-score">
                <label className="confirm-text">Finalize Score!</label>
                <br />
                <input
                    className="confirm-input"
                    ref={inputRef}
                    value={finalScore}
                    type="number"
                    onChange={e => setFinalScore(parseInt(e.target.value))}
                />
                <br />
                <button onClick={finishStoryScore} className="confirm-button">
                    End Voting For Story
                </button>
            </form>
        </div>
    );
};

export default ConfirmScoreComponent;
