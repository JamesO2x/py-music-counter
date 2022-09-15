# "All the Music" Project 2022 (py music counter)
 A number counter tone test. This is my attempt at recreating the "All the Music" project in a simpler plain-text dataset, based on the ABC musical programming language.


> Original "All the Music" Midi DataSet:
> - [https://archive.org/details/allthemusicllc-datasets](https://archive.org/details/allthemusicllc-datasets)
> - [http://allthemusic.info/](http://allthemusic.info/)
> 
> Related Video Essays:
> - [Every Melody Has Been Copyrighted (and they're all on this hard drive) - YouTube](https://www.youtube.com/watch?v=sfXn_ecH5Rw)
> 

# Reference Docs
- [ABC Notation](docs/abc.md)
- [GM Instrement Bank Numbers](docs/midi.md)
- [Note Encoding Formula](docs/note-encoding.md)
- [Note Datasets](docs/datasets.md)
- ["Live" Performance](docs/live.md)


---



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

| 300 bpm Standard |                |           |                                                                              |
|------------------|----------------|-----------|------------------------------------------------------------------------------|
| EXPERIMENTAL:    |                |           |                                                                              |
| # of Melodies    | 68,719,476,735 | melodies  |                                                                              |
| # of Notes       |             12 | 1/4 notes |                                                                              |
| BPM              |            300 | bpm       |                                                                              |
| Note Length      |            200 | ms        | 60,000 ms (1 minute) / Tempo (BPM) = Delay Time in ms for quarter-note beats |
| Song Length      |            2.4 | seconds   |                                                                              |
| Total Length     |       5,226.32 | years     | The time in years is equal to the seconds divided by 31,556,952              |
