class SinglyLinkList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  insert(where, value){
    let currentVal = this.head.value
    let currentEle = this.head
    while(currentVal !== where){
      currentEle = currentEle.next
      currentVal = currentEle.value
    }
    const element = {
      value,
      next: currentEle.next
    }
    currentEle.next = element
    this.length++
  }
  extend(value){
    const temp = this.tail
    this.tail = {
      value,
      next: null
    }
    temp.next = this.tail
    this.length++
  }
  insertInFront(value){
    const temp = this.head
    const firstNode = { value, next: temp}
    this.head = firstNode
    this.length++
  }
  delete(value){
    let currentEle = this.head
    let previous = null
    if(currentEle.value === value) {
      this.head = currentEle.next
      this.length--
      return
    }
    while(currentEle.value !== value){
      if(!currentEle.next) return 'Cannot find the element'
      previous = currentEle
      currentEle = currentEle.next
    }
    if(currentEle.next === null && currentEle.value === this.tail.value) {
      previous.next =  null
      this.tail = previous
      this.length--
      return
    }
    previous.next = currentEle.next
    currentEle.next = null
    this.length--
  }
}
