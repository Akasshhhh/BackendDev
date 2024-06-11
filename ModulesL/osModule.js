const os = require('os')

//info about the user
const user = os.userInfo()
console.log(user)

//returns the system uptime in seconds
console.log(os.uptime())