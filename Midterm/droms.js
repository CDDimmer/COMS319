document.addEventListener("DOMContentLoaded", function (event) {
    fetch("./data.json")
        .then((response) => response.json())
        .then((myData) => loadLocations(myData));
});

function loadLocations(myData) {
    var mainContainer = document.getElementById("DormLocs");
    for (var i = 0; i < myData.DormHalls.length; i++) {
        let name = myData.DormHalls[i].name;
        let url = myData.DormHalls[i].image;
        let desc = myData.DormHalls[i].desc;
        let rating = myData.DormHalls[i].Rating;
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