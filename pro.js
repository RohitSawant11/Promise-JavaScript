

// function sleep(time) {
//     return new Promise(resolve => {
//         setTimeout(resolve, time)
//     })
// }

// var timeA = 5000;
// var timeB = 5000;
// var timeC = 500;

// sleep(timeA).then(() => {
//     console.log('700')
//     return sleep(timeB);
// }).then(() => {
//     console.log('800')
//     return sleep(timeC)
// }).then(() => {
//     console.log('c')
// })




// 'use strict'
// function A(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve(700);
//         },5000);
//     }); 
// }
// A().then(function(value){console.log(value)}).B().then(function(value){console.log(value)});
// function B(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve(800);
//         },6000);
//     }); 
// }
// B().then(function(value){console.log(value)});
// function C(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve(900);
//         },5000);
//     }); 
// }
// C().then(function(value){console.log(value)});
// function D(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve(1000);
//         },6000);
//     }); 
// }
// D().then(function(value){console.log(value)});
// A().then(
//     (result)=>{
//         console.log(result)
//     D().then(
//         (result)=>{
//             console.log(result)
//             A().then((result)=>{
//                 console.log(result)
//                 B().then((result)=>{
//                     console.log(result)
//                     C().then((result)=>{
//                         console.log(result)
//                         A().then((result)=>{
//                             console.log(result)
                            
//                         })
//                     })
//                 })
//             })
//         })
    
// })



'use strict'
function A(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(700);
        },5000);
    }); 
}
function B(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(800);
        },6000);
    }); 
}
function C(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(900);
        },5000);
    }); 
}
function D(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve(1000);
        },6000);
    }); 
}
A().then(function(value){
    console.log(value)
    return D()
})
.then(function(value) {
    console.log(value);
    return A()
})
.then(function(value) {
    console.log(value);
    return B()
})
.then(function(value) {
    console.log(value);
    return C()
})
.then(function(value) {
    console.log(value);
    return A()
})
.then(function(value) {
    console.log(value);
});