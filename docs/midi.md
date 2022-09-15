<html>
<head>
<title> Music Representation Labs </title>
<meta name="Document-Owner" content="Craig Sapp (craig@ccrma.stanford.edu)">
<meta name="Author" content="Craig Stuart Sapp (craig@ccrma.stanford.edu)">
<meta name="Creation-Date" content=" Mon Jan  5 21:00:28 PST 2004 ">
<meta name="Revision-Date" content=" Sat Feb  5 06:37:33 PST 2005 ">
</head>


# General MIDI instrument codes
The following table lists the standard sequence of instruments (timbres)
which are specified by General MIDI.  The number to the left of the
instrument name is the number for the instrument in General MIDI.  For
programming, you must subtract 1 from these numbers.

Instruments can be selected by using the MIDI command byte `0xc0`
followed by a data byte which is one of the below numbers (minus 1).

> This document sourced from: http://www.ccarh.org/courses/253/handout/gminstruments/

| #   | Piano Timbres:        | #   | Chromatic Percussion:  | #   | Organ Timbres:    |
|-----|-----------------------|-----|------------------------|-----|-------------------|
| 1   | Acoustic Grand Piano  | 9   | Celesta                | 17  | Hammond Organ     |
| 2   | Bright Acoustic Piano | 10  | Glockenspiel           | 18  | Percussive Organ  |
| 3   | Electric Grand Piano  | 11  | Music Box              | 19  | Rock Organ        |
| 4   | Honky-tonk Piano      | 12  | Vibraphone             | 20  | Church Organ      |
| 5   | Rhodes Piano          | 13  | Marimba                | 21  | Reed Organ        |
| 6   | Chorused Piano        | 14  | Xylophone              | 22  | Accordion         |
| 7   | Harpsichord           | 15  | Tubular Bells          | 23  | Harmonica         |
| 8   | Clavinet              | 16  | Dulcimer               | 24  | Tango Accordion   |

| #   | Guitar Timbres:       | #   | Bass Timbres:          | #   | String Timbres:   |
|-----|-----------------------|-----|------------------------|-----|-------------------|
| 25  | Acoustic Nylon Guitar | 33  | Acoustic Bass          | 41  | Violin            |
| 26  | Acoustic Steel Guitar | 34  | Fingered Electric Bass | 42  | Viola             |
| 27  | Electric Jazz Guitar  | 35  | Plucked Electric Bass  | 43  | Cello             |
| 28  | Electric Clean Guitar | 36  | Fretless Bass          | 44  | Contrabass        |
| 29  | Electric Muted Guitar | 37  | Slap Bass 1            | 45  | Tremolo Strings   |
| 30  | Overdriven Guitar     | 38  | Slap Bass 2            | 46  | Pizzicato Strings |
| 31  | Distortion Guitar     | 39  | Synth Bass 1           | 47  | Orchestral Harp   |
| 32  | Guitar Harmonics      | 40  | Synth Bass 2           | 48  | Timpani           |

| #   | Ensemble Timbres:     | #   | Brass Timbres:         | #   | Reed Timbres:     |
|-----|-----------------------|-----|------------------------|-----|-------------------|
| 49  | String Ensemble 1     | 57  | Trumpet                | 65  | Soprano Sax       |
| 50  | String Ensemble 2     | 58  | Trombone               | 66  | Alto Sax          |
| 51  | Synth Strings 1       | 59  | Tuba                   | 67  | Tenor Sax         |
| 52  | Synth Strings 2       | 60  | Muted Trumpet          | 68  | Baritone Sax      |
| 53  | Choir "Aah"           | 61  | French Horn            | 69  | Oboe              |
| 54  | Choir "Ooh"           | 62  | Brass Section          | 70  | English Horn      |
| 55  | Synth Voice           | 63  | Synth Brass 1          | 71  | Bassoon           |
| 56  | Orchestral Hit        | 64  | Synth Brass 2          | 72  | Clarinet          |

