module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  testRegex: '.*\\.test\\.ts$',
  transform: {
    '.(ts)': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  testTimeout: 60000,
  // collectCoverageFrom: [
  //     "src/"
  // ],
  coveragePathIgnorePatterns: [
    'node_modules/',
    'dist/',
    'src/index.ts',
    'src/fincra.ts',
    'src/config',
    'src/utils',
    // ingore all dtos in subdirectories
    // "src/services/**/dto/*.ts",
    // "src/services/**/dto/**/*.ts",

    // "./src/services/**/dto",
    // "src/services/**/dto/sub-dto",
    // "src/services/**/enum",
    // "src/utils/**/*.ts",
  ],
};
