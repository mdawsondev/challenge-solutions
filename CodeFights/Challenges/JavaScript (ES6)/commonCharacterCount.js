function commonCharacterCount(a, b) {
    a.split('').forEach(e => b = b.replace(e, '.') );
    return b.match(/\./g) ? b.match(/\./g).length : 0;
}