function stript(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
console.log(stript('good like  '));
