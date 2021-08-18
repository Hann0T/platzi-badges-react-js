import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "../pages/BadgeDetails";

import api from "../api";

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    };

    componentDidMount() {
        this.fetchData();
    }

    handleOpenModal = () => {
        this.setState({ modalIsOpen: true });
    };
    handleCloseModal = () => {
        this.setState({ modalIsOpen: false });
    };
    handleDeleteBadge = async () => {
        this.setState({ loading: true, error: null });

        try {
            api.badges.remove(this.props.match.params.badgeId);
            this.setState({ loading: false });
            this.props.history.push("/badges");
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };
    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return (
            <BadgeDetails
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
                modalIsOpen={this.state.modalIsOpen}
                badge={this.state.data}
            />
        );
    }
}

export default BadgeDetailsContainer;
// Container la logica
