// This file write a ErrorHandler class that extends Error class and is used to handle errors in the javascript.

class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export { ErrorHandler };