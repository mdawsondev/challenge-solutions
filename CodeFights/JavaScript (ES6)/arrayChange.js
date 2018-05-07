function arrayChange(arr) {
    let j = 0;
    arr.forEach((e, i, a) => {
        if (e <= a[i - 1]) {
            a[i] += Math.abs(e - a[i - 1]) + 1;
            j += (a[i] - e);
        }
    });
    return j;
}