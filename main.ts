input.onButtonPressed(Button.AB, function () {
    Alarm_Clear = 1
    music.stopAllSounds()
    basic.clearScreen()
    radio.sendString("Alarm Cleared")
})
let Alarm_Clear = 0
radio.setGroup(5)
radio.sendString("ARMED")
basic.forever(function () {
    if (input.lightLevel() >= 25 || input.isGesture(Gesture.Shake)) {
        music.play(music.stringPlayable("C5 D C5 D C5 D C5 D ", 120), music.PlaybackMode.LoopingInBackground)
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
})
