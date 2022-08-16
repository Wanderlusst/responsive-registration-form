function valids(){
    var a=document.getElementById("email").value;
    var b=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
 if(b.test(a)){
      
        document.getElementById("valid").innerHTML="Valid";
        document.querySelector("#valid").style.color="green"
    }
else if(document.getElementById("email").value.length == 0)
        {
     document.querySelector("#valid").textContent="";
        }

else{
    
        document.getElementById("valid").innerHTML="Invalid";
        document.querySelector("#valid").style.color="red"
    
       
       
     
    }
    
}
