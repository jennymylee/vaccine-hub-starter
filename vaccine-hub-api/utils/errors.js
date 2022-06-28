class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message = "Bad request") {
    super(message, 400);
  }
}

class UnauthorizedError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 400);
  }
}

class ForbiddenError extends ExpressError {
  constructor(message = "Unauthorized") {
    super(message, 400);
  }
}

class NotFoundError extends ExpressError {
  constructor(message = "Not found") {
    super(message, 404);
  }
}
module.exports = {
  ExpressError,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  UnauthorizedError,
};
