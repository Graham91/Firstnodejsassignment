require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var inquirer = require('inquirer');


inquirer.prompt([
    {
        type: 'list',
        name: 'searchtype',
        message: 'choose your search Type',
        choices: ['spotify-this-song', 'movie-this','concert-this','Use Document']
      }

  ]).then(answers => {
if(answers.searchtype === 'spotify-this-song')
      {inquirer.prompt([
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
            
          console.log("Song Name: " + data.tracks.items[0].name);
          console.log("Artist: " + data.tracks.items[0].artists[0].name);
          console.log("Album: " + data.tracks.items[0].album.name);
          console.log("check out Song at this URL: " +
           data.tracks.items[0].external_urls.spotify);
          });
    })
}
else if(answers.searchtype === 'movie-this')
{inquirer.prompt([
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
        console.log("Movie Title: "+response.data.Search[0].Title);
        console.log("Year: "+response.data.Search[0].Year);

      //   * Title of the movie.
      //  * Year the movie came out.
      //  * IMDB Rating of the movie.
      //  * Rotten Tomatoes Rating of the movie.
      //  * Country where the movie was produced.
      //  * Language of the movie.
      //  * Plot of the movie.
      //  * Actors in the movie.

    });

})
}
else if(answers.searchtype === 'Use Document'){
  {inquirer.prompt([
    {
      name: 'filepath',
      message: 'Enter desired file path:',
      
    },]).then(answers => { 
      
      var newFilePath = answers.filepath;
      console.log(newFilePath);
     const fs = require('fs');
      fs.readFile(newFilePath, (err, data) => { 
        if (err) throw err; 
      
        console.log(data.toString()); 
    }) 
    })
}
}
else
{inquirer.prompt([
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
        var moment = require('moment');
         var time1 = moment(response.data[0].datetime).format("MM/DD/YYYY");
         var time2 = moment(response.data[1].datetime).format("MM/DD/YYYY");
         var time3 = moment(response.data[2].datetime).format("MM/DD/YYYY");


    console.log("Date: "+time1);
    console.log("Venue: " + response.data[0].venue.name)
    console.log("Venue Location: " +response.data[0].venue.city + ", "+  response.data[0].venue.country)
    console.log("----------------------");
    console.log("Date: "+time2);
    console.log("Venue: " + response.data[1].venue.name)
    console.log("Venue Location: " +response.data[1].venue.city + ", "+  response.data[1].venue.country)
    console.log("----------------------");
    console.log("Date: "+time3);
    console.log("Venue: " + response.data[2].venue.name)
    console.log("Venue Location: " +response.data[2].venue.city + ", "+  response.data[2].venue.country)
    
    // * Name of the venue

    // * Venue location

    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
    });
})
}
})
