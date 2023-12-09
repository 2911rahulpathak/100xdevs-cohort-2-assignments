//http://latentflip.com/loupe/?code=bGV0IGE9MDsKZm9yKGxldCBpPTA7aTwxMDtpKyspewogICAgYT1hKzE7Cn0KY29uc29sZS5sb2coYSk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

/* 
Callstack -> what is being running currently right now(on top of stack)
If you have snychronous code -> u just need to see Callstack

let a=0;
for(let i=0;i<10;i++){
    a=a+1;
}
console.log(a);

*/

/*
console.log("hi there")

function calculatesum(){
    let a=0;
for(let i=0;i<10;i++){
    a=a+1;
}
console.log(a);
}
calculateSum();

to understand how one call is on top of another in stack


#####################################################################################################
Async code:

console.log("hi there")

//async call to setTimeout
setTimeout(function(){
    console.log("from inside of async function")
},5000);

let a=0;
for(let i=0;i<10;i++){
    a=a+1;
}
console.log(a);

######################################

Kamla Didi -> Web Apis -> You have delegated the task specifically Task being (wait for 5 sec please)

Why is it called Web Apis ser?
This isn't really part of JS, it doesn't really was there-> website/web browser intro it

Once WebApi's Task is done -> It waits in the Callback Queue

After your thread become idle after executing things -> is the time when you pull back from callback queue & put it on top of stack

Event Loop -> Job is after the thread is free(It is idle) -> It checks the callback queue-> what is the latest thing I want to put back on stack



*/

/* 
console.log("hi there")

//async call to setTimeout
setTimeout(function(){
    console.log("from inside of async function")
},5000);
setTimeout(function(){
    console.log("from inside of async function")
},10000);


let a=0;
for(let i=0;i<10;i++){
    a=a+1;
}
console.log(a);


*/
