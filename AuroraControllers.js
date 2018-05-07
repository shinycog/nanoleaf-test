let auroraConfig = require("./AuroraConfig").AuroraConfig
let AuroraAPI = require("nanoleaves")

// Create Blue
const blue = new AuroraAPI({
    host: auroraConfig.blue.ip,
    token: auroraConfig.blue.token
});

module.exports = {
    Blue: blue
}