const url="https://dummyjson.com/users?limit=2";
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
})
.then((data)=>{
    data.users.forEach((da)=>{
    console.log("Name: ",da[0].firstName);
    console.log("Email: ",da[0].email);
    console.log("Ip: ",da[0].ip);
    console.log("Mac Address: ",da[0].macAddress);
    })
})
.catch((err)=>{
    console.error("Error: ",err.message);
})