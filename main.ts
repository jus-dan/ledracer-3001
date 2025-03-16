input.onPinPressed(TouchPin.P0, function () {
    setup()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
	
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
function setup () {
    LedBlau = neopixel.create(DigitalPin.P14, 62, NeoPixelMode.RGB)
    LedGelb = neopixel.create(DigitalPin.P14, 62, NeoPixelMode.RGB)
    LedGelb.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    LedGelb.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    LedGelb.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    LedGelb.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    LedGelb.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
    LedGelb.setPixelColor(5, neopixel.colors(NeoPixelColors.Yellow))
    LedGelb.show()
    LedBlau.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    LedBlau.show()
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.showIcon(IconNames.Asleep)
    music.play(music.stringPlayable("G - G - G - C5 - ", 100), music.PlaybackMode.InBackground)
}
input.onPinReleased(TouchPin.P1, function () {
	
})
let LedGelb: neopixel.Strip = null
let LedBlau: neopixel.Strip = null
setup()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(500)
})
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0),
    1024
    )
})
basic.forever(function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(1000)
})
