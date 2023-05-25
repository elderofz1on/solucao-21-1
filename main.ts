basic.forever(function () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, Math.map(input.lightLevel(), 0, 255, 0, 180))
})
