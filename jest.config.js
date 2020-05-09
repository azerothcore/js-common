module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.jsx?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
};