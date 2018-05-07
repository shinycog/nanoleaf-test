const controllers = require("./AuroraControllers");

for(var controller in controllers){
    controllers[controller].setBrightness(15);
}