def isprime(a):
	for i in range(3,a):
		if(a%i == 0):
			return 0
			break
		if(i==a-1):
			return 1
	if(a==2):
		return 1
a,b = map(int,input().split())
c = 0
for i in range(a,b+1):
	if isprime(i):
		c = c+1
print(c)
