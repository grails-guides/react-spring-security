export default {
    logIn(auth) {
        console.log(`Auth:login: ${auth}`);
        if (auth) {
            localStorage.auth = JSON.stringify(auth);
        }
    },

    logOut() {
        console.log(`Auth:logOut: ${localStorage.auth}`);
        delete localStorage.auth;
    },

    loggedIn() {
        console.log(`Auth:loggedIn?: ${localStorage.auth ? 'true' : 'false'}`);
        return !!localStorage.auth;
    }
};
