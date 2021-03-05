class MyQueue {
    constructor() {
        this.instack = []
        this.outstack = []
    }
    push(x) {
        this.instack.push(x)
    }
    Stackloop() {
        if (!this.outstack.length) {
            while (this.instack.length) {
                this.outstack.push(this.instack.pop())
            }
        }
    }
    pop() {
        this.Stackloop()
        return this.outstack.pop()
    }
    peek() {
        this.Stackloop()
        return this.outstack[this.outstack.length - 1]
    }
    empty() {
        return !this.instack.length && !this.outstack.length
    }
}