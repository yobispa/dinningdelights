console.log("JS Loaded");

fetch("json/recipes.json")
.then(data => data.json())
.then(jsonData => createCard(jsonData))

const goBackBtn = document.querySelector(".go-back")
goBackBtn.addEventListener("click", goBack)
function goBack() {
    history.back()
}

// create the card with the data from the json file
function createCard(jsonData) {
    console.log(jsonData)
    const id = sessionStorage.getItem("id") // get the id from the sessionStorage
    for(let i = 0; i < jsonData.Meals.length; i++) { // loop through the json file
        const json = jsonData.Meals[i] // get the data from the json file
        if(jsonData.Meals[i].idMeal == id) { // check if the id from the json file is the same as the id from the sessionStorage
            const card = ` <div class="col-sm-4"> 
                <div class="card test-nmr">
                    <img class="card-img-top z-0 img-fluid" src="${json.strMealThumb}" alt="pasta">
                    <div class="card-body bg-warning card-border z-1">
                        <h6 class="card-title">${json.strMeal}</h6>
                        <p>
                            Categorie: ${json.strCategory} <br> Area: ${json.strArea} <br> Tags: ${json.strTags} 
                        </p>
                        <div class="row">
                            <div class="col-sm-4">Personen: 2</div>
                            <div class="col-sm-4">Calorieen: 650</div>
                            <div class="col-sm-4">tijd: 30 min</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-sm-8"><a class="btn btn-dark w-100 bg-warning display"
                                    role="button">Start Cooking</a></div>
                            <div class="col-sm-4"><i class="bi bi-suit-heart-fill"></i></div>
                        </div>
                    </div>
                </div>
            </div>`
            document.querySelector(".here").insertAdjacentHTML("beforeend", card) // insert the card into the html

            const ingredientsCard = `<div class="col-md-6 border float-start">
            <div class="card style-card">
                <div class="card-body">
                    <button class="btn1"><i class="bi bi-heart-fill"></i></button>
                    <p class="like-counter"></p>
                    <h4 class="card-title">${json.strMeal}</h4>
                    <p class="card-text">Ingriedients:</p>
                    <p>
                    <ul>
                        <li>${json.strIngredient1}: ${json.strMeasure1}</li> 
                        <li>${json.strIngredient2}: ${json.strMeasure2}</li>
                        <li>${json.strIngredient3}: ${json.strMeasure3}</li>
                        <li>${json.strIngredient4}: ${json.strMeasure4}</li>
                        <li>${json.strIngredient5}: ${json.strMeasure5}</li>
                        <li>${json.strIngredient6}: ${json.strMeasure6}</li>
                        <li>${json.strIngredient7}: ${json.strMeasure7}s</li>
                        <li>${json.strIngredient8}: ${json.strMeasure8}</li>
                        <li>${json.strIngredient9}: ${json.strMeasure9}</li>
                        <li>${json.strIngredient10}: ${json.strMeasure10}</li>
                    </ul>
                    </p>
                </div>
            </div>
            <br>
            <div class="card style-card">
                <div class="card-body h-auto">
                    <iframe src="${json.strYoutube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="responsive"></iframe>
                </div>
                <p>If video doesnt work/play. Click this link to watch <a href="${json.strYoutube}">${json.strYoutube}<a/></p>
            </div>
        </div>`
        document.querySelector(".here1").insertAdjacentHTML("afterbegin", ingredientsCard) // insert the card into the html

        const instructionsCard = `<div class="col-md-6 border float-end"> 
                <div class="card style-card">
                    <div class="card-body">
                        <h4 class="card-title">Stappenplan.</h4>
                        <p class="card-text">zorg ervoor dat je alles in huis hebt om te beginnen.</p>
                    </div>
                    <ul>
                        <li>${json.strInstructions}</li>
                        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                    </ul>
                </div>
            </div>`
        document.querySelector(".here1").insertAdjacentHTML("beforeend", instructionsCard) // insert the card into the html
        }
    }
    document.querySelector(".display").addEventListener("click", function() { // when the button is clicked
        document.querySelector(".page-2").classList.remove("display-none")   // remove the display-none class
        document.querySelector(".page-1").classList.add("display-none") // add the display-none class
    })
    let likeCount = 0; // Initial like count
    const btn = document.querySelector(".btn1"); // Get the button
    btn.addEventListener("click", incrementLikeCount); // Add event listener

    // Function to update the like count
    function updateLikeCount() {
        const likeCounter = document.querySelector(".like-counter"); // Get the like counter
        likeCounter.textContent = likeCount.toString(); // Update the like count
    }

    // Function to increment the like count
    function incrementLikeCount() {  
        likeCount++; // Increment like count
        updateLikeCount(); // Update like count
    }
}

