import React from "react";
import md5 from "md5";

import "./styles/BadgeNew.css";
import logo from "../images/platziconf-logo.svg";

import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import api from "../api";

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
            avatarUrl: "",
        },
    };

    handleChange = (e) => {
        // console.log(e);

        const email = this.state.form.email;
        const hash = md5(email);

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
            },
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true, error: null });
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push("/badges");
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img
                        src={logo}
                        alt="logo"
                        className="image-fluid BadgeNew__hero-image"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={
                                    this.state.form.firstName || "First Name"
                                }
                                lastName={
                                    this.state.form.lastName || "Last Name"
                                }
                                twitter={this.state.form.twitter || "Twitter"}
                                jobTitle={
                                    this.state.form.jobTitle || "Job Title"
                                }
                                email={this.state.form.email || "Email"}
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
