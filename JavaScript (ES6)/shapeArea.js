shapeArea = n => {
    let out = 1;
    for (var i = 0; i < n; i++) {
        out += 2 * (2*i);
    }
    return out;
}