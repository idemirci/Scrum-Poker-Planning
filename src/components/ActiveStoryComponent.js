import React, { useState, useRef } from 'react';
import '../styles/activeStoryStyle.scss';
import { storyPoints } from '../const/StoryPoints';

/**
 * Display ActiveStory Component
 * @param {Object} props
 */
const ActiveStoryComponent = props => {
    const [vote, setVote] = useState('');
    const { storyList, activeStory, votes } = props;

    /**
     * finds vote index
     */
    const checkVoteIndex = () => {
        return votes.findIndex(
            vote =>
                vote.activeStory === props.activeStory &&
                vote.user === props.user
        );
    };
    /**
     * call vote story and sets vote and isVoted states
     * @param {Object} event
     */
    const storyVote = event => {
        if (checkVoteIndex() < 0) {
            const score =
                event.target.value === '?' ? 0 : parseInt(event.target.value);
            setVote(score);
            props.onVoteStory(props.activeStory, score, props.user);
        }
    };

    return (
        <div className="active-story">
            Active Story
            <fieldset>
                <legend className="window">
                    <div className="title">
                        {storyList[activeStory].storyName}
                    </div>
                </legend>
                <div className="story-board">
                    {storyPoints.map((point, index) => {
                        return (
                            <div className="point-box" key={point}>
                                <div>
                                    <button
                                        className="button-box"
                                        value={point}
                                        onClick={storyVote}
                                    >
                                        {point}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {checkVoteIndex() < 0 ? (
                    <div className="story-text">Please Vote!!!</div>
                ) : (
                    <div className="story-text"> {vote} Voted</div>
                )}
            </fieldset>
        </div>
    );
};

export default ActiveStoryComponent;
