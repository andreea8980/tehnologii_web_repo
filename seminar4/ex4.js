Number.prototype.times = function(callback) {
    for (let i = 0; i < this; i++) {
        callback(i); 
    }
};

3..times(() => console.log('Hello'));
(5).times(i => console.log(`Index: ${i}`));

