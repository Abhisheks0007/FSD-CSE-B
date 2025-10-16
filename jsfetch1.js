const f1 = async()=>{
    try{
        const res=await fetch("https://dummyjson.com/users?limit=2");
        const jsondata=await res.json();
        jsondata.users.forEach((da)=>{
            console.log("name=",da.firstName);
            console.log("email=",da.email);
            console.log("IP=",da.ip);
            console.log("Mac Address=",da.macAddress);
            console.log("");
        })
    }
    catch(err){
        console.log("Error",err.message);
    }
}
f1();