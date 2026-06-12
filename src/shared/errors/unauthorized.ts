import { BaseError } from "./_base"

export class UnauthorizedError extends BaseError {
  constructor(message = "Unauthorized", code = "UNAUTHORIZED") {
    super(message, code)
  }
}
