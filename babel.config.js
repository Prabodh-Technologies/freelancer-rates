module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: '3.18'
      },
    ],
  ],
  "env": {
    "development": {
      "sourceMaps": "inline",
      "retainLines": true
    }
  },
  plugins: ['@babel/plugin-syntax-bigint'],
};
