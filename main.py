# Imports
import musicalbeeps
import random

# Javascript version:
# https://codepen.io/jameso2/pen/yLqvGWJ?editors=0011

# Global Vars
mb = musicalbeeps.Player(volume = 0.05,
                        mute_output = True)

notes = 8  # Number of notes available in our scale
melody = 12  # Number of Notes in a melody
total = notes**melody # Total melodies using exponent

option = 0 # used for menu

# Song Vars
randID = 0 # A random melody ID number
octID = 0 # The ID of a song in octal form
abcID = '' # The ID of a song in ABC notation form
abc = ['C'] * melody # The ABC notation of a song split into an array
beep = ['C4'] * melody # The BEEP notation of a song split into an array

# Note Table
note_table = [['ID','ABC','MusicalBeep'],
    [0,'C','C4'],
    [1,'D','D4'],
    [2,'E','E4'],
    [3,'F','F4'],
    [4,'G','G4'],
    [5,'A','A4'],
    [6,'B','B4'],
    [7,'c','C5']]
    
# print(note_table[8][0]) # Expected: 7
# print(note_table[0][2]) # Expected: MusicalBeep
# print(note_table[4][0]) # Expected: F


# ███╗   ███╗███████╗███╗   ██╗██╗   ██╗
# ████╗ ████║██╔════╝████╗  ██║██║   ██║
# ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║
# ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║
# ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝
# ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝
def print_menu1():
    print()
    print('##################')
    print('## PYTHON MUSIC ##    ' + "{:,}".format(total) + ' melodies!')
    print('##################')
    print()
    print('1 -- Generate a random number')
    print('2 -- Next 8 Melodies')
    print('3 -- Set ID')
    print('4 -- Exit')

def option1():
    rand_mel()
    convert_ID()
    show_ID()
    play_song()

def option2():
    
    for i in range(8):
        next_mel()
        convert_ID()
        print('>>> Next Melody:: ' )
        show_ID()
        play_song()

def option3():
    set_mel()
    convert_ID()
    print('>>> SET Melody:: ' )
    show_ID()
    play_song()


# ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
# ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
# █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
# ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
# ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
# ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
def play_song():
    global beep

    # Populate the ABC's and beep arrays
    for i, note in enumerate(beep):
        mb.play_note(note, 0.15)
    return

def rand_mel():
    global randID
    randID = random.randrange(total)
    return

def next_mel():
    global randID
    randID += 1
    # Loop around if ID exceeds maximum
    if randID > total:
        randID = 0
    return

def set_mel():
    global randID
    randID = 32052307826 # Saria's Song
    return

def convert_ID():
    global randID, octID, abcID, abc, beep

    octID = oct(randID)

    abc = list(str(octID))
    abc.pop(0) # Remove the first two special characters of the octal
    abc.pop(0)

    # insert leading zeros
    dif = melody - len(abc)
    # print('difference: ' + str(dif))
    for a in range(dif):
        abc.insert(0, 0)

    # Populate the ABC's and beep arrays
    for i, x in enumerate(abc):
        temp = int(x) + 1 # Temporary value to store element as integer
        abc[i] = note_table[temp][1]
        beep[i] = note_table[temp][2]
    
    abcID = ''.join(abc)
    return

def show_ID():
    print('ID        #: ' + "{:,}".format(randID) )
    print('OCT ID    #: ' + octID )
    print('ABC ID    #:   ' + abcID)
    print('BEEP Arr  #: ' )
    print(beep)
    return

# ==================================================
# ==================================================


while(True):
    print_menu1()
    try:
        option = int(input('Enter your choice: '))
    except:
        print('Wrong input. Please enter a number ...')

    #Check what choice was entered and act accordingly
    if option == 1:
        option1()
    elif option == 2:
        option2()
    elif option == 3:
        option3()
    elif option == 4:
        print('Thanks message before exiting')
        exit()
    else:
        print('Invalid option. Please enter a number between 1 and 4.')
    
    print("=============================================")
