for(var i = 0; i < 5; i++) {
    var j = i
    setTimeout(() => {
        console.log('Counter: ', j)
    }, [1000*i])
}