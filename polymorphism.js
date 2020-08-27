const HTMLElement = function() {
    this.click = function() {
        console.log('Click!')
    }
}

HTMLElement.prototype.focus = function() {
    console.log('Focus >')
}

const HTMLSelectElement = function(arr = []) {
    HTMLElement.call(this)
    let items = [...arr]
    this.addItem = function(item) {
        items.push(item)
    }
    this.removeItem = function(item) {
        const index = items.findIndex(el => el === item)
        items.splice(index, 1)
    }
    this.render = function(){
        let output = '<select>\n'
        items.forEach(el => {
            output += `<option>${el}</option>\n`
        })
        return output += '</select>'
        
    }
    Object.defineProperty(this, 'items', {
        get: function() {
            return items
        }
    })
}


HTMLSelectElement.prototype = Object.create(HTMLElement.prototype)
HTMLSelectElement.prototype.constructor = HTMLSelectElement


const HtmlImageElement = function(src) {
    this.src = src
    this.render = () => `<img src=${this.src}/>`
}

HtmlImageElement.prototype = new HTMLElement()
HtmlImageElement.prototype.constructor = HtmlImageElement
