import React from "react";
import { Redirect } from "react-router-dom";

export default class BackRedirectComponent extends React.Component {
    render() {
        const { context } = this.props;

        return context.state.eventsRedirect ? (
            <Redirect
                exact
                to={"/events"}
            />
        ) : (
            <div />
        );
    }
}
