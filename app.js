const $searchInput = $("#search");

//on user input/ search search API
$("#gifForm").on("submit", $("#searchButton"), async function (e) {
  e.preventDefault();

  let searchInput = $searchInput.val();

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    //rememeber the "http://" , otherwise it doesn't work
    params: {
      api_key: "QJULvdAKGC9bRoIcrEdZM6jWm2Hi2OlO",
      q: searchInput,
    },
  });

  console.log(response.data);
  appendGif(response.data);
});

//append random result to DOM
function appendGif(response) {
  //there's varying results dep. on search. Pulling random gif from data array
  let max = response.data.length;
  let randomInd = Math.floor(Math.random() * max);

  //exracting the original gifs URL, not the url from the API
  let returnURL = response.data[randomInd].images.original.url;

  let newImg = $("<img>").attr("src", returnURL);

  $("#gifDiv").append(newImg).val();
}

//clear the gifDiv
$("#removeDiv").on("click", "#removeButton", function (e) {
  e.preventDefault();
  let clearGifDiv = $("#gifDiv").empty();
});
