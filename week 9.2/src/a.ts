interface User{
    firstName:string,
    lastName:string,
    age:number,
    email?: string,  //? means optional
};

// function isLegal(user:{
//     firstName:string,
//     lastName:string,
//     age:number,
// }){
// if(user.age>18){
//   return true;
// }else{
//     return false;
// }
// }
function isLegal(user:User){
if(user.age>18){
  return true;
}else{
    return false;
}
}

isLegal({
    firstName:"rahul",
    lastName:"pathak",
    age:19,
})