$(".previous-searches").hide();

let idSearchResponse;

function recipeInfoFetch(recipeSelected) {

  // to hide recipe cards
  $("#recipeResultsList").empty();

  // show recipe id
  console.log(recipeSelected);  // TODO comment when no longer needed
  //insert id from local storage
  let queryId = recipeSelected;
  let AUTH = "apiKey=9cf7f51e45f542c98bb4360739b56ced";

  const requestUrl = "https://api.spoonacular.com/recipes/" + queryId + "/information?" + AUTH;

  
}