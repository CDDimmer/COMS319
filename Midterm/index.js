document.addEventListener("DOMContentLoaded", function (event) {
        fetch("./data.json")
                .then((response) => response.json())
                .then((myData) => loadLocations(myData));
});

function loadLocations(myData) {
        var mainContainer = document.getElementById("cardHolder");

        var cat1 = myData.DormHalls;
        var cat2 = myData.Cafes;
        var cat3 = myData.ConvenienceStore;
        var cat4 = myData.DiningCenter;
        var cat5 = myData.FastCasual;
        var cat6 = myData.GetGo;

        for (var i = 0; i < cat1.length; i++) {
                let name = cat1[i].name;
                let url = cat1[i].image;
                let ac = cat1[i].hasAC;
                let location = cat1[i].location;
                let coed = cat1[i].coedHousing;
                let floors = cat1[i].floors;
                let rating = cat1[i].Rating;
                let div = document.createElement("div");
                div.innerHTML = `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <title>Placeholder</title>
                                        <image href="${url}" height="225" width="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text"><strong>${name}</strong></p>
                                        <p class="card-text">AC: ${ac}</p>
                                        <p class="card-text">CoEd: ${coed}</p>
                                        <p class="card-text">Floors: ${floors}</p>
                                        <p class="card-text">Location: ${location}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">See
                                                    Reviews</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Post
                                                    Review</button>
                                            </div>
                                            <small class="text-body-secondary">${rating}/5
                                                rating</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                mainContainer.appendChild(div);
        }

        for (var i = 0; i < cat2.length; i++) {
                let name = cat2[i].name;
                let url = cat2[i].image;
                let desc = cat2[i].desc;
                let rating = cat2[i].Rating;
                let div = document.createElement("div");
                div.innerHTML = `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <title>Placeholder</title>
                                        <image href="${url}" height="225" width="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text"><strong>${name}</strong></p>
                                        <p class="card-text">${desc}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">See
                                                    Reviews</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Post
                                                    Review</button>
                                            </div>
                                            <small class="text-body-secondary">${rating}/5
                                                rating</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                mainContainer.appendChild(div);
        }

        for (var i = 0; i < cat3.length; i++) {
                let name = cat3[i].name;
                let url = cat3[i].image;
                let desc = cat3[i].desc;
                let rating = cat3[i].Rating;
                let div = document.createElement("div");
                div.innerHTML = `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <title>Placeholder</title>
                                        <image href="${url}" height="225" width="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text"><strong>${name}</strong></p>
                                        <p class="card-text">${desc}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">See
                                                    Reviews</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Post
                                                    Review</button>
                                            </div>
                                            <small class="text-body-secondary">${rating}/5
                                                rating</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                mainContainer.appendChild(div);
        }

        for (var i = 0; i < cat4.length; i++) {
                let name = cat4[i].name;
                let url = cat4[i].image;
                let desc = cat4[i].desc;
                let rating = cat4[i].Rating;
                let div = document.createElement("div");
                div.innerHTML = `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <title>Placeholder</title>
                                        <image href="${url}" height="225" width="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text"><strong>${name}</strong></p>
                                        <p class="card-text">${desc}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">See
                                                    Reviews</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Post
                                                    Review</button>
                                            </div>
                                            <small class="text-body-secondary">${rating}/5
                                                rating</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                mainContainer.appendChild(div);
        }

        for (var i = 0; i < cat5.length; i++) {
                let name = cat5[i].name;
                let url = cat5[i].image;
                let desc = cat5[i].desc;
                let rating = cat5[i].Rating;
                let div = document.createElement("div");
                div.innerHTML = `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <title>Placeholder</title>
                                        <image href="${url}" height="225" width="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text"><strong>${name}</strong></p>
                                        <p class="card-text">${desc}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">See
                                                    Reviews</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Post
                                                    Review</button>
                                            </div>
                                            <small class="text-body-secondary">${rating}/5
                                                rating</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                mainContainer.appendChild(div);
        }

        for (var i = 0; i < cat6.length; i++) {
                let name = cat6[i].name;
                let url = cat6[i].image;
                let desc = cat6[i].desc;
                let rating = cat6[i].Rating;
                let div = document.createElement("div");
                div.innerHTML = `
                            <div class="col">
                                <div class="card shadow-sm">
                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <title>Placeholder</title>
                                        <image href="${url}" height="225" width="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text"><strong>${name}</strong></p>
                                        <p class="card-text">${desc}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">See
                                                    Reviews</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Post
                                                    Review</button>
                                            </div>
                                            <small class="text-body-secondary">${rating}/5
                                                rating</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    `;
                mainContainer.appendChild(div);
        }
}
