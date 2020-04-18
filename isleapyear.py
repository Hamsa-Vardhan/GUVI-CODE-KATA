def check(a):
	if(a%4==0 and (a%400==0 if a%100==0 else True)):
		return 'Y'
	else:
		return 'N'
print(check(int(input())))
