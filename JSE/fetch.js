const res=fetch("https://api.github.com/users/abhaykumarnishad111");
      res.then((data)=>{
             return data.json();
      }).then((d)=>{
        console.log(d);
      }).catch((err)=>{
        console.log("Error is ", err);
      });