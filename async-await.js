const { readFile, writeFile } = require('fs').promise;

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// const getText = (path) =>{
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data)=>{
//             if (err){
//                 reject(err)
//                 return
//             }else{
//                 resolve(data)
//             }
//         })
        
        
//     })
// }



const start = async() =>{
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grande.txt',
         `This is awesome : ${first} ${second}, {flag: 'a'}`)
        console.log(first, second);    
    } catch (error) {
        consol.log(error)
    }
    
}

start()

// getText('./content/first.txt').then(result => console.log(result)).catch(err =>
//     console.log(err));