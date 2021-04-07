/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var maxNonOverlapping = function(nums, target) {
    let s = new Set([0]);
    let sum = 0, res = 0;
    for(let n of nums) {
        sum += n;
        if(s.has(sum - target)) {
            res ++;
            s.clear();
        }
        s.add(sum);
    }
    return res;
};