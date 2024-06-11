const {createReadStream} = require('fs')

const stream = createReadStream('../content/BigFileforStream.txt')

console.log(stream.data)

//Event
stream.on('data',(result)=>{
    console.log(result)
})