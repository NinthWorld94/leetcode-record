/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var maxFlyLength=0;
    for(var i= 0;i<nums.length;i++){
       if(i>maxFlyLength){
           return false;
       }
       else{
           if(i+nums[i]>maxFlyLength){
               maxFlyLength=i+nums[i];
           }
       }
    }
    return true;
};