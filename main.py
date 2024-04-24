def on_button_pressed_ab():
    radio.send_string("Alarm Cleared")
    control.reset()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

radio.set_transmit_power(7)
radio.set_group(5)
radio.send_string("ARMED")
radio.set_frequency_band(37)

def on_forever():
    if input.light_level() >= 25 or input.is_gesture(Gesture.SHAKE):
        Alarm_Clear = 0
        music.play(music.string_playable("C5 D C5 D C5 D C5 D ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        radio.send_string("ALARM")
        while Alarm_Clear == 0:
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
            basic.show_leds("""
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                """)
basic.forever(on_forever)
