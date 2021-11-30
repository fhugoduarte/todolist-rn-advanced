module.exports = {
  preset: 'jest-expo',
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.tsx', '!src/common/mocks/*.{ts,tsx}'],
  verbose: true,
  coverageReporters: ['lcov'],
};
