const { readFile, writeFile } = require('fs')

//It uses a callback function
readFile('../content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    const first = res
    readFile('../content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        const second = res
        writeFile('../content/async-write.txt', `async write is working hell yeaahhhhhhhhhhh ${first} and ${second}` , (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})