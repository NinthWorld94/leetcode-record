const nextGreaterElements = function(nums) {
    let res = Array.apply(null,Array(nums.length)).map(()=>-1)
    nums = [...nums,...nums]
    for (let i= 0;i<res.length;i++){
        for(let j = i+1;j<i+res.length;j++){
            console.log(nums[i],nums[j])
            if(nums[j]>nums[i]) {res[i]=nums[j%res.length];break} 
        }
    }
    return res
};

console.log(nextGreaterElements([1,8,-1,-100,-1,222,1111111,-111111])) 