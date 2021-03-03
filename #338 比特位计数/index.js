const countBits = function(num){
    let res = []
    for (let i =0;i<=num;i++){
        res.push(countTimes(i))
    }
    function countTimes(i){
        let count = 0
        while(i){
            i=i&i-1
            count++
        }
        return count
    }
    return res
}


console.log(countBits(5))
