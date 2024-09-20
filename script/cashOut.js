// document.getElementById('cash-out-btn').addEventListener('click', function () {
//     console.log('your cash out done')
//     document.getElementById('cash-out-form').classList.remove('hidden');
//     document.getElementById('add-money-form').classList.add('hidden');
// }) 

document.getElementById('cashOut-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashAmount = getAllInputFieldById('cash-out-amount');
        const cashPin = getAllInputFieldById('cash-pin-number');
        console.log('Your Cash out amount: ',cashAmount, 'Your Pin number: ',cashPin)

        if(cashPin === 1234){
            // console.log('your cash out successfully done')
            const currentBalance = getCurrentBalanceById('current-balance')
            const newBalance = currentBalance - cashAmount;
            console.log('Your current balance: ',newBalance)
            document.getElementById('current-balance').innerText = newBalance
            alert('your cash Out successfully done')

            // create a child Element for history include by transection container
            const p = document.createElement('p');
            p.innerText = `Cash Out${cashAmount}Tk. New balance ${newBalance}Tk.`
            console.log(p.innerText);
            document.getElementById('transaction-container').appendChild(p);
        }
        else(
            alert('somethings wrong please try again')
        )
    })