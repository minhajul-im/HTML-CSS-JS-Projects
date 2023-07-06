// step 1
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step 2
    const deposit = document.getElementById('deposit-input');
    const depositValueString = deposit.value;
    const depositValue = Number.parseFloat(depositValueString);

        deposit.value = '';
        
    if(isNaN(depositValue)){
        alert('Please Give Number');
        return;
    }

    // step 3
    const previous = document.getElementById('deposit-id');
    const previousString = previous.innerText;
    const previousValue = Number.parseFloat(previousString);
    
    const totalDeposit = previousValue + depositValue;
    previous.innerText = totalDeposit;
    // step 4
    const previousBalance = document.getElementById('balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceValue = Number.parseFloat(previousBalanceString);
    const totalBalance = previousBalanceValue + depositValue;
    previousBalance.innerText = totalBalance;
})