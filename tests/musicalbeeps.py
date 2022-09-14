# Imports
import musicalbeeps

player = musicalbeeps.Player(volume = 0.3,
                            mute_output = False)

# ---------------------------
# These are some examples on how to use the musical notes scale 
# using the musicalbeeps package

# Scale starting on default C4 @ 300 bpm
player.play_note("C", 0.2)
player.play_note("D", 0.2)
player.play_note("E", 0.2)
player.play_note("F", 0.2)
player.play_note("G", 0.2)
player.play_note("A", 0.2)
player.play_note("B", 0.2)
player.play_note("C5", 0.2)

player.play_note("pause", 3.0)

#Song samples @ 600 bpm
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)

player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("D", 0.1)

player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("C", 0.1)
player.play_note("E", 0.1)

player.play_note("C", 0.1)
player.play_note("D", 0.1)
player.play_note("E", 0.1)
player.play_note("F", 0.1)
player.play_note("G", 0.1)
player.play_note("A", 0.1)
player.play_note("B", 0.1)
player.play_note("C5", 0.1)
player.play_note("C", 0.1)
player.play_note("D", 0.1)
player.play_note("E", 0.1)
player.play_note("F", 0.1)

player.play_note("pause", 3.0)

# ---------------------------

# # Examples:
# # To play an A on default octave n°4 for 0.2 seconds
# player.play_note("A", 0.2)
# # To play a G flat on octave n°3 for 2.5 seconds
# player.play_note("G3b", 2.5)
# # To play a F sharp on octave n°5 for the default duration of 0.5 seconds
# player.play_note("F5#")
# # To pause the player for 3.5 seconds
# player.play_note("pause", 3.5)

