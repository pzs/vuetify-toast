module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': ['error', 'except-parens'],
    'max-len': 0
  }
}
