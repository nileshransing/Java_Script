const form=document.getElementById("calling");
const result=document.getElementById("result");
form.addEventListener("submit", function (event){
  event.preventDefault();
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  let sum=n1+n2;
  result.textContent = "result " + sum
});                                                                         