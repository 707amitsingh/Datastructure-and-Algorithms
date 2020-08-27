const large = new Array(100000).fill('Amit')

const amitFinder = (arr) => {
    console.time()
        console.log(arr[0])
    console.timeEnd()
}

amitFinder(large)