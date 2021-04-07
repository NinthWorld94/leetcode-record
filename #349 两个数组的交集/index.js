/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let set1 = [...new Set(nums1)]
    return set1.filter((cur)=>{
        return nums2.includes(cur)
    })
};