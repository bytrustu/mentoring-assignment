export function cloneDeep<T>(value: T): T {
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        const clone: any[] = [];
        value.forEach((item) => {
            clone.push(cloneDeep(item));
        });
        return clone as T;
    }

    const clone = {} as T;
    Object.keys(value).forEach((key) => {
        clone[key as keyof T] = cloneDeep(value[key as keyof T]);
    });
    return clone;
}

console.log(cloneDeep({ a: 1, b: 2 })); // { a: 1, b: 2 }
