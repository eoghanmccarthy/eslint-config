module.exports = {
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'no-only-tests',
    'react-hooks',
    'react',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unicorn',
    'unused-imports',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-dynamic-delete': 0,
    '@typescript-eslint/no-invalid-void-type': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    curly: 2,
    'eol-last': 2,
    // `import/default`, `import/namespace` and `import/no-duplicates` are slow.
    'import/default': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-duplicates': 0,
    'import/no-extraneous-dependencies': 2,
    'import/no-named-as-default-member': 0,
    'import/no-namespace': 2,
    'import/order': 0,
    'no-console': 2,
    'no-const-assign': 2,
    'no-constant-binary-expression': 2,
    'no-extra-parens': [2, 'functions'],
    'no-irregular-whitespace': 2,
    'no-only-tests/no-only-tests': 2,
    'no-this-before-super': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-unused-vars': 0,
    'no-useless-rename': 2,
    'no-var': 2,
    'no-warning-comments': [2, { terms: ['@nocommit'] }],
    'object-curly-spacing': 0,
    'object-shorthand': 2,
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    'prefer-const': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-sort-props': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys-fix/sort-keys-fix': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      { anonymous: 'never', asyncArrow: 'always', named: 'never' },
    ],
    'typescript-sort-keys/interface': 2,
    'typescript-sort-keys/string-enum': 2,
    'unicorn/better-regex': 2,
    'unicorn/catch-error-name': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-typeof-undefined': 2,
    'unicorn/no-useless-promise-resolve-reject': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/numeric-separators-style': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-at': 2,
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-native-coercion-functions': 2,
    'unicorn/prefer-node-protocol': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-optional-catch-binding': 2,
    'unicorn/prefer-set-size': 2,
    'unicorn/prefer-string-replace-all': 2,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-ternary': 2,
    'unicorn/prefer-top-level-await': 2,
    'unicorn/text-encoding-identifier-case': 2,
    'unused-imports/no-unused-imports': 2,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: '18.2.0',
    },
  },
};
