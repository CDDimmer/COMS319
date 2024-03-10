document.addEventListener("DOMContentLoaded", function (event) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((myData) => loadLocations(myData));
});

function loadLocations(myData) {
  var mainContainer = document.getElementById("ConStoreLocs");
  for (var i = 0; i < myData.ConvenienceStore.length; i++) {
    let name = myData.ConvenienceStore[i].name;
    let url = myData.ConvenienceStore[i].image;
    let desc = myData.ConvenienceStore[i].desc;
    let rating = myData.ConvenienceStore[i].Rating;
    // let url = myMovies.movies[i].url;
    let div = document.createElement("div");
    div.innerHTML = `
                                <div class="row featurette">
                                    <div class="col-md-7 order-md-2">
                                        <h2 class="featurette-heading fw-normal lh-1"
                                            style="text-align: center; margin-bottom: 2rem;">${name} - ${rating}/5
                                        </h2>
                                        <p class="lead">${desc}</p>
                                    </div>
                                    <div class="col-md-5 order-md-1">
                                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                            width="500" height="500" src="${url}">
                                    </div>
                                </div>

                                <hr class="featurette-divider">`;
    mainContainer.appendChild(div);
  }
}
