<<<<<<< HEAD

    var ingredients = [""];

    for (var i = 0; i < ingredients.length; i++) {
        $("<button>")
        var a = $("<button>");

        a.addClass("ingredient");

        a.attr("q");
        a.text(ingredients[i]);
    }

    $("#recipe-btn").on("click", function (event) {

        event.preventDefault();


        var ingredient = $(".form-control").val().trim();

        ingredients.push(ingredient);

        console.log(ingredients);
    })

    $("button").on("click", function () {
        var ingredient = $(this).attr("q");

        var api_key = "bd3f05a4afcbd7d5d08c20e7058187df";
        var appId = "1388115a";
        var queryURL = "https://api.edamam.com/search?q=" + ingredients + "&app_id=" + appId + "&app_key=" + api_key + "&from=0&to=5";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                var results = response.hits;

                for (var i = 0; i < results.length; i++) {
                    console.log(results);
                    var recipeDiv = $("<div>");
                    var name =( $("#recipes-go-here1").text("Recipe: " + results[1].recipe.label), $("#recipe2-go-here2").text("Recipe: " + results[0].recipe.label), $("#recipes-go-here3").text("Recipe: " + results[2].recipe.label), $("#recipes-go-here4").text("Recipe: " + results[3].recipe.label), $("#recipes-go-here5").text("Recipe: " + results[4].recipe.label))
                    console.log(results[i]);
                    var ingredientList = ($("#ingredients-go-here1").text("Ingredients: " + results[1].recipe.ingredientLines.toString([i])), $("#ingredients-go-here2").text("Ingredients: " + results[0].recipe.ingredientLines.toString([i])), $("#ingredients-go-here3").text("Ingredients: " + results[2].recipe.ingredientLines.toString([i])), $("#ingredients-go-here4").text("Ingredients: " + results[4].recipe.ingredientLines.toString([i])));
                    var recipeImage =  $("<img>");
                    recipeImage.attr("src",results[1].recipe.image);
                    $("#pic-goes-here1").append(recipeImage);
                    console.log(recipeImage);
                    console.log(results);
                    console.log(recipeDiv);
                }
            });

    });
=======
$(document).ready(function () {
    // VARIABLES //
    // Array that should hold all our checklist items

    var slideShow = ["Ingredient-Form-Grains.html", "Ingredient-Form-Fruit.html", "Ingredient-Form-Dairy.html", "Ingredient-Form-Baking-and-Spices.html", "Ingredient-Form-Meat.html", "Ingredient-Form-Vegetables.html"];

    var slideIndex = 0;


    // div to put the slideshow in

    // FUNCTIONS //
    createBtn();

    function createBtn() {
        // Creating a dynamic button
        var searchBtn = $("<button>");
        // Adding classes to button
        searchBtn.addClass("search-btn btn-dark p-3");
        // Adding text and appending search icon to button
        searchBtn.text("Search by ingredient ").append($("<span class='fas fa-search'></span>"));
        // Appending button to container
        $("#search-container").append(searchBtn);
    }

    // Adding initial buttons after clicking on search for recipe
    function createNextandPrev() {
        var prevBtn = $("<button>");
        prevBtn.addClass("prev-btn btn-dark p-3 small-btns");
        prevBtn.attr("type", "submit");
        prevBtn.attr("id", "prev");
        prevBtn.text("Previous ");
        $("#buttons").append(prevBtn);

        var addIngredientBtn = $("<button>");
        addIngredientBtn.addClass("submit-btn btn-dark p-3");
        addIngredientBtn.attr("type", "submit");
        addIngredientBtn.attr("id", "add-me");
        addIngredientBtn.text("Add ingredients ");
        $("#buttons").append(addIngredientBtn);

        var nextBtn = $("<button>");
        nextBtn.addClass("next-btn btn-dark p-3 small-btns");
        nextBtn.attr("type", "submit");
        nextBtn.attr("id", "next");
        nextBtn.text("Next ");
        $("#buttons").append(nextBtn);
    };

    // on click events for the search button
    $(".search-btn").on("click", function (event) {
        event.preventDefault();
        // console.log("I've been clicked!");
        // var url = "../code/Ingredient-Form-Fruit.html";
        // $(location).attr('href',url);

        // Removing button once it's been clicked on
        $("#search-container").remove();
        $("#search-bar").remove();
        // Creating new div to put the slideshow in
        slideDiv = $("<div>");
        // Adding class to new div
        //  slideDiv.addClass("slide");
        // Showing our ingredient page within our page once the button has been clicked
        createNextandPrev()
        slideShowFunction();


        // When next button is clicked move on to next slide

        $(".next-btn").on("click", function () {
            console.log("Next!");
            if (slideIndex < 5) {
                slideIndex++;
            }
            else {
                slideShow[5]
            };

            console.log(slideShow[slideIndex])
            $("#slide-show").empty().append($("<iframe width='100%' height='500px' src='" + slideShow[slideIndex] + "' name='iframe_a'></iframe>"));
        });
        // When previous button is clicked, move to previous slide of ingredients
        // Go the opposite way for previous button
        $(".prev-btn").on("click", function () {
            event.preventDefault();
            console.log("Previous!");
            if (slideIndex > 0) { slideIndex-- }
            else { slideShow[0] };
            console.log(slideShow[slideIndex]);
            $("#slide-show").empty().append($("<iframe width='100%' height='500px' src='" + slideShow[slideIndex] + "' name='iframe_a'></iframe>"));
        });


    });

    // Gets value of checkbox and adds into an array
    $(".grain").on("click", function () {
        const ingredientArray = [];
        $('.grain:checked').each(function () {

            var values = $(this).val();
            ingredientArray.push(values);

            console.log(ingredientArray);

            for (var i = 0; i < ingredientArray.length; i++) {
                console.log(ingredientArray[i]);
                
                var ingredientFrame = $("#ingredient-list-result");
                ingredientFrame.text("Ingredients chosen: " + ingredientArray);
               
            }

        });

    });

    // Function for the slideshow
    function slideShowFunction() {
        $("#slide-show").append($("<iframe width='1520' height='575' src='" + slideShow[slideIndex] + "' name='iframe_a'></iframe>"));
    }
    // When next button is clicked, move on to next ingredient slide
    // Create for loop that allows us to loop through each ingredient list starting at slideshow-index=0 every time we click on next

    // Create click events for for each individual ingredients


    /////////////////////////////////////////////////////////

    // AJAX CALL //

    /////////////////////////////////////////////////////////




    // Running function when recipe button is clicked after enetering items in search bar
    $("#recipe-btn").on("click", function (event) {
        event.preventDefault();
        // console.log("I've been clicked!");
        $("#search-container").remove();
        $("#search-bar").remove();
    });
});
>>>>>>> 905b3d42ba26f4b11005612fa6f1919e8f76efa8
