class Error {
    constructor(id, code, timestamp, isTitleEnabled, message, title, htmlLabel, label, retryable, severity, details) {
      this.id = id;
      this.code = code;
      this.timestamp = timestamp;
      this.isTitleEnabled = isTitleEnabled;
      this.message = message;
      this.title = title;
      this.htmlLabel = htmlLabel;
      this.label = label;
      this.retryable = retryable;
      this.severity = severity;
      this.details = details;
    }
  }