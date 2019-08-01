const request = require('request');
const gifReqest = (url) => {
    return new Promise((resolve,reject)=>{
     request(url, (error, response ,body )=>{
          if(error){
             reject(error);
         }
             resolve(JSON.parse(body));
         });
     });
 };
 
exports.post = (req,res) =>{
   const value =req.body.input;
   const gifUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    gifReqest(gifUrl)
    .then(apiRes =>  {
        res.send(apiRes)
        })
    .catch(error => error.message);
}
