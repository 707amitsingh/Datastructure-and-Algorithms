// Singleton Pattern - Creational - When you want to limit the number of instances of an object to atmost one.

const taskManager = (function(){
    const TaskManager = function (process) {
        this.process = process
    }
    let newTaskManager = 0
    function createProcessManager(task) {
        console.log('Calling')
        newTaskManager = new TaskManager(task)
        return newTaskManager
    }
    return {
        startTaskManager: (task) => {
            if(!newTaskManager) {
                console.log('get')
                newTaskManager = createProcessManager(task)
                return newTaskManager
            }
            return newTaskManager
        }
    }
})()

const t1 = taskManager.startTaskManager('Media')
const t2 = taskManager.startTaskManager('Device')

console.log(t1 === t2, t1, t2)
