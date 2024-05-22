class ApiError extends Error {
    constructor(statusCode, message="something went wrong", errors = [], stack = "") {
      super(message); //overwrite
      this.statusCode = statusCode;
      this.data =null;
      this.message = message;
      this.errors = errors;
      this.stack = "";
      this.success= false;
    }
    if(stack){
        this.stack = stack;
        Error.captureStackTrace(this, this.constructor)
    }
  }
  
 export default ApiError