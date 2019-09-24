
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
