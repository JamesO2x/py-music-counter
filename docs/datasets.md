# Resulting Datasets
Our main Python program will generate Octal numbers counting up in order. This will eventually produce all possible melodies within our twelve note constraint.

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

## SET etc...
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