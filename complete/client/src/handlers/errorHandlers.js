
export const defaultErrorHandler = (error, handler) => {
    console.warn(`defaultErrorHandler: ${error}`);
    console.error(error);

    if(handler) {
        console.log('Custom error handler has been called');
        handler.call();
    }
};
