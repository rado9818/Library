import React from "react";
import { Redirect } from "react-router-dom";

export default class RegisterRedirect extends React.Component {
    render() {
        const { context } = this.props;

        return context.state.onRegisterRedirect ? (
            <Redirect
                exact
                to={"/register"}
            />
        ) : (
            <div />
        );
    }
}
