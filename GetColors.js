const controllers = require("./AuroraControllers");

for(var controller in controllers){
    controllers[controller].hue().then(info => {
        console.log(controller + ": " + info);
    });

}