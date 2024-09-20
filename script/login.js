document.getElementById('login-btn').addEventListener('click', function (event) {
    // browsing auto refresh off 
    event.preventDefault();
    // get phone number from input with add value
    const phoneNumber = document.getElementById('phone-number').value ;
    // get pinNumber from input with add value 
    const pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber, pinNumber)
    //validationm pin Number and phone number using if else satement

    if(phoneNumber === '01305113004' && pinNumber === '1234'){
        // console.log("Your login Successful")
        window.location.assign("./home.html")
        // window.location.href("./home.html");
    }
    else(
        alert('invalid phone Number Or pin code')
    )
})