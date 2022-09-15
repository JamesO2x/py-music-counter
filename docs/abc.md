# ABC Notation
There exists a simple plain-text music notation system called "ABC notation". It allows programmers to write and share music in a simple plain-text document.

> ## ABC Notation Examples - External Links:
> - <a href="https://www.maztr.com/sheetmusiceditor">MAZTR: Free Online Sheet Music Editor</a> - Let's you write ABC notation online
> - <a href="https://abcnotation.com/examples">abc examples</a> - A huge website database Dedicated to documenting ABC notation


## MusicalBeep python package
Using the `musicalbeep` python package, we can generate tones at Different note frequencies. For the purposes of our experiment we will only be needing *one single octave*. This allows us to give each note an ID number from zero to 7, which also corresponds to a note in the `ABC` musical code, as well as the MusicalBeep notation.

| ID | ABC | MusicalBeep |
|----|-----|-------------|
| 0  | C   | C4          |
| 1  | D   | D4          |
| 2  | E   | E4          |
| 3  | F   | F4          |
| 4  | G   | G4          |
| 5  | A   | A4          |
| 6  | B   | B4          |
| 7  | c   | C5          |

Using this format we can encode music as a number in base8 (octal), and also convert that to an ABC string by comparing the index in an array.


Using the original "All the Music" limitations of "12 note length" produces `68,719,476,735` possible combinations.

## Examples:
`FAB FAB` is Saria's Song from Zelda Ocarina of Time. This could be represented as either ABC notation or as an octal:
```
FAB FAB FABED => FABBFABBFABE
356 356 35621 => 356635663562
```

And in full proper ABC Notation:
```abc
X:1
T:Saria's Song - Ocarina of Time
M: 4/4
Q:1/4=120
K:C % 1
%%MIDI program 79 % ocarina
FAB2 | FAB2 | FABed2
```

You can even set The instrument using the standard general MIDI instrumentation numbers:
> [GM Instrement Bank Numbers](midi.md)
