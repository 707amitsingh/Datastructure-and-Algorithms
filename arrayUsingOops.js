class Arrays {
    constructor() {
        this.items = {
            '0' : {value: null}
        }
        this.lastElement = 0
    }

    push(value) {
        this.items = {...this.items, [this.lastElement + 1]: {value: value}}
        this.lastElement += 1
    }

    pop() {
        const popped = this.items[this.lastElement]
        delete this.items[this.lastElement]
        this.lastElement -= 1
        return popped
    }
}