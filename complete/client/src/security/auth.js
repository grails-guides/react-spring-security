export default {
    logIn(auth) {
        if (auth) {
            localStorage.auth = JSON.stringify(auth);
        }
    },

    logOut() {
        delete localStorage.auth;
    },

    loggedIn() {
        return !!localStorage.auth;
    }
};
