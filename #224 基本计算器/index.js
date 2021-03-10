function sum(nums, target) {
    //
    let sumArr = [];
    let sum = 0;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        
        if(nums[i] == target||sum == target){
         count++;
            sumArr = [];
            sum = 0;
        }
        else{

        }
    }
    return count;
};