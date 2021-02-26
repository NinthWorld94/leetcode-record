/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(var i = 0;i<nums.length;i++){
        for(var j=nums.length-1;j>i;j--){
            if(target===nums[i]+nums[j]){
               return [i,j];
            }
        }
    }
};

