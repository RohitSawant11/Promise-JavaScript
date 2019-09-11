//Set_timeout_promise

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
