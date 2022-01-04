const fs = require('fs')
const path = './gulp/tasks'
const mas = fs.readdirSync(path).map(name => name = `${path}/${name}`)

module.exports = mas

