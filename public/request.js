
// const fetch = require("node-fetch");

console.log("Request.js")

const url  = '/search';

document.getElementById('search_form').addEventListener('submit',(e)=>{
    console.log("search form")
    e.preventDefault();
    const input = document.getElementById('search__input').value;
    
        fetch(url, {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({input:input})
        }).then((res) => res.json())
        .catch((err)=>console.log(err))
})