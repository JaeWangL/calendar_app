// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    // 항상 basic -> advanced 순서로 배치되어야 하기때문에 expo는 다른 설정들보다 뒤에 있어야함
    'expo',
    // 항상 runtime은 다른 설정들보다 뒤에 있어야함
    'plugin:react/jsx-runtime',
    // 항상 가장 마지막은 prettier
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // typescript-eslint
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/no-empty-object-type': 0,
    // eslint
    'no-use-before-define': 0,
    // react
    'react/prop-types': 0,
    // react-native
    'react-native/no-raw-text': 0,
    // eslint-config-standard overrides
    'comma-dangle': 0,
    'no-global-assign': 0,
    'quotes': 0,
    'space-before-function-paren': 0,
  },
};
