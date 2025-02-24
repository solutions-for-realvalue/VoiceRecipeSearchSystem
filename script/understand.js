// add global variable for user recipe intent
// to use the result of userRequest on search.js
let userRecipe; // intitialize global variable
let userIntent; // intitialize global variable
let userWitSearch; // intitialize global Wit variable
// getUserRecipe("Give me instructions on making lasagna");// TODO to comment when done testing

// add listeners for recipe search
$("#search-btn").click(function () {

    // read text input from user
    var searchInputValue = $('.form-control').val();

    // check if there is text to search for recipe
    if (searchInputValue.length > 0) {
        getUserRecipe(searchInputValue);
    }
});

