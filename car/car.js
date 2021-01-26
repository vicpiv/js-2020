let dacia = {
    make: "dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 350755,
    maxSpeed: 180,
    averageConsuption: 11.5,
    batteryCapacity: 150,
    batteryCharge: 150,

    paint(color) {
        this.color = color
    },
    move(distance) {
        cosumption = this.averageConsuption * distance / 100
        if (cosumption > this.batteryCharge) {
            this.batteryCharge = 0
            this.mileage += this.distanceToEmpty()

        } else {
            this.batteryCharge -= cosumption
            this.mileage += distance
        }


    },
    recharge() {
        this.batteryCharge = this.batteryCapacity

    },
    distanceToEmpty() {
        return 100 * this.batteryCharge / this.averageConsuption

    }

}
let ferrari = {
    make: "ferrari",
    model: "dino",
    color: "rosu",
    year: 1990,
    mileage: 30755,
    maxSpeed: 280,
    paint(color) {
        this.color = color
    }
}
dacia.paint("galben")
dacia.move(723)
console.log(Math.round(dacia.distanceToEmpty()))
dacia.move(100)
console.log(dacia.distanceToEmpty())

console.log(dacia)
console.log(ferrari)