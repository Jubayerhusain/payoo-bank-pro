document.getElementById('cash-out-btn').addEventListener('click', function () {
    console.log('your cash out done')
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})