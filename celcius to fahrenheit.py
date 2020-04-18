def c_to_f(c):
	return c*(9/5)+32
c = int(input())
if float(int(c_to_f(c))) == c_to_f(c):
	print(int(c_to_f(c)))
else:
	print(round(c_to_f(c),2))
