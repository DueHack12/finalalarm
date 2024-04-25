radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 65) {
        radio.sendString("Alarm Cleared")
        control.reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Alarm Cleared")
    basic.pause(100)
    control.reset()
})
let Alarm_Clear = 0
radio.setTransmitPower(7)
radio.setGroup(5)
radio.sendString("ARMED")
radio.setFrequencyBand(37)
basic.pause(1000)
basic.showString("ARMED")
basic.forever(function () {
    while ((input.lightLevel() >= 25 || input.isGesture(Gesture.Shake)) == true) {
        if (input.lightLevel() >= 25 || input.isGesture(Gesture.Shake)) {
            music.play(music.stringPlayable("C5 C B D C5 C B D ", 120), music.PlaybackMode.LoopingInBackground)
            radio.sendString("ALARM")
            while (Alarm_Clear == 0) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    }
})
