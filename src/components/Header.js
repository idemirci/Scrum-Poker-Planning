import React from 'react';
import '../styles/headerStyle.scss';

/**
 * Renders Header
 * @param {Object} props
 */
const Header = props => {
    return (
        <div className="header">
            <div className="header-title">
                <h2>Scrum Poker</h2>
            </div>
            {props.link ? (
                <div className="header-link">
                    <span>You can check stories from link : {props.link}</span>
                </div>
            ) : null}
        </div>
    );
};

export default Header;
