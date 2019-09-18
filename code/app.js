// Create onclick event for search your recipe button

$("#search-btn").on("click", function(event) {
    event.preventDefault();
    console.log("I've been clicked!");
    var url = "../code/Ingredient-Form-Fruit.html";
    $(location).attr('href',url);

});
// This should show the ingredient form with the list of ingredients
// Create click events for for each individual ingredients
    // when an ingredient is clicked from the list, add them to the list of ingredients, add all the ingredients from each form
// When next button is clicked, move on to next ingredient slide
// When previous butto is clicked, move to previous slide of ingredients
// When submit button is clicked, run ajax call that gathers up all the ingredients in the list of ingredients
// response should show up in the results page, with the recipe cards
// create click event for the recipe
    // when recipe is clicked show all the recipe's information