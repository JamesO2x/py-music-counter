# Imports
import winsound
import musicalbeeps
import simpleaudio

# Vars
test = 0


# Functions
def numberToBase(n, b):
    if n == 0:
        return [0]
    digits = []
    while n:
        digits.append(int(n % b))
        n //= b
    return digits[::-1]

# Main Program
test = numberToBase(21,7)
print(test)

# Beep Test
frequency = 440  # Set Frequency To 2500 Hertz
duration = 100  # Set Duration To 1000 ms == 1 second
winsound.Beep(frequency, duration)