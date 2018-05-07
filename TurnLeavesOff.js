const controllers = require("./AuroraControllers");
// controllers.Blue.off();

console.log(controllers);
for(var controller in controllers){
   console.log(controller);
    controllers[controller].off();
}