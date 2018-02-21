function sortByHeight(a) {
    let b = a.map(e => e).sort((x, y) => x - y);
    while (b[0] === -1) { b.shift() };
    return a.map(e => {
        return e === -1 ? e : (b[0], b.shift());
    });
}