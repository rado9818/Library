import React from "react";
import { accessToken, refreshToken } from "../../Constants";
import { bake_cookie } from "sfcookies";

export default class AuthenticationComponent extends React.Component {
  render() {
    return <div />;
  }

  static async saveData(token) {
    bake_cookie(accessToken, token);
    console.log("cookie access saved: ", token);
  }

  static async saveRefreshToken(token) {
    bake_cookie(refreshToken, token);

    console.log("token refresh saved: ", token);
  }
}
