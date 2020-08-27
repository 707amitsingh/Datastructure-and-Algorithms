class Stack {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.data = [],
        this.length = this.data.length
    }
    peek(){
        if(this.data.length === 0) return 'No items in the stack'
        return this.data[this.data.length - 1]
    }
    push(value){
        if(this.length = 0) this.bottom = value
        this.data.push(value)
        this.top = this.data[this.data.length - 1]
        this.length++
        return this.data[this.data.length - 1]
    }
    pop(){
        if(this.data.lenght === 0) return 'No items in the stack'
        if(this.data.length === 1) this.bottom = null
        this.length--
        return this.data.pop()
    }
}