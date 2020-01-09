import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import AddStoryListComponent from '../components/AddStoryListComponent';
import * as actions from '../store/actions';

/**
 * Render AddStoryListScreen
 */
class AddStoryListScreen extends Component {
    /**
     * create sprint plan and story list state
     * @param {Object} sprintObj
     */
    createSprintPlan = sprintObj => {
        this.props.onCreateSprint(sprintObj);
        this.props.onCreateStoryList(sprintObj.storyNameList);
        this.props.history.replace({
            pathname: '/view-planning-as-scrum-master',
            state: {
                userId: 0
            }
        });
    };

    render() {
        return (
            <>
                <Header />
                <AddStoryListComponent
                    onCreateSprintPlan={this.createSprintPlan}
                />
            </>
        );
    }
}

// bind redux state to component
const mapStateToProps = state => {
    return {
        sprint: state.sprintReducer
    };
};

// bind actions to component
const mapDispatchToProps = dispatch => {
    return {
        onCreateSprint: sprintObj => dispatch(actions.createSprint(sprintObj)),
        onCreateStoryList: storyNameList =>
            dispatch(actions.createStoryList(storyNameList)),
        onSetActiveStoryIndex: index => {
            dispatch(actions.setActiveStoryIndex(index));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStoryListScreen);
