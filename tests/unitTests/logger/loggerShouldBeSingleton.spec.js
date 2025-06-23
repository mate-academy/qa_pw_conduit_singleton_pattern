import { test } from '../../_fixtures/fixtures';
import { expect } from '@playwright/test';
import { Logger } from '../../../src/common/logger/Logger';

test('should reuse the same logger accross tests', async ({ logger }) => {
  const loggerError = Logger.getInstance('error');
  const loggerInfo = Logger.getInstance('info');
  const loggerDefault = Logger.getInstance();

  expect(logger).toBe(loggerError);
  expect(logger).toBe(loggerInfo);
  expect(logger).toBe(loggerDefault);

  const currentLoglevel = logger.getCurrentLevel();

  expect(currentLoglevel).toEqual(loggerError.getCurrentLevel());
  expect(currentLoglevel).toEqual(loggerInfo.getCurrentLevel());
  expect(currentLoglevel).toEqual(loggerDefault.getCurrentLevel());
});
