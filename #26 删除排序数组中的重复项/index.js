/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    for(var temp=nums.length;temp>1;temp--){
        if(nums[temp-1]==nums[temp-2]){
            nums.splice(temp-1,1);
        }
    }
};