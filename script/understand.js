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

// Use Wit.ai which is a natural language processing (NLP) platform
// - used for building applications that can understand and interpret human language
//  Goal is to train wit.ai applications to understand the intent behind user input

function getUserRecipe(userRecipeRequest) {

    console.log("started using Wit function") // TODO to comment when functions working
    
    //  $ curl \'https://api.wit.ai/message?v=20230215&q=hello' \
    //  -H "Authorization: Bearer $TOKEN"
    // Wit.ai API endpoint

    const question = encodeURIComponent(userRecipeRequest);
    const uri = 'https://api.wit.ai/message?v=20231202&q=' + question;
    const auth = 'Bearer ' + 'V3EZPKQJCUMULEEUOE3WLKPSUMO7HMSP'; // TODO hide auth before pushing to git

    fetch(uri, {headers: {Authorization: auth}})
        .then(function(response) {
            return response.json();
        })
    
    
}

// if the translation intent is detected via --> search.js
// otherwise request user to clarify/change the recipe question