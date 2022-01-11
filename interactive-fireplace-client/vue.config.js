const ip = require('ip')
module.exports = {
    devServer: {
        port: 8080,
        https: false,
        host: getIp()
    },
}

function getIp(){
    return ip.address();
}