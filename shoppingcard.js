
let price= document.querySelectorAll(".subPrice")
let quantities=document.querySelectorAll(".quant")
let total=document.querySelector(".total")
let subTotals=document.querySelectorAll(".Subtotal")
let sum = 0
let arr = [0,0,0]


quantities.forEach((quantity, i) => {
  quantity.addEventListener('change', function(){
    if(quantity.value <= 0){
      quantity.value = 0
    }else{
      let subSum = quantity.parentElement.previousElementSibling.innerHTML.replace('$', '') * quantity.value
      arr[i] = subSum
      
      quantity.parentElement.nextElementSibling.innerHTML = '$' +subSum
      
      console.log(arr) 
    }
    sum = 0
    for(let index = 0 ; index < arr.length ; index++){
        sum = sum + arr[index]
      } 
      total.innerHTML = sum
  })
});
$(document).on('click', 'button.remove', function () {
  $(this).closest('tr').remove();
});
 



 




