import {SERVER_URL} from './generalConfig';

/** Security: ------------------------------------------------------------------------------------------------------- */
export const restLogin = (data) => {
    console.log(JSON.stringify(data));
    return (
        fetch(`${SERVER_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    );
};