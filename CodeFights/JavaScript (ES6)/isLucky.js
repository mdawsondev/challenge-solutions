function isLucky(n) {
    const h = (n+'').length/2,
          a = (n+'').substr(0, h).split(''),
          b = (n+'').substr(h, n-1).split('');
    let c = 0,
        d = 0;
    a.forEach(e => c += parseInt(e));
    b.forEach(e => d += parseInt(e));
    return c === d;
}