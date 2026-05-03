module.exports = {
    apps: [{
        name: 'tyumen',
        script: 'server.js',
        cwd: './',

        env: {
            NODE_ENV: 'production',
            PORT: 3001
        },

        max_memory_restart: '1G',

        error_file: '/var/log/tyumen-error.log',
        out_file: '/var/log/tyumen-out.log',
        time: true
    }]
}