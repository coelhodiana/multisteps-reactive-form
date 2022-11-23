module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: [
    'node_modules',
    'routing.module.ts'
  ],
};
