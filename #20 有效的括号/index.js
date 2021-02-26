/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(var i=0;i<s.length;i++){
        var top=stack[stack.length-1];
        if(s.length%2===1){
            return false;
        }
        else{
            if(s[i]==='('||s[i]==='['||s[i]==='{'){
                stack.push(s[i]);
            }
            else if(s[i]===')'&&top==='('||s[i]===']'&&top==='['||s[i]==='}'&&top==='{'){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }
    return stack.length===0;
};