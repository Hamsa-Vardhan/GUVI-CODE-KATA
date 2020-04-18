a = int(input())
for i in range(3,a):
	if a%i==0:
		print('yes')
		break
	if i==a-1:
		print('no')
