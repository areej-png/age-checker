let btn = document.getElementById("checkBtn");
btn.addEventListener("click", function(){
     let age = Number(document.getElementById("ageInput").value);
     
    if (age >= 18){
        document.getElementById("result").innerText = "Eligible";
        document.getElementById("result").className = "eligible";
        
    }
    else {
         document.getElementById("result").innerText = "Not Eligible";
           document.getElementById("result").className = "not-eligible"; 
        }
        console.log("user age:" , age);
    
})


