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

  fetchData(requestUrl).then(data => {
    
    // once fetch responds with data then run this code:
    idSearchResponse = data;
    console.log(data) // TODO comment when no longer needed

    // The recipe Summary has some links and details that needs to be left out of the text

    
  });
}

// here we pass the url we want to call from API and await until fetch responds
async function fetchData(requestUrl) {
  const fetcher = await fetch(requestUrl);
  const data = await fetcher.json();
  return data;
}