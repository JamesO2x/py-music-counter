


# "Live" Performance
In order to play all of these songs "live", we will need to figure out the BPM and the length of the of each note (in milliseconds).

We can use this conversion table as a sample:
> [BPM tempo and delay to time conversion calculator tempo - sengpielaudio Sengpiel Berlin](http://www.sengpielaudio.com/calculator-bpmtempotime.htm)

If we assume each one of our notes is 1/4 note at 120 BPM, each note should last for exactly 500 milliseconds (0.5 seconds). This means we can calculate the length of each melody as well:

```
12 * 0.5 = 6 seconds
```

If each song lasts 6 seconds then it should take approximately 13,074.5 years To play all the songs.

I created a quick spreadsheet that can calculate BPM to time. We may want to speed up the tempo for more reasonable time.

> - [Time Calculations](../data/)
> - [Time Calculations - time-static.csv](../data/time-static.csv)
> - [Time Calculations - time-formulas.csv](../data/time-formulas.csv)

## 120 bpm Standard
|                  |                |           |                                                                              |
|------------------|----------------|-----------|------------------------------------------------------------------------------|
| # of Melodies    | 68,719,476,735 | melodies  |                                                                              |
| # of Notes       |             12 | 1/4 notes |                                                                              |
| BPM              |            120 | bpm       |                                                                              |
| Note Length      |            500 | ms        | 60,000 ms (1 minute) / Tempo (BPM) = Delay Time in ms for quarter-note beats |
| Song Length      |              6 | seconds   |                                                                              |
| Total Length     |      13,065.80 | years     | The time in years is equal to the seconds divided by 31,556,952              |

##  300 bpm Standard
|                  |                |           |                                                                              |
|------------------|----------------|-----------|------------------------------------------------------------------------------|
| # of Melodies    | 68,719,476,735 | melodies  |                                                                              |
| # of Notes       |             12 | 1/4 notes |                                                                              |
| BPM              |            300 | bpm       |                                                                              |
| Note Length      |            200 | ms        | 60,000 ms (1 minute) / Tempo (BPM) = Delay Time in ms for quarter-note beats |
| Song Length      |            2.4 | seconds   |                                                                              |
| Total Length     |       5,226.32 | years     | The time in years is equal to the seconds divided by 31,556,952              |
