import { BaseError } from "./_base"

export class ProviderError extends BaseError {
  constructor(provider: string, code = "PROVIDER_ERROR") {
    super(`use${provider} must be used within an ${provider}Provider`, code)
  }
}
