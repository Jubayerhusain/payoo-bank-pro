// console.log('utilitis file setup done')

// function getInputField1() {
//     const number = 5+10;
//     return number;
// }

function getAllInputFieldById(id) {
    const getInputValue = document.getElementById(id).value;
    const getInputNumber = parseFloat(getInputValue);
    return getInputNumber;
}

function getCurrentBalanceById(id) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNUmber = parseFloat(currentBalance);
    return currentBalanceNUmber;
}

function clickBtnToFormId(id) {
    // get the all Id name And added the new List hidden
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-section').classList.add('hidden');

    // show the form and remove the hidden from class 
    document.getElementById(id).classList.remove('hidden');
}
