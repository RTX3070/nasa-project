module.exports = {
    apps: [
        {
            name: 'server',
            script: './src/server.js',
            // number of app instance to be launched, how many core
            // instances: 2,
            // instances: 'max',
            instances: 'max',

            exec_mode: 'cluster',

            // enable watch & restart feature, if a file change in the folder or subfolder, your app will get reloaded
            watch: true,

            // env variables which will appear in your app
            env_development: {
                PORT: 8000,
                NODE_ENV: 'development',
                NODE_CLUSTER_SCHED_POLICY: 'rr',
            },
            env_production: {
                PORT: 8000,
                NODE_ENV: 'production',
                NODE_CLUSTER_SCHED_POLICY: 'rr'
            }
        }
    ]
};