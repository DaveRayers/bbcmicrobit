maqueen.IR_callbackUser(function (message) {
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    for (let index = 0; index <= 4; index++) {
        if (message == 28) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            strip.showRainbow(1, 360)
        }
        basic.showString("" + (message))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let heading = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
music.playMelody("A G E D E D F G ", 120)
strip.showBarGraph(32, 64)
basic.forever(function () {
    heading = input.compassHeading()
    basic.pause(1000)
})
