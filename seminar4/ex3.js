function expGen() {
    const cache = {};

    const exp = (x, n) => {
        const key = x + ',' + n; // cheie unică pentru x^n

        if (cache[key] !== undefined) {
            console.log('found', key);
            return cache[key];
        }

        let result;
        if (n === 0) {
            result = 1; 
        } else {
            result = x * exp(x, n - 1); 
        }

        console.log('calculated', key);
        cache[key] = result; 
        return result;
    };

    return exp;
}

const exp = expGen();

console.log(exp(2, 0)); 
console.log(exp(2, 5)); 
