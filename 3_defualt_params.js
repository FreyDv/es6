let DEFVALUE = 2
const getDefault = c => c*2
function compute(a=40,b = getDefault(a),c  =DEFVALUE,d= b+c){
    return a+b+c+d
}

console.log(compute(40,))
console.log(compute(40))
console.log(compute())

