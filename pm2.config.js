module.exports = {
  apps: [
    {
      name: 'armnx-app-server',
      script: './server/main.js',
      ignore_watch: ['node_modules'],
      instances: '2',
      exec_mode: 'cluster',
    },
  ],
}
