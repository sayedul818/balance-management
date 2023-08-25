
document.getElementById("calculate-btn").addEventListener("click",function(){
   const foodInputFieldValue=getInputFieldValueID("food-input-field");
   const rentInputFieldValue=getInputFieldValueID("rent-input-field");
   const clothesInputFieldValue=getInputFieldValueID("clothes-input-field");
   const totalInputFieldValue=(foodInputFieldValue+rentInputFieldValue+clothesInputFieldValue);
   if(isNaN (totalInputFieldValue)){
    alert("please provide valid number inpute data");
    return;
   }
   const incomeInputField=document.getElementById("income-input-field");
   const incomeInputFieldValue=parseFloat(incomeInputField.value);
   const totalBalanceValue=incomeInputFieldValue-totalInputFieldValue;
   if(isNaN(incomeInputField.value)){
    alert("please provide valid number inpute data");
    return;
   }else if( incomeInputFieldValue<totalInputFieldValue){
    alert("tor eto income nai beta");
    return;
   }
   const totalExpense=document.getElementById("total-expense");
   totalExpense.innerText=totalInputFieldValue;
   const balanceValueId=document.getElementById("balnce-display");
   balanceValueId.innerText=totalBalanceValue;

})

document.getElementById("save-btn").addEventListener("click",function(){
   const incomeInputFieldValue=getInputFieldValueID("income-input-field");
   const balanceValueId=document.getElementById("balnce-display");
   const balanceValue=parseFloat(balanceValueId.innerText);
   const saveInputFieldValue=getInputFieldValueID("save-input-field");
   const savingAmount = incomeInputFieldValue *(saveInputFieldValue/100);
   if(savingAmount>balanceValue){
    alert("tor account e eto taka nai j toi eto taka save korvi");
    return;
   }else if(saveInputFieldValue<=0){
    alert("please provide a valid number");
    return;
   }
   const savingAmountField=document.getElementById("saving-amount-field");
   savingAmountField.innerText=savingAmount;

   const remainingBalanceTotal=balanceValue-savingAmount;
   const remainingBalanceField=document.getElementById("remaining-Balance-field");
   remainingBalanceField.innerText=remainingBalanceTotal;
   
})