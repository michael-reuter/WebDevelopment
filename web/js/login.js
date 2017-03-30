<!-- AJAX Post -->
getLogin();

function invalidateLogin() {
    var url = "api/invalidate_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Logging out.");
        getLogin();
    });
}

function getLogin() {
    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Getting login.");
        console.log("Data from server:", dataFromServer);

        if (dataFromServer.trim() === "null") {
            console.log("Hiding logout.");
            document.getElementById("logout").style.visibility = "hidden";
            $('#getLoginResult').html("You are not logged in.");
        }
        else {
            document.getElementById("logout").style.visibility = "visible";
            $('#getLoginResult').html("You are logged in as: " + dataFromServer);
        }
    });
}

function login() {
    var url = "api/login_servlet";

    var loginId = $("#loginId").val();

    var dataToServer = {loginId : loginId};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Logging in.");
        console.log(dataFromServer);
        $("#loginId").val("");
        getLogin();
    });
}

button = $('#getLogin');
button.on("click", getLogin);

button = $('#login');
button.on("click", login);

button = $('#invalidateLogin');
button.on("click", invalidateLogin);
