import {SERVER_URL} from './../config';
import {checkResponseStatus} from './../handlers/responseHandlers';
import headers from './../security/headers';
import 'whatwg-fetch';

//<1>
export default {
  logIn(auth) { //<2>
    localStorage.auth = JSON.stringify(auth);
  },

  logOut() { //<3>
    delete localStorage.auth;
  },

  loggedIn() {  //<4>
    return localStorage.auth && fetch(
        `${SERVER_URL}/api/vehicle`, //<5>
        {headers: headers()})
        .then(checkResponseStatus)
        .then(() => { return true })
        .catch(() => { return false });
  }
};