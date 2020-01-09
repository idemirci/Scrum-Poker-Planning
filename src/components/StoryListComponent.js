import React from 'react';
import '../styles/storyListStyle.scss';

/**
 * Renders StoryListComponent (active , voted , not voted)
 * @param {Object} props
 */
const StoryListComponent = props => {
    return (
        <div className="story-list-area">
            Story List
            <table>
                <thead>
                    <tr>
                        <th className="header-story">Story</th>
                        <th>Story Point</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.storyList.map((story, index) => {
                        return (
                            <tr key={index}>
                                <td>{story.storyName}</td>
                                <td>
                                    {story.storyPoint === 0
                                        ? ''
                                        : story.storyPoint}
                                </td>
                                <td>
                                    {index === props.activeStory
                                        ? 'Active'
                                        : story.isStoryActive
                                        ? 'Voted'
                                        : 'Not Voted'}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StoryListComponent;
