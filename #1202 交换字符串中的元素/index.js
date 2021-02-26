/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    let fa = new Array(s.length)
    for(let i = 0; i < fa.length; i++){
        fa[i] = i
    }
    function find(x){
        if(fa[x] == x){
            return x
        }
        let root = x    //路径压缩
        while(fa[root] != root){
            root = fa[root]
        }
        fa[x] = root
        return root
    }
    function union(x, y){
        let rx = find(x)
        let ry = find(y)
        fa[rx] = ry
    }
    for(let i = 0; i < pairs.length; i++){
        let [a1, a2] = pairs[i]
        union(a1, a2)
    }
    let roots = [], circle = []
    for(let i = 0; i < fa.length; i++){
        let root = find(i)
        let index = roots.indexOf(root)
        if(index == -1){
            roots.push(root)
            circle.push([i])
        }else{
            circle[index].push(i)
        }
    }
    s = s.split('')
    for(let i = 0; i < circle.length; i++){
        let temp = []
        for(let j = 0; j < circle[i].length; j++){
            temp.push(s[circle[i][j]])
        }
        temp.sort((a,b) => a.localeCompare(b))
        for(let j = 0; j < circle[i].length; j++){
            s[circle[i][j]] = temp[j]
        }
    }
    return s.join('')
};