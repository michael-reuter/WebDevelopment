// Part 1
function printHello() {
    console.log("Hello.");
}

var button1 = $('#button1');
button1.on("click",printHello);


// Part 2
function addNumbers(event) {
    var number1 = parseInt($('#field1').val());
    var number2 = parseInt($('#field2').val());

    $('#field3').val(number1 + number2);
}

var button2 = $('#button2');
button2.on("click",addNumbers);


// Part 3
function toggleFunction(event) {
    $('#paragraphToHide').toggle();
}

var button3 = $('#button3');
button3.on("click",toggleFunction);


// Part 4
function validatePhone(event) {
    var phoneNumber = $('#phoneField').val();

    var regEx = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (regEx.test(phoneNumber)) {
        console.log("OK");
    } else {
        console.log("Bad");
    }
}

var button4 = $('#button4');
button4.on("click",validatePhone);


// Part 5
function jsonUserInfo(event) {
    var formData = {};

    formData.firstName = $('#firstName').val();
    formData.lastName = $('#lastName').val();
    formData.email = $('#email').val();

    var jsonString = JSON.stringify(formData);

    console.log(jsonString);
}

var button5 = $('#button5');
button5.on("click",jsonUserInfo);
