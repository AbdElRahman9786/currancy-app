
let inpt=document.getElementById("inpt");
let inpt2=document.getElementById("inpt2");
let inpt3=document.getElementById("inpt3");
let btn=document.getElementById("btn");


 fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=99bddac1008649a2a26c65ad3d4f8190"
)
  .then( (res) => {
return  res.json();
  }).then(async (data) => {
    inpt.addEventListener("input", async (event) => {
      let string= event.target.value;
      let cstring=string.toUpperCase();
  await inpt2.addEventListener("input", (event) =>{ 
    btn.addEventListener("click",()=>{
      if(!isNaN(data.rates[cstring] * event.target.value)){
       inpt3.value= (data.rates[cstring] * event.target.value).toFixed(2)
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "you type wrong data",
          
        });
      }
      })
    
  
  })
   
     })
     
  })

  


 