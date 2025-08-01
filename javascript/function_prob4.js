let n = prompt("enter the lenght of arr: ");
arr = []
for (i = 1; i <= n; i++){
    arr[i-1] = i;
}
let sum = arr.reduce((res, curr) =>{
    return res + curr;
})
let fact = arr.reduce((res, curr) =>{
    return res * curr;
})


console.log(sum);
console.log(fact);


