const controllers = require("./AuroraControllers");
    controllers.Blue.hue().then(info => {console.log("Blue : " + info)});
    controllers.Purple.hue().then(info => {console.log("Purple : " + info)});
    controllers.Yellow.hue().then(info => {console.log("Yellow : " + info)});
    controllers.Green.hue().then(info => {console.log("Green : " + info)});


// for(var controller in controllers){
//     console.log(controller);
//     controllers[controller].hue().then(info => {
//         console.log(controller + ": " + info);
//     });}