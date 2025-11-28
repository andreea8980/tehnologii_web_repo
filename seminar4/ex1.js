class Stream{
    #value;
    constructor(start){
        if (start%2===0){
            this.#value=start;
        }
        else{
            this.#value=start+1;
        }
    }


    get next(){
        const current=this.#value;
        this.#value=this.#value+2;
        return current;
    }
}

const stream=new Stream(3);
for(let i=0;i<10;i++){
    console.log(stream.next); 
}

