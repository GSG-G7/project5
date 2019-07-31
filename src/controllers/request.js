// const request = require('request');
// const value ='cat';
// const gifUrl = `http://api.giphy.com/v1/gifs/search?q=${value}&limit=10&api_key=dc6zaTOxFJmzC`;


// const gifReqest = (url) => {
//     const gifPromise = new Promise((resolve,reject)=>{
//     request(url, (err, response ,body )=>{
//          if(err){
//             reject('Error : response is no JSON');
//         }
//             resolve(JSON.parse(body));
//         });
        
//     });
//    return gifPromise;
// };

// gifReqest(gifUrl)
// .then(res =>  console.log(res.data[0].images.fixed_width.webp ))
// .catch(error => console.log(error.message));

exports.get = (req, res) => {
    console.log(req.body.input);

    res.send('ok')
    
}
exports.post = (req,res) =>{
    console.log('post route')
    console.log(req.body.input);
    res.redirect('/');


}