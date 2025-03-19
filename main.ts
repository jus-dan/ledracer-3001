input.onButtonPressed(Button.A, function () {
    if (modus == 1) {
        DFPlayerPro.MP3_playFilePathName("mayday1.mp3")
        for (let index = 0; index < 13; index++) {
            LedBlau.rotate(2)
            LedBlau.show()
            basic.pause(300)
            LedRot.rotate(2)
            LedRot.show()
            basic.pause(300)
        }
        basic.pause(500)
        // Buttons nicht blinken
        modus = 41
        basic.pause(5500)
        startzeit = input.runningTime()
        modus = 42
    } else {
        if (modus != 4) {
            DFPlayerPro.MP3_control(DFPlayerPro.ControlType.playPause)
        }
        setup()
    }
})
function won (farbe: string) {
    modus = 4
    endzeit = input.runningTime()
    DFPlayerPro.MP3_playFilePathName("winning.mp3")
    radio.sendValue(farbe, endzeit - startzeit)
}
// ROT
input.onPinPressed(TouchPin.P2, function () {
    if (modus == 42) {
        LedRot.rotate(ledSteps)
        counterRed += ledSteps
        if (counterRed >= numerOfLeds * spielrunden + 0) {
            won("rot")
        }
    }
})
// BLAU
input.onPinPressed(TouchPin.P1, function () {
    if (modus == 42) {
        LedBlau.rotate(ledSteps)
        counterBlue += ledSteps
        if (counterBlue >= numerOfLeds * spielrunden + 0) {
            won("blau")
        }
    }
})
function setup () {
    counterBlue = 0
    counterRed = 0
    modus = 0
    LedBlau = neopixel.create(DigitalPin.P14, numerOfLeds, NeoPixelMode.RGB)
    LedRot = neopixel.create(DigitalPin.P14, numerOfLeds, NeoPixelMode.RGB)
    LedBlau.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.show()
    LedRot.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    LedRot.show()
    aktuelleLautstärke = Math.round(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 30))
    DFPlayerPro.MP3_setSerial(SerialPin.P13, SerialPin.P16)
    DFPlayerPro.MP3_amplifierMode(
    DFPlayerPro.ampType.ampOff
    )
    DFPlayerPro.MP3_ledMode(DFPlayerPro.ledType.ledOn)
    DFPlayerPro.MP3_setVol(Math.round(aktuelleLautstärke))
    DFPlayerPro.MP3_setPlayMode(DFPlayerPro.PlayType.playOneSongAndPause)
    DFPlayerPro.MP3_amplifierMode(
    DFPlayerPro.ampType.ampOn
    )
    modus = 1
    basic.showIcon(IconNames.Happy)
}
let neueLautstärke = 0
let aktuelleLautstärke = 0
let counterBlue = 0
let counterRed = 0
let endzeit = 0
let startzeit = 0
let LedRot: neopixel.Strip = null
let LedBlau: neopixel.Strip = null
let spielrunden = 0
let ledSteps = 0
let numerOfLeds = 0
let modus = 0
radio.setGroup(42)
modus = 0
numerOfLeds = 450
ledSteps = 5
spielrunden = 2
basic.pause(1000)
setup()
// Spielbuttons Blinken
basic.forever(function () {
    if (modus == 42) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    basic.pause(50)
})
// Startbutton licht
basic.forever(function () {
    if (modus == 0) {
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.pause(200)
    } else if (modus == 1) {
        pins.digitalWritePin(DigitalPin.P9, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 1)
    }
})
// LED-Streifen blinken
basic.forever(function () {
    if (modus >= 41) {
        LedBlau.show()
        basic.pause(50)
        LedRot.show()
    } else if (modus == 4) {
        LedBlau.show()
        basic.pause(200)
        LedRot.show()
        basic.pause(200)
    } else if (modus == 1) {
        basic.pause(50)
    } else {
        basic.pause(50)
    }
})
basic.forever(function () {
    if (modus != 0) {
        neueLautstärke = Math.round(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 30))
        if (neueLautstärke != aktuelleLautstärke) {
            aktuelleLautstärke = neueLautstärke
            DFPlayerPro.MP3_setVol(aktuelleLautstärke)
        }
    }
    basic.pause(500)
})
