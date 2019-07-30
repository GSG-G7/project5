const http = require('http');
const value ='cat';
const gifUrl = `http://api.giphy.com/v1/gifs/search?q=${value}&limit=10&api_key=dc6zaTOxFJmzC`;


const gifReqest = (url) => {
    const gifPromise = new Promise((resolve,reject)=>{
    http.get(url, response =>{
        let allData = '';
        response.on('data', (chunk)=>{
            allData += chunk;
        });
        response.on('end', ()=>{
            try {
                resolve(JSON.parse(allData));
                
            } catch (error) {
                reject('Error : response is no JSON');
            }
        })
        }).on('error', (error) => {
            reject(error.message);
        });
    });

    return gifPromise;
};

gifReqest(gifUrl)
.then(res =>  res.data[0].images.fixed_width.webp )
.catch(error => console.log(error.message));