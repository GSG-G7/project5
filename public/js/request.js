const url  = '/search';
const drinkImg = document.getElementById('search__img')
const ingredient1 = document.getElementById('search__ingredient1')
const ingredient2 = document.getElementById('search__ingredient2')
const ingredient3 = document.getElementById('search__ingredient3')
const form = document.getElementById('search_form');
const inputTilte = document.getElementById('search__input');

const displayData = (data) => {
    drinkImg.src = data.drinks[0].strDrinkThumb;
    drinkImg.style.width = "30%";
    ingredient1.textContent = data.drinks[0].strIngredient1;
    ingredient2.textContent = data.drinks[0].strIngredient2;
    ingredient3.textContent = data.drinks[0].strIngredient3;
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const input = inputTilte.value.trim();
    if(!input){
        return;
    }
        fetch(url, {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({input})
        })
        .then((res) => res.json())
        .then((res) => displayData(res))
        .catch( error => error.message)
}); 