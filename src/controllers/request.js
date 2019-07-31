const request = require('request');
const gifReqest = (url) => {
    const gifPromise = new Promise((resolve,reject)=>{
     request(url, (err, response ,body )=>{
          if(err){
             reject('Error : response is no JSON');
         }
             resolve(JSON.parse(body));
         });
         
     });
    return gifPromise;
 };
 

exports.get = (req, res) => {
    console.log(res);
    res.send('ok')
}

exports.post = (req,res) =>{

   const value =req.body.input;
   const gifUrl = `http://api.giphy.com/v1/gifs/search?q=${value}&limit=10&api_key=dc6zaTOxFJmzC`;
    gifReqest(gifUrl)
    .then(apiRes =>  {
        res.send(apiRes)
        })
    .catch(error => console.log(error.message));
    // res.redirect('/');
}
