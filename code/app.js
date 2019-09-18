var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=$" + appId + "&app_key=$" + api_key + "&from=0&to=5";

var api_key = "bd3f05a4afcbd7d5d08c20e7058187df";

var appId = "1388115a";

var searchTerm = "chicken"



console.log("1");
$(document).ready(function () {
    $.ajax({
        url: queryURL,
        method: "GET"

    
    }).then(function (response) {
        console.log(response)


    });

    
    });