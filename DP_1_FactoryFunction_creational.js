//  Factory pattarn - Type: Creational - This pattarn is used to provide Object creation methods
// This design pattern is used to create objects of various types and keep your code concise
const Dev = function(name) {
    this.name = name
    this.role = 'Developer'
}
const Tester = function(name) {
    this.name = name
    this.role = 'Tester'
}
function CreateEmployee(){
    this.create = function (name, type) {
        return type === 1 ? new Dev(name) : new Tester(name)
    }    
}
// -------------------------
const dataBase = []
const employeeCreator = new CreateEmployee()
const newEmp = employeeCreator.create('Amit', 1)
const Emp2 = employeeCreator.create('Ritu', 2)
const Emp3 = employeeCreator.create('Rahul', 1)
dataBase.push(newEmp, Emp2, Emp3)
console.log(dataBase)