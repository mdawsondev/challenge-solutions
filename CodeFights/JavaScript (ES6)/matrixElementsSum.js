matrixElementsSum = arr => {
    let x = [],
        out = 0;
    arr.forEach(e => {
        e.forEach((f, i) => {
            if (x.indexOf(i) > -1) return;
            f === 0 && x.push(i);
            out += f;
        })
    });
    return out;
}