// Modules - Encapsulated Code [only share the minimum]
// CommonJS - Every file is module by default

const names = require('./4-names')
const sayHi = require('./5-utils')

// console.log(names);

require('./7-mind-grenade.js')

sayHi(`tubamoni`) 
sayHi(names.john) 
sayHi(names.peter) 

const data = require('./6-alternative-flavor')
console.log(data)