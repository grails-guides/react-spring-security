import {SERVER_URL} from './../config';
import {checkResponseStatus} from './../handlers/responseHandlers';
import headers from './../security/headers';
import 'whatwg-fetch';


export default {
  logIn(auth) { //<1>
    localStorage.auth = JSON.stringify(auth);
  },

  logOut() { //<2>
    delete localStorage.auth;
  },

  loggedIn() {  //<3>
    return localStorage.auth && fetch(`${SERVER_URL}/api/vehicle`, {headers: headers()})
        .then(checkResponseStatus)
        .then(() => { return true })
        .catch(() => { return false });
  }
};