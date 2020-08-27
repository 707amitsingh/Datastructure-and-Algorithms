const directory = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
}

const vowelCounter = str => {
    let counter = 0
    const insense = str.toLowerCase()
    for(let char of insense) {
        if(directory[char]) {
            counter++
        }
    }

    console.log('Number of Vowels: ', counter)
}

vowelCounter('Amit singh choudhary')