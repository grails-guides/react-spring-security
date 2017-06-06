import Auth from '../security/Auth';

export const checkLoginResponseStatus = (response) => {
    console.log(`checkLoginResponseStatus: ${response.status}`);
    if(response.status >= 200 && response.status < 300) {
        return response.json()
    } else {
        let error = new Error('Incorrect username or password ' + response.statusText);
        error.response = response;
        throw error;
    }
};

export const loginResponseHandler = (response, handler) => {
    console.log('loginResponseHandler');
    console.log(response);
    Auth.logIn(response);

    if(handler) {
        console.log('Custom login handler has been called');
        handler.call();
    }
};
