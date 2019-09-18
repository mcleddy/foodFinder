$(document).ready(function(){
    // Creating a dynamic button
    var searchBtn = $("<button>");
    // Adding classes to button
    searchBtn.addClass("search-btn btn-dark p-3");
    // Adding text and appending search icon to button
    searchBtn.text("Search your recipe ").append($("<span class='fas fa-search'></span>"));
    // Appending button to container
    $("#search-container").append(searchBtn);
    
    // on click events for the search button
    $(".search-btn").on("click", function(event) {
    event.preventDefault();
    // console.log("I've been clicked!");
    // var url = "../code/Ingredient-Form-Fruit.html";
    // $(location).attr('href',url);

    // Removing button once it's been clicked on
    $("#search-container").remove();
    // Creating new div to put the slideshow in
    var slideDiv = $("<div>");
    // Adding class to new div
    slideDiv.addClass("slide");
     // Showing our ingredient page within our page once the button has been clicked
    slideDiv.append($("<iframe height='100%' width='100%' src='../code/Ingredient-Form-Fruit.html' name='iframe_a'></iframe>"));
    // Appending our new div to the slide-show div
    $("#slide-show").append(slideDiv);

});
// When next button is clicked, move on to next ingredient slide
// Create for loop that allos us to loop through each ingredient list starting at slideshow-index=0 every time we click on next

$(".next").on("click", function(event) {
    event.preventDefault();
    console.log("I've been clicked!");

});
// When previous butto is clicked, move to previous slide of ingredients
// Go the opposite way for previous button
$(".prev").on("click", function(event) {
    event.preventDefault();
    console.log("I've been clicked!");

}); 



});

// Create click events for for each individual ingredients
    // when an ingredient is clicked from the list, add them to the list of ingredients, add all the ingredients from each form

// When submit button is clicked, run ajax call that gathers up all the ingredients in the list of ingredients
var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=$" + appId + "&app_key=$" + api_key + "&from=0&to=5";

var api_key = "bd3f05a4afcbd7d5d08c20e7058187df";

var appId = "1388115a";

var searchTerm = "chicken"



console.log("1");
$(document).ready(function () {
    $.ajax({
        url: queryURL,
        method: "GET"

    // response should show up in the results page, with the recipe cards
    }).then(function (response) {
        console.log(response)


    });

    
    });


// create click event for the recipe
    // when recipe is clicked show all the recipe's information
