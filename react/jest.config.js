module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^vtex\\.css-handles$': '<rootDir>/src/__mocks__/vtex-css-handles.js',
        '^vtex\\.render-runtime$': '<rootDir>/src/__mocks__/vtex-render-runtime.js',
        '^utils/urlUtils$': '<rootDir>/src/__mocks__/urlUtils.js',
        '^swiper$': '<rootDir>/src/__mocks__/swiper.js',
        '^swiper/modules$': '<rootDir>/src/__mocks__/swiper.js',
        '^react-helmet-async$': '<rootDir>/src/__mocks__/react-helmet-async.js',
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
    },
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
};