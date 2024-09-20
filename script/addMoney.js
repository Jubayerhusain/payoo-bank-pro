document.getElementById('addmoney-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const AddMoneyValue = getAllInputFieldById('add-amount')
        const PinNumberValue = getAllInputFieldById('pin-number')
        console.log('Your input Amount: ', AddMoneyValue, 'Your pin number: ', PinNumberValue);

        if(PinNumberValue === 1234){
            const currentBalance = getCurrentBalanceById('current-balance')
            console.log('Your current amount: ', currentBalance)
            const newBalance = currentBalance + AddMoneyValue;
            console.log("Your Current balance: ",newBalance)
            document.getElementById('current-balance').innerText = newBalance;

            // create a child Element for history include by transection container
            const p = document.createElement('p');
            p.innerText = `Add Money ${AddMoneyValue}Tk. New balance ${newBalance}Tk.`
            console.log(p.innerText);
            document.getElementById('transaction-container').appendChild(p);
        }
        else{
            alert('Somethings Wrong plaese Try again')
        }
    })