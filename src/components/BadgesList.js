import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <div className="BadgesList__image">
                    <img
                        src={this.props.badge.avatarUrl}
                        alt="Avatar"
                        className="BadgesListItem__avatar"
                    />
                </div>
                <div className="BadgesList__content">
                    <h3 className="BadgesList__fullName">
                        {this.props.badge.firstName}
                        {this.props.badge.lastName}
                    </h3>
                    <p className="BadgesList__twitter">
                        @{this.props.badge.twitter}
                    </p>
                    <p className="BadgesList__jobTitle">
                        {this.props.badge.jobTitle}
                    </p>
                </div>
            </div>
        );
    }
}

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter((badge) => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        setFilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
    const badges = props.badges;

    // const filteredBadges = badges.filter((badge) => {
    //     return `${badge.firstName} ${badge.lastName}`
    //         .toLowerCase()
    //         .includes(query.toLowerCase());
    // });

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        className="form-control mb-4"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create New Badge
                </Link>
            </div>
        );
    }
    return (
        <div className="BagesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input
                    type="text"
                    className="form-control mb-4"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link
                                to={`badges/${badge.id}`}
                                className="text-reset text-decoration-none"
                            >
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;