| #   | Pipe Timbres:         | #   | Synth Lead:            | #   | Synth Pad:        |
|-----|-----------------------|-----|------------------------|-----|-------------------|
| 73  | Piccolo               | 81  | Square Wave Lead       | 89  | New Age Pad       |
| 74  | Flute                 | 82  | Sawtooth Wave Lead     | 90  | Warm Pad          |
| 75  | Recorder              | 83  | Calliope Lead          | 91  | Polysynth Pad     |
| 76  | Pan Flute             | 84  | Chiff Lead             | 92  | Choir Pad         |
| 77  | Bottle Blow           | 85  | Charang Lead           | 93  | Bowed Pad         |
| 78  | Shakuhachi            | 86  | Voice Lead             | 94  | Metallic Pad      |
| 79  | Whistle               | 87  | Fifths Lead            | 95  | Halo Pad          |
| 80  | Ocarina               | 88  | Bass Lead              | 96  | Sweep Pad         |

| #   | Synth Effects:        | #   | Ethnic Timbres:        | #   | Sound Effects:    |
|-----|-----------------------| ----| ---------------------- | ----| ----------------- |
| 97  | Rain Effect           | 105 | Sitar                  | 113 | Tinkle Bell       |
| 98  | Soundtrack Effect     | 106 | Banjo                  | 114 | Agogo             |
| 99  | Crystal Effect        | 107 | Shamisen               | 115 | Steel Drums       |
| 100 | Atmosphere Effect     | 108 | Koto                   | 116 | Woodblock         |
| 101 | Brightness Effect     | 109 | Kalimba                | 117 | Taiko Drum        |
| 102 | Goblins Effect        | 110 | Bagpipe                | 118 | Melodic Tom       |
| 103 | Echoes Effect         | 111 | Fiddle                 | 119 | Synth Drum        |
| 104 | Sci-Fi Effect         | 112 | Shanai                 | 120 | Reverse Cymbal    |

| #   | Sound Effects:        |
|-----|-----------------------|
| 121 | Guitar Fret Noise     |
| 122 | Breath Noise          |
| 123 | Seashore              |
| 124 | Bird Tweet            |
| 125 | Telephone Ring        |
| 126 | Helicopter            |
| 127 | Applause              |
| 128 | Gun Shot              |

---

## Percussion
In General MIDI, **Channel 10** is reserved for percussion sets.  Here is a 
list of the percussion instruments assigned to each MIDI note number when
using General MIDI Channel 10 (Note these values are offset from 0 rather
than 1, so that #60 below is the key for middle-C):

| #  | Name                | #  | Name                | #  | Name                |
|----|---------------------|----|---------------------|----|---------------------|
| 35 | Acoustic Bass Drum  | 51 | Ride Cymbal 1       | 67 | High Agogo          |
| 36 | Bass Drum 1         | 52 | Chinese Cymbal      | 68 | Low Agogo           |
| 37 | Side Stick          | 53 | Ride Bell           | 69 | Cabasa              |
| 38 | Acoustic Snare      | 54 | Tambourine          | 70 | Maracas             |
| 39 | Hand Clap           | 55 | Splash Cymbal       | 71 | Short Whistle       |
| 40 | Electric Snare      | 56 | Cowbell             | 72 | Long Whistle        |
| 41 | Low Floor Tom       | 57 | Crash Cymbal 2      | 73 | Short Guiro         |
| 42 | Closed High Hat     | 58 | Vibraslap           | 74 | Long Guiro          |
| 43 | High Floor Tom      | 59 | Ride Cymbal 2       | 75 | Claves              |
| 44 | Pedal High Hat      | 60 | High Bongo          | 76 | High Wood Block     |
| 45 | Low Tom             | 61 | Low Bongo           | 77 | Low Wood Block      |
| 46 | Open High Hat       | 62 | Mute High Conga     | 78 | Mute Cuica          |
| 47 | Low Mid Tom         | 63 | Open High Conga     | 79 | Open Cuica          |
| 48 | High Mid Tom        | 64 | Low Conga           | 80 | Mute Triangle       |
| 49 | Crash Cymbal 1      | 65 | High Timbale        | 81 | Open Triangle       |
| 50 | High Tom            | 66 | Low Timbale         |    |                     |

