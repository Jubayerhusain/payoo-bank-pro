document.getElementById("addmoney-btn").addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = document.getElementById('amount').value;
    const addAmountfloat= parseFloat(addAmount) ;
    // console.log(typeof addAmountfloat);
    // console.log(addAmountfloat);
    const pinNumber = document.getElementById('pin-number').value;
    if(pinNumber === '1234'){
        // console.log("hey Juabyer your money added done")
        const currentAmount = document.getElementById('current-balance').innerText;
        const currentAmountFloat = parseFloat(currentAmount)
        // console.log(typeof currentAmountFloat)
        // console.log(currentAmountFloat)
        const totalBalance = currentAmountFloat + addAmountfloat;
        // console.log(totalBalance)
        document.getElementById('current-balance').innerText = totalBalance;
    }
    else{
        alert('Some things wrong please try again')
    }
})
document.getElementById("cashOut-btn").addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const cashOutAmountfloat= parseFloat(cashOutAmount) ;
    // console.log(typeof cashOutAmountfloat);
    // console.log( cashOutAmountfloat);
    const pinNumberr = document.getElementById('cash-pin-number').value;
    if(pinNumberr === '1234'){
        // console.log("hey Juabyer your money added done")
        const currenttAmount = document.getElementById('current-balance').innerText;
        const currenttAmountFloat = parseFloat(currenttAmount)
        // console.log(typeof currentAmountFloat)
        // console.log(currentAmountFloat)
        const totallBalance = currenttAmountFloat - cashOutAmountfloat;
        console.log(totallBalance)
        document.getElementById('current-balance').innerText = totallBalance;
    }
    else{
        alert('Some things wrong please try again')
    }
})