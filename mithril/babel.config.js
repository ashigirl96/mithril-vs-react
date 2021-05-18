module.exports = {
  plugins: [
    "mjsx"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "entry",
        "corejs": 3,
      }
    ]
  ]
}