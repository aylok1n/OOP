class Plane{
    constructor(options){
        this.name = options.name
        this.maxSpeed = options.maxSpeed
        this.state = 'on the ground'
    }
    takeoff(){
        this.state = 'in the air'
    }
    landing(){
        this.state = 'on the ground'
    }
    status(){
        console.log(this.state)
    }
}

class MIG extends Plane{
    attack(){
        this.state = 'attack'
    }
}

const tu154 = new Plane({
    name: 'ТУ-154',
    maxSpeed: '950 km/h'
})

const mig = new MIG({
    name: 'МИГ',
    maxSpeed: '3000 km/h'
}) 