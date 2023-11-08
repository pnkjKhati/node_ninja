class ApiError extends Error {
  constructor(
    statusCode,
    messagg = "Something Went Wrong!",
    errors = [],
    stackTrace
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.errors = errors;
    this.status = false;

    if (stackTrace) {
      this.stackTrace = stackTrace;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
