// Main Javascript File

var url = "api/name_list_get";

$.getJSON(url, null, function(json_result) {
    for (var i = 0; i < json_result.length; i++) {
        $("#datatable tbody").append("<tr><td>"+json_result[i].id+"</td><td>"+json_result[i].firstName+"</td><td>"+json_result[i].lastName+"</td><td>"+json_result[i].email+"</td><td>"+json_result[i].phone.substring(0,3)+"-"+json_result[i].phone.substring(3,6)+"-"+json_result[i].phone.substring(6,10)+"</td><td>"+json_result[i].birthday+"</td></tr>");
    }
    console.log("Data loaded");
});

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

function showDialogAdd() {
    console.log("Opening add item dialog");

    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#myModal').modal('show');

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-ok");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-ok");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-ok");

    $('#emailDiv').removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-ok");
}

var saveButton = $('#saveChanges');
saveButton.on("click", saveChanges);

function saveChanges() {
    console.log("Saving changes");

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var birthday = $('#birthday').val();

    var firstNameReg = /^[a-zA-Z\u0080-\u024F ']{3,20}$/i;
    var lastNameReg = /^[a-zA-Z\u0080-\u024F ']{3,20}$/i;
    var emailReg = /^([a-zA-z0-9_.+-])+\@(([a-zA-Z0-9-+\.)+([a-zA-Z0-9]{2,4}))+$/;
    var phoneReg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var birthdayReg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    if (firstNameReg.test(firstName)) {
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");
        $('#firstNameStatus').val("(success)");
    }
    else {
        $('#firstNameDiv').addClass("has-error");
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameGlyph').addClass("glyphicon-remove");
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameStatus').val("(error)");
    }

    if (lastNameReg.test(lastName)) {
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");
        $('#lastNameStatus').val("(success)");
    }
    else {
        $('#lastNameDiv').addClass("has-error");
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameGlyph').addClass("glyphicon-remove");
        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameStatus').val("(error)");
    }

    if (emailReg.test(email)) {
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");
        $('#emailStatus').val("(success)");
    }
    else {
        $('#emailDiv').addClass("has-error");
        $('#emailDiv').removeClass("has-success");
        $('#emailGlyph').addClass("glyphicon-remove");
        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailStatus').val("(error)");
    }

    if (phoneReg.test(phone)) {
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");
        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");
        $('#phoneStatus').val("(success)");
    }
    else {
        $('#phoneDiv').addClass("has-error");
        $('#phoneDiv').removeClass("has-success");
        $('#phoneGlyph').addClass("glyphicon-remove");
        $('#phoneGlyph').removeClass("glyphicon-ok");
        $('#phoneStatus').val("(error)");
    }

    if (birthdayReg.test(birthday)) {
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");
        $('#birthdayStatus').val("(success)");
    }
    else {
        $('#birthdayDiv').addClass("has-error");
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayGlyph').addClass("glyphicon-remove");
        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayStatus').val("(error)");
    }
}