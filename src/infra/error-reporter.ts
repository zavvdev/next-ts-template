interface ReportError<T = unknown> {
  message?: string;
  location?: string;
  error: T;
}

class ErrorReporter {
  private repository: Console;

  constructor(repo: Console) {
    this.repository = repo;
  }

  public report<T = unknown>(error: ReportError<T>): void {
    const errorToReport = {
      message: error.message || null,
      location: error.location || null,
      error: error.error,
    };
    if (process.env.NODE_ENV === "development") {
      this.repository.error(errorToReport);
    }
  }
}

export const errorReporter = new ErrorReporter(console);
