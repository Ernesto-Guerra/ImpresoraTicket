const { exec } = require('child_process');
exec('php -S localhost:8001 -t public', (err, stdout, stderr) => {
    console.log(stdout)
});