class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.status = statusCode;
    }

    errorHandle(message, statusCode) {}
}


module.exports = ErrorHandler;