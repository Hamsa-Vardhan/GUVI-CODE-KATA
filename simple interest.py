def SI(p,r,t):
	return p*t*r/100
p,r,t = map(float,input().split())
print(round(SI(p,r,t),2))
