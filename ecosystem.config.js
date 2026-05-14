module.exports = {
    apps: [{
        name: 'landing',
        script: 'server.js',
        cwd: './',

        env: {
            NODE_ENV: 'production',
            PORT: 3000,
            host: "0.0.0.0"
        },

        max_memory_restart: '1G',

        error_file: '/var/log/landing-error.log',
        out_file: '/var/log/landing-out.log',
        time: true
    }]
}