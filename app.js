const {exec} = require('child_process');

exec('npm run serve', {cwd: "./interactive-fireplace-client"})
exec('node index.js', {cwd: "./server"})
