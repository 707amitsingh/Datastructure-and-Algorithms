// The function checkes whether all the first string chars appear somewhere in the second string in the same order.


const isSubsequence = (str1, str2) => {
    // const string1 = str1.toLowercase
    // const string2 = str2.toLowercase
    if(str1.length === 0) return true
    if(str1.length > str2.length) return false

    let j = 0
    let i = 0

    while(str2.length > j && i < str1.length) {
        if(str2[j] === str1[i]) {
            i += 1
        }
        if(i === str1.length) return true
        j++
    }
    return false
}

console.log(isSubsequence('Amitjjkd', 'kjdvbkjsgbkjnslgknblkdnsgbjklhdbfvhjdsbfvbdjfvblaudbvilubadlvubiarbv;aejbrvjibad;fivbiudgviusrtbkgvutrbhkusrtvbksutgiuerhigfudsbhufvbsdhbvfsuebtrgvuilsdbfvksubdfviudcvzdfvzdfAdvsdmsdsdvcisdvsdvsdtvsdvsvs singhdfvnkdjfnvkjdbfkvbdkfv dkf vkd fvjk dfkjvbdkjfvnljkdfnlvbdnlsfkbnldskfn'))