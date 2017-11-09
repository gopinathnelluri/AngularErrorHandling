export class UserNotFoundError extends Error{


  customType = "UserNotFoundError";
  // callback with a custom error object
  //let getError = cb => cb(new AuthorizationError('there was a problem'))

  // get the error and log the stack trace
  //getError((err) => console.log(err));


  constructor() {
    super();
    //Object.setPrototypeOf(this, Object.getPrototypeOf(this));
    this.name = 'UserNotFoundError';
    Error.captureStackTrace(this, UserNotFoundError);
  }
/*
  constructor(message) {
    super(message);
    //Object.setPrototypeOf(this, Object.getPrototypeOf(this));

    this.name = 'AuthorizationError';
    Error.captureStackTrace(this, AuthorizationError);
  }
  */
  toString() {
    return 'User Not Found Error';
  }

}
