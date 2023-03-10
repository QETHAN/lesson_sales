module.exports = {
  apps: [
    {
      name: 'hannahlinenglish',
      script: 'npm run start',
      time: true,
      instances: 1,
      autorestart: true,
      max_restarts: 50,
      watch: false,
      max_memory_restart: '500M',
      env: {
        DATABASE_ADDRESS: process.env.DATABASE_ADDRESS
      },
    },
  ],
  deploy: {
    production: {
      user: process.env.SITEUSER,
      host: process.env.SITEHOST,
      ref: 'origin/main',
      repo: 'https://github.com/QETHAN/lesson_sales.git',
      path: process.env.SITEPATH,
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --env production && pm2 save && git checkout package-lock.json',
      env: {
        NODE_ENV: 'production',
        DATABASE_ADDRESS: process.env.DATABASE_ADDRESS
      },
    },
  },
}
