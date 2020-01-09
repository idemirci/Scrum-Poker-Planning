import React, { useState, useRef } from 'react';
import '../styles/addStoryListStyle.scss';

/**
 * Renders AddStoryListComponent
 * @param {Object} props
 */
const AddStoryListComponent = props => {
    const [sessionName, setSessionName] = useState('');
    const [numOfVoters, setNumOfVoters] = useState('');
    const [storyNameList, setStoryNameList] = useState([]);

    const textAreaRef = useRef();
    const sessionNameRef = useRef();
    const votersRef = useRef();

    /**
     * set the scrum session name
     * @param {Object} event
     */
    const sessionNameHandler = event => {
        setSessionName(event.target.value);
    };

    /**
     * sets the voters number
     * @param {Object} event
     */
    const votersNumberHandler = event => {
        if (event.target.value && event.target.value !== 0) {
            setNumOfVoters(parseInt(event.target.value));
        }
    };

    /**
     * set the stories in scrum plan
     * @param {Object} event
     */
    const textAreaHandler = event => {
        let storyList = event.target.value;
        storyList = storyList.split('\n');
        let configuredList = storyList.filter(story => {
            return story !== '';
        });
        setStoryNameList(configuredList);
    };

    /**
     * creates new sprint plan
     * @param {Object} event
     */
    const handleSubmit = event => {
        event.preventDefault();
        if (sessionName.length === 0 || sessionName.length > 200) {
            sessionNameRef.current.value = 'Please enter Session Name!!!';
            return;
        }
        if (numOfVoters === 0 || numOfVoters === '') {
            votersRef.current.value = 'Please enter Voter number!!!';
            return;
        }
        if (storyNameList.length === 0) {
            textAreaRef.current.value = 'Please enter Stories!!!';
            return;
        }

        props.onCreateSprintPlan({ sessionName, numOfVoters, storyNameList });
    };

    return (
        <div className="menu">
            <form className="form-menu" onSubmit={handleSubmit}>
                <div className="session">
                    <label>Session Name</label>
                    <input
                        className="story-input"
                        maxLength={200}
                        onChange={sessionNameHandler}
                        ref={sessionNameRef}
                    />
                </div>
                <div className="voters">
                    <label>Number of voters</label>
                    <input
                        className="voters-input"
                        type="number"
                        onChange={votersNumberHandler}
                        ref={votersRef}
                    />
                </div>
                <div className="stories">
                    <label>
                        Paste your story List (Each Line will be covered as a
                        story)
                    </label>
                    <div>
                        <textarea
                            className="storyListArea"
                            onChange={textAreaHandler}
                            ref={textAreaRef}
                        ></textarea>
                    </div>
                </div>
                <button className="startButton" onClick={handleSubmit}>
                    Start Session
                </button>
            </form>
        </div>
    );
};

export default AddStoryListComponent;
