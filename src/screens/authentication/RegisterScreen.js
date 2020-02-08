import React from "react";

import AuthenticationComponent from "./AuthenticationComponent";
import {
  accessToken,
  loginUrl, registerUrl, usersMeEndpoint,
} from "../../Constants";
import * as Constants from "../../Constants";
import {bake_cookie} from "sfcookies";
import RegisterFormComponent from "../components/RegisterFormComponent";

export default class RegisterScreen extends AuthenticationComponent {
  constructor(props) {
    super(props);
    this.state = {
      isErrorDialogOpen: false,
      email: "",
      password: ""
    };
    this.onRegister = this.onRegister.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.onLoadRegistration = this.onLoadRegistration.bind(this);
    this.onErrorDialogClose = this.onErrorDialogClose.bind(this);
  }
  onRegister() {
    //TODO: login api, something like this
    let that = this;
    console.log("log in: ", this.state.email, " ", this.state.password);
    //packing x-www-form-urlencoded data
    var details = {
      firstName: this.state.firstName,
      lastName: (this.state.lastName),
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    return fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        Accept: "application/json",
        AccessControlAllowOrigin: "*",
        AccessControlAllowHeaders: "*",
        'Content-Type': 'application/json',
        AccessControlAllowMethods:
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("login response ", responseJson);
        if (responseJson.access_token && responseJson.refresh_token) {
          AuthenticationComponent.saveData(responseJson.access_token);
          AuthenticationComponent.saveRefreshToken(responseJson.refresh_token);

          var data = responseJson.scope.split(", ");
          bake_cookie(Constants.ORGANIZATION, data[5]);

        } else {
          this.setState({
            isErrorDialogOpen: true,
            loginErrorMessage: "Грешни данни за вход"
          });

        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  getButtonText() {
    return "Регистрация";
  }
  onLoadRegistration() {}

  onErrorDialogClose() {
    this.setState({
      isErrorDialogOpen: false
    });
  }

  componentDidMount() {
    document.title = "Вход - Libraries";
  }

  render() {
    return (
      <div>
        <RegisterFormComponent
          context={this}
          loginAction={this.onRegister}
          buttonText={this.getButtonText}
          onErrorDialogClose={this.onErrorDialogClose}
        />
      </div>
    );
  }
}
