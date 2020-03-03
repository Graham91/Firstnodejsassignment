require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");



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
        spotify.search({ type: 'track', query: answers.spotifysong }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data); 
          });
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
    axios({
        method: 'get',
        url:"http://www.omdbapi.com/?apikey=daba8cc8&"+"s=" + answers.movietitle,
      }).then(function (response) {
        console.log(response.data.Search[0].Title);
    });

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
    axios({
        method: 'get',
        url: "https://rest.bandsintown.com/artists/" + answers.concert + "/events?app_id=codingbootcamp",
      }).then(function (response) {
    
    console.log(response.data[1].venue)
    });
})
}
    

  })
