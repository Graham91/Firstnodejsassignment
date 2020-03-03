// require("dotenv").config();
// var keys = require("./keys.js");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);

 

 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// var axios = require("axios");

// // URL: "http://www.omdbapi.com/?apikey=daba8cc8"& 
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// axios({
//         method: 'get',
//         url: "https://rest.bandsintown.com/artists/" + "TaylorSwift" + "/events?app_id=codingbootcamp",
//       }).then(function (response) {
    
//     console.log(response.data[1].venue)
//     });

// axios({
//         method: 'get',
//         url:"http://www.omdbapi.com/?apikey=daba8cc8&"+"s=hitch",
//       }).then(function (response) {
//         console.log(response.data.Search[0].Title);
//     });


    var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: 'someOtherInput',
        message: 'Just show me the output'
      }
  ])
  .then(answers => {console.log("hi")
    // Use user feedback for... whatever!!
  })