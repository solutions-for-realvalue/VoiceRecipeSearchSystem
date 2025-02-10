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

    // Remove <a> tags from the summary
    let summaryWithoutLinks = idSearchResponse.summary.replace(/<a\b[^>]*>(.*?)<\/a>/g, ''); // Regex to replace it

    // Define the stopping point text
    var stoppingPointText1 = 'If you like this recipe';
    var stoppingPointIndex1 = summaryWithoutLinks.indexOf(stoppingPointText1); // location of the text from where it needs to be removed
    // manipulated recipe Summary
    var textBeforeStoppingPoint = stoppingPointIndex1 !== -1 ? summaryWithoutLinks.substring(0, stoppingPointIndex1) : summaryWithoutLinks;
    
    summaryWithoutLinks = textBeforeStoppingPoint; // do it again for last modified text
    var stoppingPointText2 = 'Similar recipes';
    var stoppingPointIndex2 = summaryWithoutLinks.indexOf(stoppingPointText2); // location of the text from where it needs to be removed
    // manipulated recipe Summary
    var textBeforeStoppingPoint = stoppingPointIndex2 !== -1 ? summaryWithoutLinks.substring(0, stoppingPointIndex2) : summaryWithoutLinks;

    // console.log(textBeforeStoppingPoint) // TODO comment when confirm that gets correct summary



  });
}

// here we pass the url we want to call from API and await until fetch responds
async function fetchData(requestUrl) {
  const fetcher = await fetch(requestUrl);
  const data = await fetcher.json();
  return data;
}