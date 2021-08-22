function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = inputField.value;
    const value = parseFloat(inputFieldValue);
    inputField.value = '';
    return value; 
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const totalValue = fieldTag.innerText;
    const valueTotal = parseFloat(totalValue);
    return valueTotal;
    
}
function updateTotal(fieldId,amount) {
    const updateTotal = document.getElementById(fieldId);
    const updateTotalInText = updateTotal.innerText;
    const previousUpdateTotalAmount = parseFloat(updateTotalInText);
    const newAmount = previousUpdateTotalAmount + amount;  
    updateTotal.innerText = newAmount;
}
function totalBalance(amount,isAdding) {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceInText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceInText);
    let newTotalBalance;
    if (isAdding == true) {
         newTotalBalance = previousTotalBalance + amount;
    }
    else {
         newTotalBalance = previousTotalBalance - amount;
    }
         totalBalance.innerText = newTotalBalance;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('total-deposit', amount);
        totalBalance(amount,true);
    }
 })
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance =   getInnerTextValue('balance-total')
    if (amount > 0 && amount<=balance)  {
        updateTotal('withdraw-total', amount); 
        totalBalance(amount,false);   
    }
 })

