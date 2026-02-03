# l1=[3,4,5,6,7,12,0,15,8]
# maximum=l1[0]
# for i in l1:
#     if i>maximum:
#         maximum=i
# print("the maximum number in the list is:",maximum)

import math
l1=[3,4,5,6,7,12,0,15,8]
first_max = -math.inf
second_max = -math.inf

for num in l1:
    if num > first_max:
        second_max = first_max
        first_max = num
    elif first_max > num > second_max:
        second_max = num

print("Second maximum element:", second_max)


