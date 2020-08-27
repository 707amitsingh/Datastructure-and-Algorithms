class Node {
    constructor(value){
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }
}

class Tree {
    constructor(){
        this.root = null
        this.length = 0
    }
    insert(value){
        const newNode = new Node(value)
        if(this.length === 0) {
            this.root = newNode
            this.length++
            return this
        }
        if(newNode.value > this.root.value) {
            const nextRef = this.root.rightChild
            const tempRef = null
            while(nextRef && nextRef.value){
                if(newNode.value > nextRef.value){
                    tempRef = nextRef
                    nextRef = nextRef.rightChild
                } else {
                    tempRef = nextRef
                    nextRef = nextRef.leftChild
                }
            }
            if(newNode.value > tempRef.value) tempRef.rightChild = newNode
            if(newNode.value < tempRef.value) tempRef.leftChild = newNode
            this.length++
            return this
        } else {
            const nextRef = this.root.leftChild
            const tempRef = null
            while(nextRef.value){
                if(newNode.value > nextRef.value){
                    tempRef = nextRef
                    nextRef = nextRef.rightChild
                } else {
                    tempRef = nextRef
                    nextRef = nextRef.leftChild
                }
            }
            if(newNode.value > tempRef.value) tempRef.rightChild = newNode
            if(newNode.value < tempRef.value) tempRef.leftChild = newNode
            this.length++
            return this
        }
    }
}