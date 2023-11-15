module.exports = {
  root: true,
  extends: ['@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['jest', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 'off',
    'no-undef': 'off',
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
