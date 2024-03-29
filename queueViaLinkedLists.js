class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        const holdPointer = this.first
        this.first = this.first.next
        holdPointer.next = null
        this.length--
        return this
    }
}