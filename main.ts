input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    setup()
})
input.onButtonPressed(Button.A, function () {
    if (modus == 1) {
        modus = 42
    } else {
        setup()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (modus == 42) {
        LedRot.rotate(5)
    }
})
input.onButtonPressed(Button.B, function () {
    DFPlayerPro.MP3_control(DFPlayerPro.ControlType.playPause)
})
input.onPinPressed(TouchPin.P1, function () {
    if (modus == 42) {
        LedBlau.rotate(5)
    }
})
function setup () {
    modus = 0
    LedBlau = neopixel.create(DigitalPin.P14, 62, NeoPixelMode.RGB)
    LedRot = neopixel.create(DigitalPin.P14, 62, NeoPixelMode.RGB)
    LedRot.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    LedRot.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    LedRot.show()
    LedBlau.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.show()
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
let LedBlau: neopixel.Strip = null
let LedRot: neopixel.Strip = null
let modus = 0
modus = 0
let toggleTimeGreenButtonMs = 200
setup()
basic.forever(function () {
    if (modus == 42) {
        pins.digitalWritePin(DigitalPin.P15, 0)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    basic.pause(50)
})
basic.forever(function () {
    if (modus == 42) {
        LedRot.show()
        basic.pause(50)
        LedBlau.show()
    }
    basic.pause(50)
})
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
basic.forever(function () {
    if (modus != 0) {
        neueLautstärke = Math.round(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 30))
        if (neueLautstärke != aktuelleLautstärke) {
            aktuelleLautstärke = neueLautstärke
            DFPlayerPro.MP3_setVol(aktuelleLautstärke)
        }
    }
    basic.pause(50)
})
