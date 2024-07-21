const {createReadStream} = require('fs')

const stream = createReadStream('../content/BigFileforStream.txt', {highWaterMark: 90000, encoding: 'utf-8'})

console.log(stream.data)

//Event
stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{
    console.log(err)
})