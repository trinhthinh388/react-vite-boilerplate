module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'include',
          'use',
          'function',
          'return',
          'mixin',
        ],
      },
    ],
  },
};
