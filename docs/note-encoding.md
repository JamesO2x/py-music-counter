## Note Encoding Formula
We should be able to use a simple octal function to convert numbers, but in case we want to encode more than 8 notes in the future, here's a more general string formula:

> [python - How to convert an integer to a string in any base? - Stack Overflow](https://stackoverflow.com/questions/2267362/how-to-convert-an-integer-to-a-string-in-any-base)


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
