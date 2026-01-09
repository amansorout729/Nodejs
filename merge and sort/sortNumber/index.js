const fs=require('fs');
const path=require('path');

function getData(filename){
    return new Promise((resolve,reject)=>{
        const loc=path.join(__dirname,'data',filename);
        fs.readFile(loc,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
getData('input1.txt')
    .then((x)=>{
         getData('input2.txt').then((y)=>{
            let data1=x.split(' ');
            let data2=y.split(' ');
            let finalData=[...data1,...data2];
            finalData.sort((a,b)=>a-b);
            console.log('Sorted Merged content:',finalData.join(' '));
        
        })

    })
// const loc2=path.join(__dirname,'data','input2.txt');
// const loc=path.join(__dirname,'data','input1.txt');

// fs.readFile(loc,'utf8',(err,data)=>{
//     if(err){
//         console.error('Error reading file:',err);
//         return;
//     }
    
// });

// fs.readFile(loc2,'utf8',(err,data2)=>{
//     if(err){
//         console.error('Error reading file:',err);
//         return;
//     }
//     fs.readFile(loc,'utf8',(err,data)=>{
//         if(err){
//             console.error('Error reading file:',err);
//             return;
//         }
//         const mergedData = data + data2;
//         console.log('Merged content:',mergedData);
//     });
// });
// Merges content of input1.txt and input2.txt and prints to console
// Example content of input1.txt: "123 456 789"
// Example content of input2.txt: "101 202 303"
// Expected output: "Merged content: 123 456 789101 202 303"
