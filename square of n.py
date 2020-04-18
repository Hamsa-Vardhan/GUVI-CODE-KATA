def square(n):
	if n<0:
		return "Error"
	elif n==0:
		return 0
	else:
		return n**2
print(square(int(input())))
