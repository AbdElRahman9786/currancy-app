
let inpt=document.getElementById("inpt");
let inpt2=document.getElementById("inpt2");
let inpt3=document.getElementById("inpt3");
let btn=document.getElementById("btn");


let globalData; // Global variable to store the fetched data

async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function initializeData() {
  globalData = await getData("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=99bddac1008649a2a26c65ad3d4f8190");

}
initializeData();

btn.addEventListener("click",()=>{
  let string= inpt.value;
     let cstring=string.toUpperCase();
     if(!isNaN(globalData[cstring] * inpt2.value)){
  inpt3.value = (globalData[cstring] * inpt2.value).toFixed(2);
     }else{
      Swal.fire({
                    icon: "error",
                     title: "Oops...",
                   text: "you type wrong data",
                });
     }
})