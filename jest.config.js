module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/tests/**/*.test.js'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@/components(.*)$': '<rootDir>/src/components$1',
    },
    setupFiles: ['<rootDir>/setupTests.js'],
    testEnvironment: "jsdom",
  };