# This program is a test 
# to create octals in an array 
# that have leading zeros


length = 12
arr = [0] * 12

nums = [0o4,
        0o10,
        0o111111111,
        0o30,
        0o7654,
        0o154045650456,
        0o000004]

print(arr)
print(nums)

for i, x in enumerate(nums):
    print(oct(x))
    abc = list(str(oct(x)))
    abc.pop(0) # Remove the first two special characters of the octal
    abc.pop(0)

    dif = 12 - len(abc)
    print('difference: ' + str(dif))
    for a in range(dif):
        abc.insert(0, 0)

    print(abc)