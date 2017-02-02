// Main Javascript File

var url = "api/name_list_get";

$.getJSON(url, null, function(json_result) {
    for (var i = 0; i < json_result.length; i++) {
        $("#datatable tbody").append("<tr><td>"+json_result[i].id+"</td><td>"+json_result[i].firstName+"</td><td>"+json_result[i].lastName+"</td><td>"+json_result[i].email+"</td><td>"+json_result[i].phone+"</td><td>"+json_result[i].birthday+"</td></tr>");
    }
    console.log("Done");
});