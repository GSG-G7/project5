const url  = '/search';

document.getElementById('search_form').addEventListener('submit',(e)=>{
    console.log("search form")
    e.preventDefault();
    const input = document.getElementById('search__input').value;
        fetch(url, {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({input:input})
        })
        .then((res) => res.json())
        .then((res) => console.log(res.drinks[0].strDrinkThumb))
        .catch((err)=>console.log(err))
}); 