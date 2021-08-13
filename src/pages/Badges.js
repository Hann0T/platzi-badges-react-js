import React from "react";
import { Link } from "react-router-dom";

import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";

import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

class Badges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: [],
        };
        console.log("1. constructor()");
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    componentDidMount() {
        console.log("3. componentDidMount()");

        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("5. componentDidUpdate()");
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        });
        console.log({
            props: this.props,
            state: this.state,
        });
    }
    componentWillUnmount() {
        console.log("6. componentWillUnmount()");
        clearTimeout(this.timeOutId);
    }
    render() {
        console.log("2. render()");
        if (this.state.loading) {
            return <PageLoading />;
        }
        if (this.state.error) {
            // return `Error: ${this.state.error.message}`;
            return <PageError error={this.state.error} />;
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges__conf-logo"
                                src={confLogo}
                                alt="Conf logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/Badges/New" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
