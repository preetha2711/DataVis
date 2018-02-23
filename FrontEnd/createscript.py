longlat= [77.123767,28.653458,72.83333,18.96667,77.59796,12.96991,80.27,13.09,88.33778,22.54111, 78.46667,17.36667 ,76.266935,9.901199,72.58,23.03,74.030543,15.29299,73.84778,18.52361]
temp = []
count = 0
temp_pr = []
#for i in longlat:
#    temp.append(i[0] + " " + i[1])
#    temp_pr.append(i[2])
j = 1
for i in range(0,len(longlat),2):

    print "'rank-'"+str(j) + " : {"
    j = j+1
    print "center : " + "[" +  str(longlat[i]) + "," + str(longlat[i+1]) + "],"
    print "zoom : 4,"
    print "bearing : 0,"
    print "pitch : 1,"
    print "},"
    #  menu (eatery, fooditem, price) VALUES ('Juice Bar','" + temp[i] + "','" + str(temp_pr[i]) + "');
