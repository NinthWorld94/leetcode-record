//思路很显然这是一道用栈来解决的问题，只需要遍历字符，比较栈顶元素

const removeDuplicates =function(S){
    let stack =[]
    for(let i=0;i<S.length;i++){
        stack.length&&stack[stack.length-1]===S[i]
        ?stack.pop()
        :stack.push(S[i])
    }
    return stack.join('')
}