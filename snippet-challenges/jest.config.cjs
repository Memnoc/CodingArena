module.exports = {
  transform: {
    '^.+\\.js$': 'esbuild-jest',
    '^.+\\.ts$': 'esbuild-jest',
  },
  // Your Jest configuration here (if needed)
  // For example:
  // testEnvironment: "jsdom",
  // ...
};
