$(document).ready(function () {
    ////////////////////////////////////////////////

    // VARIABLES //

    ////////////////////////////////////////////////

    // Array that should hold all our checklist items
    var ingredientArray = [];
    // div to put the slideshow in
    var slideDiv;
    // Creating a dynamic button
    var searchBtn = $("<button>");
    // Adding classes to button
    searchBtn.addClass("search-btn btn-dark p-3");
    // Adding text and appending search icon to button
    searchBtn.text("Search your recipe ").append($("<span class='fas fa-search'></span>"));
    // Appending button to container
    $("#search-container").append(searchBtn);

    // on click events for the search button
    $(".search-btn").on("click", function (event) {
        event.preventDefault();
        // console.log("I've been clicked!");
        // var url = "../code/Ingredient-Form-Fruit.html";
        // $(location).attr('href',url);

        // Removing button once it's been clicked on
        $("#search-container").remove();
        // Creating new div to put the slideshow in
        slideDiv = $("<div>");
        // Adding class to new div
        slideDiv.addClass("slide");
        // Showing our ingredient page within our page once the button has been clicked
        slideShowFunction();
        // Appending our new div to the slide-show div

    });

    function slideShowFunction() {
        $("#slide-show").append($("<iframe width='100%' height='500px' src='" + slideShow[slideIndex] + "' name='iframe_a'></iframe>"));
    }
    // When next button is clicked, move on to next ingredient slide
    // Create for loop that allows us to loop through each ingredient list starting at slideshow-index=0 every time we click on next
    var slideShow = ["../code/Ingredient-Form-Grains.html", "../code/Ingredient-Form-Fruit.html", "../code/Ingredient-Form-Dairy.html", "../code/Ingredient-Form-Baking-and-Spices.html", "../code/Ingredient-Form-Meat.html", "../code/Ingredient-Form-Vegetables.html"];

    var slideIndex = 0;

    $(".next").on("click", function (event) {
        event.preventDefault();
        console.log("Next!");
        if (slideIndex < 5) { 
            slideIndex++ 
        }
        else { 
            slideShow[5] 
        };
        console.log(slideShow[slideIndex]);
        $("#slide-show").append($("<iframe width='100%' height='500px' src='" + slideShow[slideIndex] + "' name='iframe_a'></iframe>"));
    });
    // When previous button is clicked, move to previous slide of ingredients
    // Go the opposite way for previous button
    $(".prev").on("click", function (event) {
        event.preventDefault();
        console.log("Previous!");
        if (slideIndex > 0) { slideIndex-- }
        else { slideShow[0] };
        console.log(slideShow[slideIndex]);
        slideShowFunction();
    });

    // Create click events for for each individual ingredients
    $(":checkbox").on("click", function () {
        console.log("I've been checked!");
        // Collect text from the checkbox item
        // var ingredientValue = $(":checkbox").val();
        console.log($(":checkbox").val());
        console.log($("input:checked").val() + " is checked!")

        $.each($("input[name='food']:checked")), function () { ingredients.push($(this).val()) }
        ingredientArray.push();

        // when an ingredient is clicked from the list, add them to the list of ingredients, add all the ingredients from each form

        // Add text from checkbox item into the ingredient array
    });

    $("#add-ingredient").on("click", function () {
        // Create for loop for each item in ingredient array to show on the ingredient list with a remove button available 
        console.log("Add me");

        // Create new div with the ingredient to be placed in the list of ingredients
        var ingredientItem = $("<p>");
        //  Text should be text from the ingredient button
        ingredientItem.text("")
        //  Create a remove button for each ingredient
        var ingredientRemove = $("<button>");
        ingredientRemove.addClass("ckeckbox");
        ingredientRemove.text("-");
        ingredientItem.prepend(ingredientRemove);

        $("#ingredient-list-result").append(ingredientItem);

    })
    /////////////////////////////////////////////////////////

    // AJAX CALL //

    /////////////////////////////////////////////////////////

    // When submit button is clicked, run ajax call that gathers up all the ingredients in the list of ingredients
    var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=$" + appId + "&app_key=$" + api_key + "&from=0&to=5";

    var api_key = "bd3f05a4afcbd7d5d08c20e7058187df";

    var appId = "1388115a";

    var searchTerm = "chicken"
    $.ajax({
        url: queryURL,
        method: "GET"

        // response should show up in the results page, with the recipe cards
    }).then(function (response) {
        console.log(response);

    });

});


// create click event for the recipe
    // when recipe is clicked show all the recipe's information
