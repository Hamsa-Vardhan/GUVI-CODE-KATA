n = int(input())
lst = map(int,input().split())
a = 1
for i in lst:
	a=a&i
print(a)
