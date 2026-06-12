export class BaseError extends Error {
  public readonly code: string

  constructor(message: string, code = "INTERNAL_ERROR") {
    super(message)
    this.name = this.constructor.name
    this.code = code
  }
}
