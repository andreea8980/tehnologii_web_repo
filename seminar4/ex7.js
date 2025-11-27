function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]); 
        }
    }

    return copy;
}
const original = {
    a: 1,
    b: { c: 2, d: [3, 4] },
    e: [5, { f: 6 }]
};

const clone = deepClone(original);
clone.b.c = 99;
clone.e[1].f = 100;
console.log(original.b.c); 
