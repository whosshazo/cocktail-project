var getDrinkVideo = function() {
    console.log("Drink Vid", drinkValue);

    var apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?${drinkValue}&key=AIzaSyA9HBOIrqC3-u3p4VjzEa4V418MG0nHBuc`;

    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {

        // request was successful
        if (response.ok) {
          console.log(response);

          response.json().then(function(videodata) {
          console.log("video", videodata);

          //Displays video data with parameter of videodata
          displayVideoData(videodata);
        });
        
        } else {
          alert("Error: " + response.statusText);
        }
      })
  };

     // display video in iframe https://developers.google.com/youtube/iframe_api_reference
  // var displayVideoData = function(videodata) {

 // }

