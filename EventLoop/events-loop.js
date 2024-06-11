const {readFile, writeFile} = require('fs')

console.log("Starting the process")

readFile('../content/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Inside read file")
    console.log(res)
    const ans = res
    writeFile('../content/eventLoop.txt',ans,{flag: 'a'},(err,res)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("Inside write file")
    })
})
console.log("The end of task")