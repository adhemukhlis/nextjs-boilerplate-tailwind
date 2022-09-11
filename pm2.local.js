const pkg = require('./package.json')
const port = 6970

module.exports = {
  apps: [
    {
      name: `${pkg.name}:${port}`,
      script: 'node server.js',
      watch: false,
      env: {
        PORT: port,
        NODE_ENV: "development"
      }
    },
  ],
}