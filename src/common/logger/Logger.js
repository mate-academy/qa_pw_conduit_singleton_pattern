export class Logger {
  static #instance;
  #currentLevel;

  constructor(level = 'info') {
    this.levels = ['debug', 'info', 'warn', 'error'];
    this.#currentLevel = level;
  }

  static getInstance(level = 'error') {
    if(!Logger.#instance) {
      const logger = new Logger(level)
      Logger.#instance = logger;
    }
    return Logger.#instance;
  }

  shouldLog(level) {
    return (
      this.levels.indexOf(level) >= this.levels.indexOf(this.#currentLevel)
    );
  }

  log(level, message) {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }
  }


  debug(message) {
    this.log('debug', message);
  }
  info(message) {
    this.log('info', message);
  }
  warn(message) {
    this.log('warn', message);
  }
  error(message) {
    this.log('error', message);
  }

  getCurrentLevel() {
    return this.#currentLevel;
  }
}
