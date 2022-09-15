# "All the Music" Project 2022 (py music counter)
 A number counter tone test. This is my attempt at recreating the "All the Music" project in a simpler plain-text dataset, based on the ABC musical programming language.


> Original "All the Music" Midi DataSet:
> - [https://archive.org/details/allthemusicllc-datasets](https://archive.org/details/allthemusicllc-datasets)
> - [http://allthemusic.info/](http://allthemusic.info/)
> 
> Related Video Essays:
> - [Every Melody Has Been Copyrighted (and they're all on this hard drive) - YouTube](https://www.youtube.com/watch?v=sfXn_ecH5Rw)
> 


## ABC Notation
There exists a simple plain-text music notation system called "ABC notation". It allows programmers to write and share music in a simple plain-text document.

> ABC Notation Examples:
> - [MAZTR: Free Online Sheet Music Editor](https://www.maztr.com/sheetmusiceditor) - Let's you write ABC notation online
> - [abc | examples](https://abcnotation.com/examples) - The huge website database Dedicated to documenting ABC notation

### MusicalBeep python package
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

### Examples:
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
> [Music Representation Labs](http://www.ccarh.org/courses/253/handout/gminstruments/) - GM Instruments list


## Note Formula
We should be able to use a simple octal function to convert numbers, but in case we want to encode more than 8 notes in the future, here's a more general string formula:

[python - How to convert an integer to a string in any base? - Stack Overflow](https://stackoverflow.com/questions/2267362/how-to-convert-an-integer-to-a-string-in-any-base)


> Surprisingly, people were giving only solutions that convert to small bases (smaller than the length of the English alphabet). There was no attempt to give a solution which converts to any arbitrary base from 2 to infinity.
> 
> So here is a super simple solution:
> 
> ```python
> def numberToBase(n, b):
>     if n == 0:
>         return [0]
>     digits = []
>     while n:
>         digits.append(int(n % b))
>         n //= b
>     return digits[::-1]
> ```
> 
> so if you need to convert some super huge number to the base 577,
> 
> `numberToBase(67854 ** 15 - 102, 577)`, will give you a correct solution: [4, 473, 131, 96, 431, 285, 524, 486, 28, 23, 16, 82, 292, 538, 149, 25, 41, 483, 100, 517, 131, 28, 0, 435, 197, 264, 455],
> 
> Which you can later convert to any base you want
> 
> 1. at some point of time you will notice that sometimes there is no built-in library function to do things that you want, so you need to write your own. If you disagree, post you own solution with a built-in function which can convert a base 10 number to base 577.
> 2. this is due to lack of understanding what a number in some base means.
> 3. I encourage you to think for a little bit why base in your method works only for n <= 36. Once you are done, it will be obvious why my function returns a list and has the signature it has.
> 


---

# Resulting Datasets
Our main Python program will generate Octal numbers counting up in order. This will eventually produce all possible melodies Within our twelve note constraint.

```
## SET 1
000000000000 // Melody 1
000000000001 // Melody 2
000000000002 // Melody 3
000000000003 // Melody 4
000000000004 // Melody 5
000000000005 // Melody 6
000000000006 // Melody 7
000000000007 // Melody 8

## SET 2
000000000010
000000000011
000000000012
000000000013
000000000014
000000000015
000000000016
000000000017

## SET ...
...
777777777776 // Meolody 68,719,476,734
777777777777 // Meolody 68,719,476,735
```

We can use a Python function to output these songs into text files, For easy cataloging and organizing. And using another simple function we can simply replace the numbers with the corresponding ABC notation letters.

For example:
```
## SET 1
CCCCCCCCCCCC // Melody 1
CCCCCCCCCCCD // Melody 2
CCCCCCCCCCCE // Melody 3
CCCCCCCCCCCF // Melody 4
CCCCCCCCCCCG // Melody 5
CCCCCCCCCCCA // Melody 6
CCCCCCCCCCCB // Melody 7
CCCCCCCCCCCc // Melody 8

## SET 2
CCCCCCCCCCDC
CCCCCCCCCCDD
CCCCCCCCCCDE
CCCCCCCCCCDF
CCCCCCCCCCDG
CCCCCCCCCCDA
CCCCCCCCCCDB
CCCCCCCCCCDc

## SET ...
...
cccccccccccB // Meolody 68,719,476,734
cccccccccccc // Meolody 68,719,476,735
```

# Live Stream
In order to play all of these songs "live", we will need to figure out the BPM and the length of the of each note (in milliseconds).

We can use this conversion table as a sample:
> [BPM tempo and delay to time conversion calculator tempo - sengpielaudio Sengpiel Berlin](http://www.sengpielaudio.com/calculator-bpmtempotime.htm)

If we assume each one of our notes is 1/4 note at 120 BPM, each note should last for exactly 500 milliseconds (0.5 seconds). This means we can calculate the length of each melody as well:

```
12 * 0.5 = 6 seconds
```

If each song lasts 6 seconds then it should take approximately 13,074.5 years To play all the songs.

I created a quick spreadsheet that can calculate BPM to time. We may want to speed up the tempo for more reasonable time.

> https://docs.google.com/spreadsheets/d/1Zich5buTHKERQqeG-9cb3nWS4Sagg-b5BmL7msvlaKU/edit?usp=sharing

| 120 bpm Standard |                |           |                                                                              |
|------------------|----------------|-----------|------------------------------------------------------------------------------|
| # of Melodies    | 68,719,476,735 | melodies  |                                                                              |
| # of Notes       |             12 | 1/4 notes |                                                                              |
| BPM              |            120 | bpm       |                                                                              |
| Note Length      |            500 | ms        | 60,000 ms (1 minute) / Tempo (BPM) = Delay Time in ms for quarter-note beats |
| Song Length      |              6 | seconds   |                                                                              |
| Total Length     |      13,065.80 | years     | The time in years is equal to the seconds divided by 31,556,952              |
|                  |                |           |                                                                              |
| EXPERIMENTAL:    |                |           |                                                                              |
| # of Melodies    | 68,719,476,735 | melodies  |                                                                              |
| # of Notes       |             12 | 1/4 notes |                                                                              |
| BPM              |            300 | bpm       |                                                                              |
| Note Length      |            200 | ms        | 60,000 ms (1 minute) / Tempo (BPM) = Delay Time in ms for quarter-note beats |
| Song Length      |            2.4 | seconds   |                                                                              |
| Total Length     |       5,226.32 | years     | The time in years is equal to the seconds divided by 31,556,952              |
