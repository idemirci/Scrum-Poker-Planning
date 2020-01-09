import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import StoryListComponent from '../components/StoryListComponent';
import ActiveStoryComponent from '../components/ActiveStoryComponent';
import ScrumMasterPanelComponent from '../components/ScrumMasterPanelComponent';
import * as actions from '../store/actions';

/**
 * Displays Planning Screens to Master and Developers
 * @param {Object} props
 */
const ViewPlanningScrumScreen = props => {
    const developerScrumURL = `http://localhost:3000/you-can-check-stories-from-this-link/:userId you should use 1 to ${props.sprint.numOfVoters} instead of ":userId"`;

    const userId =
        props.match.params && props.match.params.userId
            ? parseInt(props.match.params.userId)
            : 0;

    const activeStoryIndex =
        props.activeStory === props.storyList.length
            ? props.storyList.length - 1
            : props.activeStory;

    /**
     * checks user is a developer or not
     */
    const checkIsDeveloper = () => {
        if (userId >= 1 && userId <= props.sprint.numOfVoters) return true;
    };
    /**
     * scrum master and developer votes the story
     * @params {String} score
     */
    const voteStory = (activeStory, score, user) => {
        props.onVoteStory({ activeStory, user, score });
    };

    /**
     * votes story score
     * @params {Number} score
     * @params {Number} activeStory
     */
    const finishStoryScore = useCallback(
        (score, activeStory) => {
            props.onFinishActiveStoryScore({ score, activeStory });
            if (activeStory < props.storyList.length) {
                activeStory++;
                props.onChangeActiveStoryIndex(activeStory);
            }
        },
        [props]
    );

    // checks valid user entered or not
    if ((1 > userId || props.sprint.numOfVoters < userId) && userId !== 0) {
        return (
            <>
                <Header />
                <div className="menu">
                    <h1>
                        You are not registered user . Please enter correct User
                        ID
                    </h1>
                </div>
            </>
        );
    }

    return (
        <>
            <Header link={checkIsDeveloper() ? null : developerScrumURL} />
            <div className="menu">
                <StoryListComponent
                    storyList={props.storyList}
                    activeStory={props.activeStory}
                />
                <ActiveStoryComponent
                    onVoteStory={voteStory}
                    user={userId}
                    votes={props.vote}
                    activeStory={activeStoryIndex}
                    storyList={props.storyList}
                />

                {checkIsDeveloper() ? null : (
                    <ScrumMasterPanelComponent
                        numOfVoters={props.sprint.numOfVoters}
                        activeStory={activeStoryIndex}
                        storyList={props.storyList}
                        votes={props.vote}
                        user={userId}
                        onFinishStoryScore={finishStoryScore}
                    />
                )}
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        sprint: state.sprintReducer,
        storyList: state.storyReducer,
        activeStory: state.activeStoryReducer,
        vote: state.voteReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onVoteStory: vote => dispatch(actions.voteStory(vote)),
        onFinishActiveStoryScore: lastVote =>
            dispatch(actions.finishActiveStoryScore(lastVote)),
        onChangeActiveStoryIndex: index =>
            dispatch(actions.setActiveStoryIndex(index))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPlanningScrumScreen);
