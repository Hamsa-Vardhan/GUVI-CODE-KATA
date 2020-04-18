import math
from collections import Counter
def circum(a):
	return 2*math.pi*a
a = float(input())
print(round(circum(a),2)) if a>=0 else print("Error")
