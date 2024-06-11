const fs = require('fs')

for(var i= 0; i < 10000; i++){
    fs.writeFileSync('../content/BigFileforStream.txt',`Hello World ${i}\n`,{flag: 'a'})
}