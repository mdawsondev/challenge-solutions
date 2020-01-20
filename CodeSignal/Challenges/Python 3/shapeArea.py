def shapeArea(n):
    out = 1
    i = 0
    while (i < n):
        out += 2 * (2*i)
        i+=1
    return out