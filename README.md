# Practice for Singleton design pattern

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task you will define a Singleton Logger class for the Conduit API testing framework.


## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task

1. Update `./src/common/logger/Logger.js` class to be a singleton class:
- Add static private variable `#instance` to the `Logger` class;
- Update method `getInstance(level = 'error')` so that it create a singleton `Logger` instance. Use examples from the theory block. 
2. Update the `logger` fixture within the `tests/_fixtures/fixturesGeneric.ts` file to initialize Logger instance using the `getInstance()` method.
3. Run the  `tests/unitTests/logger/logger.spec.js` and make sure it's passing.  
4. Run all the tests and make sure that are passing.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
