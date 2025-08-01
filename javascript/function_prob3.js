marks = [90, 97,32,56,45, 89, 96];

let filter_marks = marks.filter((val) =>{
    if (val >= 90){
        return val
    }
})

console.log(filter_marks)