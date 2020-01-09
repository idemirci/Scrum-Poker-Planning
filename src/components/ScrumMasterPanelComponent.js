import React, { useState } from 'react';
import ConfirmScoreComponent from './ConfirmScoreComponent';
import '../styles/scrumMasterPanelStyle.scss';

/**
 * Renders ScrumMasterPanelComponent
 * @param {Object} props
 */
const ScrumMasterPanelComponent = props => {
    const [finish, setFinish] = useState(false);
    let showConflict = false;
    let differentScoreIndex;
    let voterCount = 0;
    let userList = [];
    let scrumMasterScore = '';
    const { storyList, activeStory, votes, numOfVoters } = props;

    /**
     * confirms last vote on activeStory
     * @param {Number} score
     */
    const finishStoryScore = score => {
        if (activeStory === storyList.length - 1) {
            setFinish(true);
        }
        props.onFinishStoryScore(score, activeStory);
    };

    /**
     * checks is last story or not
     */
    const checkLastStory = () => {
        return activeStory !== storyList.length;
    };

    /**
     * filters active story's votes
     */
    const activeStoryVotes = votes.filter(vote => {
        return vote.activeStory === activeStory;
    });

    /**
     * find scrum master voted index
     */
    const masterIndex = activeStoryVotes.findIndex(
        vote => vote.user === props.user
    );

    if (masterIndex !== -1) {
        scrumMasterScore = activeStoryVotes[masterIndex].score;
    }

    // creates user list for scrum master panel
    for (let i = 1; i <= numOfVoters; i++) {
        let voter = `Voter ${i}: `;
        const index = activeStoryVotes.findIndex(vote => vote.user === i);
        if (index !== -1) {
            voter += activeStoryVotes[index].score;
            voterCount++;
        } else {
            voter += 'Not Voted';
        }
        userList.push(voter);
    }

    // checks to argue with team or not
    if (voterCount === numOfVoters) {
        differentScoreIndex = activeStoryVotes.findIndex(
            story => story.score !== scrumMasterScore
        );
        if (differentScoreIndex !== -1) {
            showConflict = true;
        } else {
            props.onFinishStoryScore(scrumMasterScore, activeStory);
        }
    }

    return (
        <div className="scrum-master-panel">
            <fieldset>
                <legend className="window">
                    <div className="title">Scrum Master Panel</div>
                </legend>
                <div className="active-panel">
                    <ul className="voter-area">
                        <div className="display-active-story">
                            {storyList[activeStory].storyName} is Active
                        </div>
                        {userList.map(user => {
                            return (
                                <div className="user-list-item" key={user}>
                                    {user}
                                </div>
                            );
                        })}
                        <div>
                            <div className="user-list-item">
                                Scrum Master:{' '}
                                {scrumMasterScore
                                    ? scrumMasterScore
                                    : 'Not Voted'}
                            </div>
                        </div>
                    </ul>
                    {!finish &&
                    checkLastStory() &&
                    showConflict &&
                    scrumMasterScore !== '' ? (
                        <ConfirmScoreComponent
                            onConfirmStoryScore={finishStoryScore}
                        />
                    ) : null}
                </div>
            </fieldset>
        </div>
    );
};

export default ScrumMasterPanelComponent;
