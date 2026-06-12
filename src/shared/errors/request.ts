import { BaseError } from "./_base"

export class RequestError extends BaseError {
  constructor(message = "Request failed", code = "REQUEST_ERROR") {
    super(message, code)
  }
}
