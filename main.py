Alarm_Clear = 0

def on_button_pressed_ab():
    global Alarm_Clear
    Alarm_Clear = 1
    music.stop_all_sounds()
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_forever():
    if input.light_level() >= 25 or input.is_gesture(Gesture.SHAKE):
        music.play(music.string_playable("C5 D C5 D C5 D C5 D ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
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
