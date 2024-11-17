import { errorReporter } from "~/infra/error-reporter";

export function reportCriticalAppError(error: unknown) {
  errorReporter.report({
    message: "Application critical error",
    error,
  });
}
