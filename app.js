const {exec} = require('child_process');

exec('npm run serve', {cwd: "./interactive-fireplace-client"}, () => {
    console.log('Client running...')
})
exec('node index.js', {cwd: "./server"})
