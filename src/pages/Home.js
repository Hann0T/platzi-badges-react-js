import React from "react";
import { Link } from "react-router-dom";

import PlatziconfLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import "./styles/Home.css";

class Home extends React.Component {
    render() {
        return (
            <section className="home-container">
                <div className="container">
                    <div className="row">
                        <div className="col-6 home--center">
                            <div className="home__main-content">
                                <img
                                    src={PlatziconfLogo}
                                    alt="Platziconf Logo"
                                />
                                <h1 className="home__title">
                                    PRINT YOUR BADGES
                                </h1>
                                <p className="home__text">
                                    The easiest way to manage your <br />
                                    conference.
                                </p>
                            </div>
                            <Link to="/badges" className="btn btn-primary">
                                Start Now
                            </Link>
                        </div>
                        <div className="col-6">
                            <img
                                className="home__illustration"
                                src={astronauts}
                                alt="Astronauts Illustration"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;
