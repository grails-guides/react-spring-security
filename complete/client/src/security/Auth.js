export default {
    logIn(auth) { //<1>
        console.log(`Auth:login: ${auth}`);
        if (auth) {
            localStorage.auth = JSON.stringify(auth);
        }
    },

    logOut() { //<2>
        console.log(`Auth:logOut: ${localStorage.auth}`);
        delete localStorage.auth;
    },

    loggedIn() { //<3>
        console.log(`Auth:loggedIn?: ${localStorage.auth ? 'true' : 'false'}`);
        return !!localStorage.auth;
    }
};