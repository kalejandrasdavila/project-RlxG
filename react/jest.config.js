module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testMatch: [
        '<rootDir>/components/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
    ],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    testPathIgnorePatterns: ['/node_modules/', '/build/'],
    transformIgnorePatterns: [
        'node_modules/(?!(swiper|jquery)/)',
    ],
    collectCoverage: false,
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    }
};