const fs = require('fs')
const lex = require('./lexer')

/**
 * @type { string }
 */

let file = ''

if(process.argv.length > 2){
    file = process.argv[2]
} else {
    file = 'index.oyebhai'
}

if(!file.endsWith('.oyebhai')){
    file += '.oyebhai'
}

if(fs.existsSync(`./tests/${file}`)){
    const readAble = fs.readFileSync(`./tests/${file}` , 'utf-8')
    lex(readAble)
} else{
    console.log(`File not found. Make sure it is in the tests folder.`)
}