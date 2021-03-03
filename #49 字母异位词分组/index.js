const groupAnagrams = function(strs) {
    const map = new Map()
     strs.reduce((prev,cur)=>{
        // let curItem = cur.split('')
        let curItem = Array.from(cur)
        curItem.sort()
        let key = curItem.toString()
        let list = prev.get(key)?prev.get(key):new Array()
        list.push(cur)
        prev.set(key,list)
        return prev
    },map)
    console.log(map)
    return Array.from(map.values())
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))