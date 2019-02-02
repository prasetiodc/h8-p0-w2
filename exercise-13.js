function xo(str){
    var sumX = 0
    var sumO = 0
  
    for (var i = 0; i<str.length; i++){
        if (str[i]==='x'){
            sumX += 1
        }else{
            sumO += 1
        }
    }
    if (sumX === sumO){
        return true
    }else{
        return false
    }
}
  
console.log(xo('xoxoxo'))
console.log(xo('oxoxoxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))