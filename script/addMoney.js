document.getElementById('add-money-btn').addEventListener('click', function () {
    console.log('Your add money done')
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})