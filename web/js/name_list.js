// Main Javascript File

var url = "api/name_list_get";

function loadData() {
    $.getJSON(url, null, function(json_result) {
        for (var i = 0; i < json_result.length; i++) {
            $("#datatable tbody").append("<tr><td>"+json_result[i].id+"</td><td>"+json_result[i].first+"</td><td>"+json_result[i].last+"</td><td>"+json_result[i].email+"</td><td>"+json_result[i].phone.substring(0,3)+"-"+json_result[i].phone.substring(3,6)+"-"+json_result[i].phone.substring(6,10)+"</td><td>"+json_result[i].birthday+"</td><td><button type='button' name='delete' class='deleteButton btn' value='" + json_result[i].id + "'>Delete</button></td></tr>");
        }

        var deleteButtons = $(".deleteButton");
        deleteButtons.on("click", deleteItem);

        console.log("Data loaded");
    });
}

function deleteItem(e) {
    console.debug("Delete");
    console.debug(e.target.value);

    var id = e.target.value;

    var url = "api/name_list_delete";
    var myFieldValue = $("#jqueryPostJSONField").val();
    var dataToServer = { "id" : id };
    console.log("Data: ", dataToServer);
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(dataToServer),
        success: function (dataFromServer) {
            console.log(dataFromServer);

            clearData();
            console.log("Data cleared");

            loadData();
            console.log("Data reloaded");
        },
        contentType: "application/json",
        dataType: 'text'
    })
}

loadData();

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

function clearData() {
    $("#datatable td").remove();
}

var saveButton = $('#saveChanges');
saveButton.on("click", saveChanges);

function saveChanges() {
    console.log("Saving changes");

    var valid_form = true;

    var first = $('#firstName').val();
    var last = $('#lastName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var birthday = $('#birthday').val();

    var firstNameReg = /^[a-zA-Z\u0080-\u024F ']{3,20}$/i;
    var lastNameReg = /^[a-zA-Z\u0080-\u024F ']{3,20}$/i;
    var emailReg = /^([a-zA-z0-9_.-])+\@(([a-zA-z0-9_.-])+\.([a-zA-Z0-9]{2,4}))+$/;
    var phoneReg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var birthdayReg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    if (firstNameReg.test(first)) {
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
        valid_form = false;
    }

    if (lastNameReg.test(last)) {
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
        valid_form = false;
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
        valid_form = false;
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
        valid_form = false;
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
        valid_form = false;
    }

    phone = phone.replace(/-/g,"");

    if (valid_form == true) {
        console.log("Form is valid");

        var url = "api/name_list_edit";
        var myFieldValue = $("#jqueryPostJSONField").val();
        var dataToServer = { "first" : first,"last" : last,"email" : email,"phone" : phone,"birthday" : birthday };
        console.log("Data: ", dataToServer);
        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(dataToServer),
            success: function(dataFromServer) {
                console.log(dataFromServer);

                clearData();
                console.log("Data cleared");

                loadData();
                console.log("Data reloaded");
            },
            contentType: "application/json",
            dataType: 'text'
        });
        $('#myModal').modal('hide');
    }
    else {
        console.log("Form has errors")
    }
}