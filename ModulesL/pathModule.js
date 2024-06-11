const path = require('path')

console.log(path.sep)
const filePath = path.join('Akash','Users','Modules')
console.log(filePath)

//to get the basename
const basename = path.basename(filePath)
console.log(basename)

//Resolve accepts the sequence of paths or segments for ex: __dirname
const absolute = path.resolve(__dirname,"AA","BB");
console.log(absolute)