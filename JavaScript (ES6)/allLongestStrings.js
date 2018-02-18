allLongestStrings = arr => {
    let x = arr.sort((a, b) => b.length - a.length)[0].length;
    return arr.filter(e => { return e.length === x });
}