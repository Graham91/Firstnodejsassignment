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
        type: 'list',
        name: 'searchtype',
        message: 'choose your search Type',
        choices: ['spotify-this-song', 'movie-this','concert-this',]
      }

  ])
  .then(answers => {
      if(answers.searchtype === 'spotify-this-song')
      {inquirer
        .prompt([
            {
              name: 'spotifysong',
              message: 'Find a song on spotify by typing it in:',
              
            },
  
    ]).then(answers => {
        console.log('Answer:', answers.spotifysong);
    })
}
else if(answers.searchtype === 'movie-this')
{inquirer
    .prompt([
        {
          name: 'movietitle',
          message: 'Search IMDB by typing in a movie name:',
          
        },

]).then(answers => {
    console.log('Answer:', answers.movietitle);
})
}
else
{inquirer
    .prompt([
        {
          name: 'concert',
          message: 'Type in an artist you want to see in Concert:',
        },
]).then(answers => {
    console.log('Answer:', answers.concert);
})
}
    


    // Use user feedback for... whatever!!
  })
