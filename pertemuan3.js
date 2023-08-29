console.log('day3')

const person = {
    name: "kevin",
    age: 20,
}

function Buah (argName, argRasa) {
    this.name = argName,
    this.rasa = argRasa
    this.englishName = function () {
        console.log(this.name)
        return this.name
    }
}

const Jeruk = new Buah("jeruk", "manis")
const Apel = new Buah("apel", "asam")
console.log(Jeruk)
console.log(Apel)

//OOP //CLASS
class Car {
    wheel = 4
    door = 4
    //constructor untuk mengambil parameter
    constructor(propcar) {
        this.properties = propcar
        this.hitungKeperluanBensin = function() {
            console.log('test')
        }
    }
}

//INHERITANCE dan ABSTRACT CLASS
class Speed extends Car {
    constructor(propspeed) {
        super(propspeed)
    }

    hitungKeperluanBensin() {
        console.log("ini kecepatan punya")
        super.hitungKeperluanBensin()
    }
}

class Baru extends Speed {
    constructor(propBaru) {
        super(propBaru)
    }

    hitungKeperluanBensin() {
        console.log("ini baru punya")
        super.hitungKeperluanBensin()
    }
}

const AylaProperties = {
    name : "Ayla",
    color: "Black"
}
const Ayla = new Car (AylaProperties)
const AylaSpeed = new Speed({...AylaProperties, satuankecepatan: "km/h"})
console.log(AylaSpeed)
console.log(AylaSpeed.hitungKeperluanBensin())