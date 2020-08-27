class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }
    peek(){
        if(this.length === 0) return 'No items in the stack'
        return this.top
    }
    pop(){
        if(this.length === 0) return 'No items in the stack'
        if(this.length === 1){
            this.bottom = null
        }
        const deleted = this.top
        this.top = this.top.next
        this.length--
        return deleted
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
            this.bottom = this.top
            this.length++
        }
        else{
            const tempPointer = this.top
            this.top = newNode
            this.top.next = tempPointer
            this.length++
        }
        return newNode
    }
}