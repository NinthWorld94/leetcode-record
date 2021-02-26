/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 =new ListNode(0)
    let [p1,p2,p3]=[l1,l2,l3]
    let carry=0
    while(p1||p2){
        let v1 = p1?p1.val:0
        let v2 = p2?p2.val:0
        let v= v1 +v2+carry
        carry = Math.floor(v/10)
        p3.next=new ListNode(v%10)
        if(p1) p1=p1.next
        if(p2) p2=p2.next
        p3=p3.next
    }
    if(carry){
        p3.next=new ListNode(carry)
    }
    return l3.next
};