# List Comprehension

# # # [result for variable in list]
mylist = [(1,2), (3,4), (5,6)]

# Get multiplied values for each tuple given
res = [x * y for (x,y) in mylist]

# # # Converting for loops into list comps

mylist = []
c = 6
for a in b:
    mylist.append(c * a)

mylist = [c * a for a in b]