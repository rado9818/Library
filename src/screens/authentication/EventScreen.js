import React from "react";

import AuthFormComponent from "./../components/AuthFormComponent";
import AuthenticationComponent from "./AuthenticationComponent";
import {
  accessToken, eventListEndpoint,
  loginUrl, USER_ID, usersMeEndpoint,
} from "../../Constants";
import * as Constants from "../../Constants";
import {bake_cookie, read_cookie} from "sfcookies";
import EventComponent from "../components/EventComponent";

export default class EventScreen extends AuthenticationComponent {
  constructor(props) {
    super(props);
    this.state = {
      events : []
    };
    this.onGetEvents = this.onGetEvents.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
    this.onErrorDialogClose = this.onErrorDialogClose.bind(this);
  }

  componentDidMount() {
    document.title = "Събития - Libraries";
    this.onGetEvents();
  }

  getButtonText() {
    return "Вход";
  }

  onErrorDialogClose() {
    this.setState({
      isErrorDialogOpen: false
    });
  }

  onGetEvents(){
    let that = this;
    return fetch(eventListEndpoint, {
      method: "GET",
      headers:{
        "Auth": read_cookie(USER_ID)
      },
    })
        .then(response => response.json())
        .then(responseJson => {
          console.log("events ",responseJson);
          that.setState({events: responseJson.results});

        })
        .catch(error => {
          console.error(error);
        });
  }


  render() {
    return (
      <div>
        <EventComponent
          context={this}
          buttonText={this.getButtonText}
          onErrorDialogClose={this.onErrorDialogClose}
        />
      </div>
    );
  }
}
