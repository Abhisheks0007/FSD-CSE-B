const url="https://dummyjson.com/users?limit=2";
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
})
.then((data)=>{
    data.users.forEach((da)=>{
    console.log("Name: ",da.firstName);
    console.log("Email: ",da.email);
    console.log("Ip: ",da.ip);
    console.log("Mac Address: ",da.macAddress);
    })
})
.catch((err)=>{
    console.error("Error: ",err.message);
})