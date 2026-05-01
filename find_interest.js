function calculate(){
  let amount=Number(document.getElementById("am").value);
  let interest=Number(document.getElementById("in").value);
  let time=Number(document.getElementById("tm").value)
  let result=document.querySelector("h2");
  console.log(amount,interest,time);
  if(!amount){
    result.textContent="Enter Amount";
    return;
  }
  if(!interest){
    result.textContent="Enter Interest";
    return;
  }
  if(!time){
    result.textContent="Enter Time";
    return;
  }
  result.style.color="#0f9d58";
  let monthlyInterest = (amount * interest) / 100;
  console.log(monthlyInterest);
  let totalInterest = monthlyInterest * time;
  console.log(totalInterest);
  let total = amount + totalInterest;
  console.log(total);
   document.querySelector("h2").innerHTML =
  "Interest: ₹" + totalInterest.toLocaleString("en-IN") +"<br>" + " Total: ₹" + total.toLocaleString("en-IN");
}
let button=document.getElementById("btn");
button.addEventListener("click",function(){
  calculate();
}
  
)