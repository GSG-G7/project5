const url = '/search';
const drinkImg = document.getElementById('container__img');
const ingredient1 = document.getElementById('container__ingredient1');
const ingredient2 = document.getElementById('container__ingredient2');
const ingredient3 = document.getElementById('container__ingredient3');

document.getElementById('search_form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('search__input').value;
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input }),
  })
    .then(res => res.json())
    .then((res) => {
      drinkImg.src = res.drinks[0].strDrinkThumb;
      ingredient1.textContent = res.drinks[0].strIngredient1;
      ingredient2.textContent = res.drinks[0].strIngredient2;
      ingredient3.textContent = res.drinks[0].strIngredient3;
    })
    .catch(error => error.message);
});
