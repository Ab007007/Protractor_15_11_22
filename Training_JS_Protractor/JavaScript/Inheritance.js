class Car {

    startEngine() {
        console.log("Starting car");
    }

    stopEngine() {
        console.log("Stopping Car");
    }
}

class Tyota extends Car {
    carModel() {
        console.log("Tyota Car");
    }
}


class Innova extends Tyota {
    carVersion() {
        console.log("SDFAFASDF");
    }

    carModel() {
        console.log("innova model");
    }
}

let innovaCar = new Innova()
innovaCar.startEngine()
innovaCar.stopEngine()
innovaCar.carModel()
innovaCar.carVersion()