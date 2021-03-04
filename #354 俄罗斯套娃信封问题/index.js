const maxEnvelopes = function(envelopes) {
    //先对使用信封按照宽度排序，宽相等，则按照高
    envelopes.sort((a,b)=>{
        return a[0]===b[0]?b[1]-a[1]:a[0]-b[0]
    })
    //获取排序后的所有信封高度
    const hList = []
    envelopes.forEach((element,index) => {
        hList[index]=element[1]
    });
    //找出高度数组中的最大递增子序列，其长度即是套娃个数
    const lengthOfLIS = function(nums) {
        if (nums.length ===1) return 1
        const dp = [1]
        for(let i=1;i<nums.length;i++){
            dp[i]=1
            for(let j=0;j<i;j++){
                if(nums[i]>nums[j]){
                    dp[i]=Math.max(dp[i],dp[j]+1)
                }
            }
        }
        return Math.max(...dp)
    };
    return lengthOfLIS(hList)
};
const test = [[4,5],[4,6],[6,7],[2,3],[1,1]]
console.log(maxEnvelopes(test))
//也是动态规划问题