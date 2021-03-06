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
import moment from "moment";

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
          let events = [];

          for (const event of responseJson.results) {
            event.start = event.fromDate;
            event.end = event.toDate;
            event.title = event.name;
            events.push(event);
          }

          that.setState({events: responseJson.results}, () => {
            console.log("evvs ", that.state.events)
          });

        })
        .catch(error => {
          console.error(error);
        });
  }


  render() {
    return (
        <EventComponent
          context={this}
          buttonText={this.getButtonText}
          onErrorDialogClose={this.onErrorDialogClose}  
        />

    );
  }
}
