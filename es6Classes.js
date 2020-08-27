const _stack = Symbol()

class Stack {
    
    constructor() {
        this[_stack] = []
    }
    push(value) {
        this[_stack].push(value)
    }

    pop() {
        if(this[_radius].length === 0) throw new Error('Cannot pop. Stack is empty')
        return this[_stack].pop()
    }

    peek() {
        return this[_stack][this[_stack].length - 1]
    }

    get stack() {
        return this[_stack]
    }
}