let auroraConfig = require("./AuroraConfig").AuroraConfig
let AuroraAPI = require("nanoleaves")

//Create controllers by color name, based on AuroraConfig
const Blue = new AuroraAPI({
    host: auroraConfig.blue.ip,
    token: auroraConfig.blue.token
});

const Purple = new AuroraAPI({
    host: auroraConfig.purple.ip,
    token: auroraConfig.purple.token
});

const Yellow = new AuroraAPI({
    host: auroraConfig.yellow.ip,
    token: auroraConfig.yellow.token
});

const Green = new AuroraAPI({
    host: auroraConfig.green.ip,
    token: auroraConfig.green.token
});

module.exports = {
    Blue,
    Purple,
    Yellow,
    Green
}