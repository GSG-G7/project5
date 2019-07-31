
const fetch = require("node-fetch");

const url  = '/search';

const input = document.getElementById('search__input').value;
document.getElementById('search__button').addEventListener('click',(e)=>{

    e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers : new Headers(),
            body:JSON.stringify({input:input})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
})