const controllers = require("./AuroraControllers");
// controllers.Blue.off();

for(var controller in controllers){
    console.log(controller);
    controllers[controller].setBrightness(10);
}