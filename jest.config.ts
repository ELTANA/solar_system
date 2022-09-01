export default {
  clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test
  collectCoverage: true, // Indicates whether the coverage information should be collected while executing the test
  coverageDirectory: 'coverage', // The directory where Jest should output its coverage files
  coverageProvider: 'v8', // Indicates which provider should be used to instrument code for coverage
  moduleFileExtensions: [
    // An array of file extensions your modules use
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
    'scss',
    'css',
  ],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest-after-env.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss|ico|png|jpg|webp|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
}
