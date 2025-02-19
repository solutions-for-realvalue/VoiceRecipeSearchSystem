// userRecipe = "lasagna"; // TODO uncomment when want to use user recipe request from audio
let recipeSearchResponse;  // intitialize global variable for searching recipe options
// searchRecipeOptions('GetRecipe','chicken soup noodles'); // use when testing without user input

// In the function searchRecipeOptions, the first input is
// the type of recipe API call, second is the name of recipe or ingredients
// or null if looking for random recipe
function searchRecipeOptions(searchType,searchRecipe){

    // depending on user intent search recipe for type of search
    if (searchType === 'GetRecipe'){
        // for searchType GetRecipe fetch list of recipes
        console.log('Fetching GetRecipe types')
        $("#recipeResultsList").empty();
        getRecipeList(searchRecipe); // TODO enable when done working with other function calls
        
    } else if (searchType ===  'GetRecipeByIngredient') {
        // for searchType GetRecipeByIngredient fetch list of recipes
        console.log('Fetching GetRecipeByIngredient types')
        $("#recipeResultsList").empty();
        // getRecipeByIngredients(searchRecipe);  // TODO enable when done working with other function calls

    } else if (searchType === 'GetRandomRecipe') {
        // for searchType GetRandomRecipe fetch list of recipes
        console.log('Fetching GetRandomRecipe types')
        $("#recipeResultsList").empty();
        getRandomRecipe();  // TODO enable when done working with other function calls
    }
}
