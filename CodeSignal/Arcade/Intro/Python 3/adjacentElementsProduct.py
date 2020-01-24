def adjacentElementsProduct(inputArray):
    x = float('-inf')
    for i in range(len(inputArray)-1):
        if inputArray[i] * inputArray[i+1] > x:
            x = inputArray[i] * inputArray[i+1]
    return x