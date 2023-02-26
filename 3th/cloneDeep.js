function cloneDeep(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }
    if (Array.isArray(value)) {
        var clone_1 = [];
        value.forEach(function (item) {
            clone_1.push(cloneDeep(item));
        });
        return clone_1;
    }
    var clone = {};
    Object.keys(value).forEach(function (key) {
        clone[key] = cloneDeep(value[key]);
    });
    return clone;
}
console.log(cloneDeep({ a: 1, b: 2 })); // { a: 1, b: 2 }
