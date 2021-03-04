const lengthOfLIS = function(nums) {
    if (nums.length ===1) return 1
    const dp = [1]
    for(let i=1;i<nums.length;i++){
        dp[i]=1//每个元素默认的dp，即自身
        //遍历i之前的每一个数组成员，计算dp值
        for(let j=0;j<i;j++){
            //如果新成员较大则其dp是对应dp[j]+1，然后比较上一个dp取两者大那个，遍历完成即是对应dp[i]
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
};
//动态规划
console.log(lengthOfLIS([4,10,4,3,8,9]))