const vowelCounter = str => {
    // g -> to not stop on first match
    // i -> case insensitive
    // str.match -> returns an array if matchs or returns null

    const match = str.match(/[aeiou]/gi)
    const number = match ? match.length : 0
    console.log('Number of Vowels: ', number)
}

vowelCounter('Aamit singh choudhary')