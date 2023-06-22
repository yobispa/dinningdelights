console.log("JS Loaded")

const access = localStorage.getItem("accessgranted")
const username = localStorage.getItem("name")

const mainCard = document.querySelector(".main-cards");
const smallCard = document.querySelector(".small-cards");
const smallCardRecommended = document.querySelector(".small-card-recommended");
const greetElement = document.querySelector(".greet");
const date = new Date(); 
console.log(date.getHours());

if(date.getHours() >= 5 && date.getHours() < 12) {
    greetElement.textContent = `morning !`
}

if(date.getHours() >= 12 && date.getHours() < 18) {
    greetElement.textContent = `afternoon !`
}

if(date.getHours() >= 18 && date.getHours() <= 24) {
    greetElement.textContent = `evening !`
}

if(date.getHours() >= 0 && date.getHours() < 5) {
    greetElement.textContent = `evening !`
}

if(access == 'true'){ // if access is true, then show the user's name
    fetch("json/recipes.json") // fetch the json file
    .then(myData => myData.json()) // convert the data to json
    .then(jsonData => createCard(jsonData)) // call the createCard function
    document.querySelector(".user").textContent = `${username}`// show the user's name
} else {
    alert("You are not logged in. Please log in to see more information") // if access is false, then alert the user
}


function createCard(jsonData) {// create the cards
    console.log(jsonData)
    for (let i = 0; i < 4; i++) {// create the main card
        if(i == 0) {// if i = 0, then create the first card
            const card = `<div class="col-md-3 col-12 get-id">
            <div class="card-container float-end float-md-none">
                <div class="card">
                    <div class="img-content">
                        <img src="${jsonData.Meals[i].strMealThumb}" alt="Image" class="h-100">
                    </div>
                    <div class="content">
                        <p class="heading">${jsonData.Meals[i].strMeal}</p>
                    <p>
                    ${jsonData.Meals[i].strTags} <br> 30 Mins&nbsp; |&nbsp; 3 serving
                    </p>
                    </div>
                </div>
                <br>
                    <h4 class="text-center responsive-text">${jsonData.Meals[i].strMeal}</h4>
                </div>
            </div>`
            mainCard.insertAdjacentHTML("beforeend", card)
        }
        if(i == 1) { // if i = 1, then create the second card
            const card = `<div class="col-md-3 col-12 d-none d-md-block get-id">
            <div class="card-container">
                <div class="card">
                    <div class="img-content">
                        <img src="${jsonData.Meals[i].strMealThumb}" alt="Image" class="h-100">
                    </div>
                    <div class="content">
                        <p class="heading">${jsonData.Meals[i].strMeal}</p> 
                    <p>
                    ${jsonData.Meals[i].strTags} <br> 30 Mins&nbsp; |&nbsp; 3 serving
                    </p>
                    </div>
                </div>
                <br>
                    <h4 class="text-center">${jsonData.Meals[i].strMeal}</h4>
                </div>
            </div>`
            mainCard.insertAdjacentHTML("beforeend", card) // insert the card before the end of the mainCard
        }
        if(i == 2 || i == 3) {
            const card = `<div class="col-md-3 col-12 d-none d-md-block get-id">
            <div class="card-container float-end">
                <div class="card">
                    <div class="img-content">
                        <img src="${jsonData.Meals[i].strMealThumb}" alt="Image" class="h-100">
                    </div>
                    <div class="content">
                        <p class="heading">${jsonData.Meals[i].strMeal}</p>
                    <p>
                    ${jsonData.Meals[i].strTags} <br> 30 Mins&nbsp; |&nbsp; 3 serving
                    </p>
                    </div>
                </div>
                <br>
                    <h4 class="text-center">${jsonData.Meals[i].strMeal}</h4>
                </div>
            </div>`
            mainCard.insertAdjacentHTML("beforeend", card) // insert the card before the end of the mainCard
        }
    }
    const getId = document.querySelectorAll(".get-id") // get all the get-id class
   
    for(let i = 0; i < getId.length; i++) {// loop through the get-id class
        getId[i].addEventListener("click", function() {// add an event listener to the get-id class
            const id = jsonData.Meals[i].idMeal// get the idMeal from the json file
            sessionStorage.setItem("id", id)// set the id to the sessionStorage
            location.href = "vlees.html" // go to the vlees.html page
        })
    }
    for (let i = 0; i < 6; i++) { // create the small card
        const card = ` <div class="col-md-2 get-id-small">
            <div class="card-container-small custom-${i}">
            <div class="card">
                <div class="img-content">
                <img src="${jsonData.Categories[i].strCategoryThumb}" alt="" class="h-100">
                </div>
                <div class="content content-small">
                <p class="heading heading-small">${jsonData.Categories[i].strCategory}</p>
                <p>
                    Side food <br> 30 Mins&nbsp; |&nbsp; 3 serving
                </p>
                </div>
            </div>
            <br>
            <h5 class="text-center responsive-text">${jsonData.Categories[i].strCategory}</h5>
            </div>
        </div>`
        smallCard.insertAdjacentHTML("beforeend", card) // insert the card before the end of the smallCard
    }
    const getIdSmall = document.querySelectorAll(".get-id-small") // get all the get-id-small class
    for(let i = 0; i < getIdSmall.length; i++) { // loop through the get-id-small class
        getIdSmall[i].addEventListener("click", function() { // add an event listener to the get-id-small class
            const categorie = jsonData.Categories[i].strCategory // get the strCategory from the json file
            console.log(categorie);// log the categorie
            sessionStorage.setItem("categorie", categorie)// set the categorie to the sessionStorage
            location.href = "html/fish.html"// go to the fish.html page
        })
    }
    // create the small recommended card
    for (let i = 4; i < jsonData.Meals.length; i++) {
        const card = `<br><br><div class="col-md-2 col-4 get-id-small-recommended">
            <div class="card-container-small">
            <div class="card">
                <div class="img-content">
                <img src="${jsonData.Meals[i].strMealThumb}" alt="" class="h-100">
                </div>
                <div class="content content-small">
                <input type="text" value="${jsonData.Meals[i].idMeal}" class="input-small-value" hidden>
                <p class="heading heading-small">${jsonData.Meals[i].strMeal}</p>
                <p>
                    Side food <br> 30 Mins&nbsp; |&nbsp; 3 serving
                </p>
                </div>
            </div>
            <br>
            <h5 class="text-center">${jsonData.Meals[i].strMeal}</h5>
            </div>
        </div><br><br><br><br><br><br><br>`
        smallCardRecommended.insertAdjacentHTML("beforeend", card) // insert the card before the end of the smallCardRecommended
    }
    const getIdSmallRecommended = document.querySelectorAll(".get-id-small-recommended") // get all the get-id-small-recommended class
    const inputValue = document.querySelectorAll(".input-small-value") // get all the input-small-value class
    for(let i = 0; i < getIdSmallRecommended.length; i++) { // loop through the get-id-small-recommended class
        getIdSmallRecommended[i].addEventListener("click", function() { // add an event listener to the get-id-small-recommended class
            const id = inputValue[i].value // get the value from the input-small-value class
            sessionStorage.setItem("id", id) // set the id to the sessionStorage
            console.log(id) // log the id
            location.href = "vlees.html" // go to the vlees.html page
        })
    }
}




