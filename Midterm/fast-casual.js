fetch("./data.json")
  .then((response) => response.json())
  .then((myData) => loadLocations(myData));

function loadLocations(myData) {
  var mainContainer = document.getElementById("FastCasLocs");
  for (var i = 0; i < myData.GetGo.length; i++) {
    let name = myData.FastCasual[i].name;
    let url = myData.FastCasual[i].image;
    let desc = myData.FastCasual[i].desc;
    // let url = myMovies.movies[i].url;
    let div = document.createElement("div");
    div.innerHTML = `
                                <div class="row featurette">
                                    <div class="col-md-7 order-md-2">
                                        <h2 class="featurette-heading fw-normal lh-1"
                                            style="text-align: center; margin-bottom: 2rem;">${name}
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
