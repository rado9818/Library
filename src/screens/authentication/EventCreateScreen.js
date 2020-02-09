import React from "react";

import AuthFormComponent from "./../components/AuthFormComponent";
import AuthenticationComponent from "./AuthenticationComponent";
import {
  accessToken, eventCreateEndpoint, eventListEndpoint,
  loginUrl, USER_ID, usersMeEndpoint,
} from "../../Constants";
import * as Constants from "../../Constants";
import {bake_cookie, read_cookie} from "sfcookies";
import EventComponent from "../components/EventComponent";
import EventCreateComponent from "../components/EventCreateComponent";

export default class EventScreen extends AuthenticationComponent {
  constructor(props) {
    super(props);
    this.state = {
      events : [],
      startDate: "2020-02-10",
      description: " "
    };
    this.onCreateEvent = this.onCreateEvent.bind(this);
    this.onErrorDialogClose = this.onErrorDialogClose.bind(this);
  }

  componentDidMount() {
    document.title = "Събития - Libraries";
  }

  onErrorDialogClose() {
    this.setState({
      isErrorDialogOpen: false
    });
  }

  handleStartDateChange = date => {
    this.setState({startDate: date});
  };

  handleEndDateChange = date => {
    this.setState({endDate: date});
  };

  handleNameChange = name => {
    console.log("chanhinge name")
    this.setState({name: name.target.value});
  };

  handleDescriptionChange = description => {
    this.setState({description: description.target.value})
  }

  onCreateEvent(){
    console.log("wdgwe", this.state);
    let that = this;
    return fetch(eventCreateEndpoint, {
      method: "POST",
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
        <EventCreateComponent
          context={this}
          onCreateEvent={this.onCreateEvent}
          onStartDateChange={this.handleStartDateChange}
          onEndDateChange={this.handleEndDateChange}
          onNameChange={this.handleNameChange}
          onDescriptionChange={this.handleDescriptionChange}
        />
      </div>
    );
  }
}
