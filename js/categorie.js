console.log("JS Loaded");
fetch("/json/recipes.json") // fetch the json file
.then(data => data.json()) // convert the data to json
.then(jsonData => createCard(jsonData)) // call the createCard function

function createCard(jsonData) { // create the cards
    console.log(jsonData) // log the json data
    const categorie = sessionStorage.getItem("categorie") // get the categorie from the sessionStorage
    document.querySelector(".h1vis").textContent = categorie // show the categorie in the h1
    for(let i = 0; i < jsonData.Meals.length; i++) { // loop through the jsonData
        const json = jsonData.Meals[i] // create a variable for the jsonData
        if(categorie == json.strCategory) {// if the categorie is the same as the json categorie, then create the card
            const card = `<div class="col-md-4">
            <div class="card">
              <img class="card-img-top" src="${json.strMealThumb}"
                alt="Title" />
              <div class="card-body">
                <h4 class="card-title text-ceter">
                  ${json.strMeal}
                </h4>
                <p class="card-text text-center">Culture: ${json.strArea} <br> Tags: ${json.strTags}</p>
                <input class="id-value" value="${json.idMeal}" type="text" hidden>
              </div>
              <button class="btn btn-warning get-id">Check</button>
            </div>   
          </div>`
          document.querySelector(".here").insertAdjacentHTML("beforeend", card) // insert the card before the end of the mainCard
        }
        if(categorie == jsonData.Categories[i].strCategory) { // if the categorie is the same as the json categorie, then create the card
            const push = `<br><br><br><br><br><br><div class="categorie-description">
            <h1 class="text-white">What is ${jsonData.Categories[i].strCategory}</h1>
            <img src="${jsonData.Categories[i].strCategoryThumb}" alt="" class="h-50 w-50">
          <div class="card-d bg-warning text-center rounded">${jsonData.Categories[i].strCategoryDescription}</div>
        </div>`
        document.querySelector(".here").insertAdjacentHTML("afterend", push) // insert the card before the end of the mainCard
        }
       
    }   
    const idValue = document.querySelectorAll(".id-value") // get the id value
    const getId = document.querySelectorAll(".get-id") // get the id button
      
    for(let i = 0; i < getId.length; i++) {// loop through the id button
        getId[i].addEventListener("click", function() { // add an eventlistener to the id button
        
                const id = idValue[i].value // get the id value
                console.log(id) // log the id value
                sessionStorage.setItem("id", id)//set the id in the sessionStorage
                location.href = "/vlees.html" // go to the food.html page
        
            })
            
        
    }
}




