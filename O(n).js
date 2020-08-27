const large = new Array(100000).fill('Amit')

const amitFinder = (arr) => {
    console.time()
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'Amit') console.log('Amit found')
    }
    console.timeEnd()
}

amitFinder(large)