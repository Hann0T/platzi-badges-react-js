import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found</h3>
                    <Link to="/Badges/New" className="btn btn-primary">
                        Create New Badge
                    </Link>
                </div>
            );
        }
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
