// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */

  const newDepositAmount =getInputFieldValueById('deposit-field')
  console.log(newDepositAmount)
  // console.log(newDepositAmount);
  /* 
    1. get previous deposit total by id

    */
   function blank(){
    
   }
  const previousDepositTotal =getTextElementValueById('deposit-total') 
  console.log(previousDepositTotal)
  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  if(isNaN(newDepositTotal)){
    alert('please enter a number')
  }
  else{
 // set deposit total value
 setTextElementValueById("deposit-total", newDepositTotal);
  }
  // get previous balance by using the function
  const previousBalanceTotal =getTextElementValueById('balance-total')
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  if(isNaN(newBalanceTotal)){
  }
  else{
    setTextElementValueById("balance-total", newBalanceTotal);
  }
});
