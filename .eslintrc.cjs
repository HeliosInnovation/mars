const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  rules: {
    'react/no-unused-prop-types': 'off',
    'react/jsx-no-leaked-render': 'off',
    'no-console': 'error',
  },
  extends: ['plugin:storybook/recommended'],
});
