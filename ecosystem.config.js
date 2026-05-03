module.exports = {
    apps: [{
        name: 'tyumen',
        script: 'npm',
        args: 'start',
        cwd: '/var/www/html/TyumenPhoto',

        env: {
            NODE_ENV: 'production',
            PORT: 3001,
            host: "0.0.0.0"
        },

        max_memory_restart: '1G',

        error_file: '/var/log/tyumen-error.log',
        out_file: '/var/log/tyumen-out.log',
        time: true
    }]
}