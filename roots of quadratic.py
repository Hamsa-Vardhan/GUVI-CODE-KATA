from math import sqrt
def roots(a,b,c):
	return ((-b + sqrt(b**2-4*a*c))/(2*a)),((-b - sqrt(b**2-4*a*c))/(2*a))
a,b,c = map(int,input().split())
[print("%.2f"%roots(a,b,c)[i]) for i in range(2)]
