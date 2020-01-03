module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testRegex: '__tests__/.*\\.spec\\.(tsx?|ts?)$',
	setupFiles: ['./jest.setup.js'],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
		},
	},
	testPathIgnorePatterns: ['./.next/', './node_modules/'],
	roots: ['<rootDir>'],
	modulePaths: ['<rootDir>'],
	moduleDirectories: ['node_modules'],
};
