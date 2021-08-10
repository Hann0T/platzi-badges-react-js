import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className="BadgesListItem">
                            <div className="BadgesList__image">
                                <img
                                    src={badge.avatarUrl}
                                    alt="Avatar"
                                    className="BadgesListItem__avatar"
                                />
                            </div>
                            <div className="BadgesList__content">
                                <h3 className="BadgesList__fullName">
                                    {badge.firstName}
                                    {badge.lastName}
                                </h3>
                                <p className="BadgesList__twitter">
                                    @{badge.twitter}
                                </p>
                                <p className="BadgesList__jobTitle">
                                    {badge.jobTitle}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgesList;
