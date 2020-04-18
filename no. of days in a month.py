def month_days(n):
	month = {
		1: 31,
		2: 28,
		3: 31,
		4: 30,
		5: 31,
		6: 30,
		7: 31,
		8: 31,
		9: 30,
		10: 30,
		11: 31,
		12: 30
		}
	return month.get(n,"Error")
n = int(input())
print(month_days(n))
