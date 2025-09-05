export class Logger {
  private currentLevel: string;
  static instance: Logger;
  private levels: string[];

  private constructor(level = 'info') {
    this.levels = ['debug', 'info', 'warn', 'error'];
    this.currentLevel = level;
  }

  shouldLog(level: string): boolean {
    return (
      this.levels.indexOf(level) >= this.levels.indexOf(this.currentLevel)
    );
  }

  log(level: string, message: string) {
    if (this.shouldLog(level)) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
    }
  }

  debug(message: string) {
    this.log('debug', message);
  }
  info(message: string) {
    this.log('info', message);
  }
  warn(message: string) {
    this.log('warn', message);
  }
  error(message: string) {
    this.log('error', message);
  }

  static getInstance(level = 'error') {
    if (!this.instance) {
      this.instance = new Logger(level);
      console.log(`Logger initialized with level: ${level}`);
    }

    return this.instance;
  }

  getCurrentLevel() {
    return this.currentLevel;
  }
}
