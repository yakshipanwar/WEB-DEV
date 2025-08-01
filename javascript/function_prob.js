function vowel(x){
    let count = 0;
    for (const char of x){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
vowel("yakshi")



//Arrow function

let vowel_count = (str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

console.log(vowel_count("yakshi"))