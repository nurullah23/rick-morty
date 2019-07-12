module.exports = {
    rootDir: 'test',
    setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
    testMatch: [
        '<rootDir>/**/*.spec.(js|jsx)'
    ],
    "moduleNameMapper": {
        "\\.(css|scss)$": "<rootDir>/styleMocks.js"
    }
};