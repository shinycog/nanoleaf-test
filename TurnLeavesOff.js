const controllers = require("./AuroraControllers");

for(var controller in controllers){
   console.log(controller);
    controllers[controller].off();
}