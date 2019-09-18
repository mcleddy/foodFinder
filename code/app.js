// Create onclick event for search your recipe button

$("#search-btn").on("click", function(event) {
    event.preventDefault();
    console.log("I've been clicked!");
    // This should show the ingredient form with the list of ingredients
    var url = "../code/Ingredient-Form-Fruit.html";
    $(location).attr('href',url);

});

// Create click events for for each individual ingredients
    // when an ingredient is clicked from the list, add them to the list of ingredients, add all the ingredients from each form
// When next button is clicked, move on to next ingredient slide
// When previous butto is clicked, move to previous slide of ingredients
// When submit button is clicked, run ajax call that gathers up all the ingredients in the list of ingredients
// response should show up in the results page, with the recipe cards
// create click event for the recipe
    // when recipe is clicked show all the recipe's information
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
