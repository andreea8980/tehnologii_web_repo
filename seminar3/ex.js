//ex1
const years=[2004, 1999, 2007,2009,2020]
const ages=years.map(year=>new Date().getFullYear()-year); 
const legalAges=ages.filter(age=>age>=18);
console.log("varste", ages);
console.log("varste peste 18 ani", legalAges);

//ex2 
function sumDivisible(numbers, divisor){
    return numbers.filter(nr=>nr%divisor===0).reduce((sum, nr)=>sum+nr,0);
}
const vect=[20,19,32,67];
const div=2;
const rez=sumDivisible(vect, div);
console.log(rez);

//ex3
function format(s, obj){
    return s.replace(/\{(\w+)\}/g, (match, key)=>{
        if(key in obj){
            return obj[key];
        }
        return match;
    });
}
const sablon="un {substantiv} este {adjectiv}";
const obj={
    substantiv:"calut",
    adjectiv:"dragut"
};
const rez2=format(sablon, obj);
console.log(rez2);

//ex4
const reduceLeft=(array, reducer, initialValue)=>{ 
    let accumulator=initialValue;
    for(const element of array){
        accumulator=reducer(accumulator, element); 
    }
    return accumulator;
};

const v=[9,4,1,7];
const sum=reduceLeft(v, (acc, el)=>acc+el,0); 

//ex5 
const censorText = (text, dictionary) => {
    return text
        .split(' ')
        .map(word => {
            if (dictionary.includes(word)) {
                if (word.length <= 2) return word; 
                const middle = '*'.repeat(word.length - 2); 
                return word[0] + middle + word[word.length - 1]; 
            } else {
                return word; 
            }
        })
        .join(' '); 
};

const text = "javascript este minunat";
const dict = ["este"];
console.log(censorText(text, dict));


//ex6 
const sortByKey = (array, key) => {
    return array.slice().sort((a, b) => {
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            return a[key].localeCompare(b[key]);
        }
        return a[key] - b[key];
    });
};
const people = [
    { name: "Alina", age: 25 },
    { name: "Irina", age: 30 },
    { name: "Magdalena", age: 20 }
];

console.log(sortByKey(people, "age"));
console.log(sortByKey(people, "name"));

//ex7

const avg=(numbers)=>{
    if(numbers.length===0)return 0;
    
    const sum=numbers.reduce((acc, curent)=>acc+curent,0);
    return sum/numbers.length;
}
const nr=[10,20,65];
const rez7=avg(nr);
console.log("media: ", rez7);