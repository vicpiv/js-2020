let dacia = {
    make: "dacia",
    model: 1310,
    color: "verde",
    year: 1978,
    mileage: 350755,
    maxSpeed:180,
    paint: function (color) {
        this.color = color
    }
}
let ferrari = {
    make: "ferrari",
    model: "dino",
    color: "rosu",
    year: 1990,
    mileage: 30755,
    maxSpeed:280,
    paint: function (color) {
        this.color = color
    }
}
dacia.paint("galben")
console.log(dacia)
console.log(ferrari)