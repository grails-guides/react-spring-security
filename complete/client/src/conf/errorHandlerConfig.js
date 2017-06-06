
export const defaultErrorHandler = (error, handler) => {
    console.error(error);

    if(handler) {
        console.log('Custom error handler has been called');
        handler.call();
    }
};