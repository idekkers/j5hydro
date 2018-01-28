var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function(){
    // var led = new five.Led(13);
    // var low = new five.Button({pin: 4, isPullup: true});
    // var high = new five.Button({pin: 2, isPullup: true});
    // var lowOpen = false;
    // var highClosed = false;

    var multi = new five.Multi({
        controller: "BME280"
    })

    multi.on("data", function(){
        console.log("Thormo");
        console.log("celsius : ", this.thermometer.celsius );
        console.log("-----------------------")
        console.log("Baro")
        console.log("pressure : ", this.baometer.pressure)
        console.log("------------------------------")
        console.log("Hygro")
        console.log("humidity : ", this.hygrometer.relativeHumidity);
        console.log("-----------------------------")
        console.log("Alt")
        console.log("meters : ", this.altimeter.meters)
    })

    // board.repl.inject({
    //     low: low,
    //     high: high
    // })

    // low.on("up", function(){
    //     lowOpen = true;
    //     led.on();
    //     if(highClosed){
    //         console.log('error in high water level sensor');
    //     }
    // })

    // low.on("down", function(){
    //     lowOpen = false;
    // })

    // high.on("down", function(){
    //     highClosed = true;
    //     led.off();
    //     if(lowOpen){
    //         console.log('error in low water level sensor');
    //     }
    // })

    // high.on("up", function(){
    //     highClosed = false;
    // })

})