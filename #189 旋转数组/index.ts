function rotate(nums:number[],k:number){
    const cache:Array<number>=[]
    while(k){
        cache.push(nums.pop())
        nums.unshift(cache.pop())
        k--
    }
    return nums
}