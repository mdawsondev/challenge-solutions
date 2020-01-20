makeArrayConsecutive2 = arr => {
    let x = [];
    for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
        if (arr.indexOf(i) < 0) x.push(i);
    }
    return x.length;
}