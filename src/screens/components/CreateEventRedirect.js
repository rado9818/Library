import React from "react";
import { Redirect } from "react-router-dom";

export default class CreateEventRedirect extends React.Component {
    render() {
        const { context } = this.props;

        return context.state.onCreateEvent ? (
            <Redirect
                exact
                to={"/events/create"}
            />
        ) : (
            <div />
        );
    }
}
