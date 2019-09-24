var ingredients =["chicken", "milk"];

for (var i=0; i<ingredients.length; i++) {
    $("<button>")
    var a = $("<button>");

    a.addClass("ingredient");

    a.attr("q");
    a.text(ingredients[i]);
}

$("#recipe-btn").on("click",function (event){

    event.preventDefault();


    var ingredient=$("#button-addon2").val().trim();

    ingredients.push(ingredient);

    console.log(ingredients);
})

$("button").on("click", function(){
    var ingredient = $(this).attr("q");

    var queryURL = "https://api.edamam.com/search?q=" +ingredients+ "&app_id=" + appId + "&app_key=" + api_key + "&from=0&to=5";
        console.log(queryURL);
    
    $.ajax
})