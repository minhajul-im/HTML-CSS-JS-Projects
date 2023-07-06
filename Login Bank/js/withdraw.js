document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawInput = document.getElementById('input-withdraw');
    const newWithdrawString = newWithdrawInput.value;
    const newWithdrawValue = Number.parseFloat(newWithdrawString);
    
    newWithdrawInput.value = '';

    if(isNaN(newWithdrawValue)){
        alert('Please Provide Number');
        return;
    }

    // step 2
    const previousWithdraw = document.getElementById('withdraw');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawValue = Number.parseFloat(previousWithdrawString);
    previousWithdraw.innerText = previousWithdrawValue;
    
    // step 3

    const previousBalance = document.getElementById('balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceValue = Number.parseFloat(previousBalanceString);
    if (newWithdrawValue > previousBalanceValue){
        alert('Sorry Your Balance Low');
        return;
    }

   const totalWithdraw = previousWithdrawValue + newWithdrawValue;
    previousWithdraw.innerText = totalWithdraw;
    
    const totalBalance = previousBalanceValue - newWithdrawValue;
    previousBalance.innerText = totalBalance;
})