function loadScript() {
  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

function loadPlayer() {
      window.onYouTubePlayerAPIReady = function() {
          onYouTubePlayer();
      };
}


$(function () {
loadScript();
})

var getDrinkVideo = function() {
var videoDataFormat = [];
  //add tipsy + bartender + 
  var apiUrl = `https://youtube.googleapis.com/youtube/v3/search?"${"drinkValue"}&key=AIzaSyA9HBOIrqC3-u3p4VjzEa4V418MG0nHBuc`;

  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {

      // request was successful
      if (response.ok) {

        response.json().then(function(data) {
        videoDataFormat = data;
        console.log(videoDataFormat);

       // Displays video data with parameter of videodata
        displayVideoData(videoDataFormat);
      });
      
      } else {
        alert("Error: " + response.statusText);
      }
    })
};

   // display video in iframe https://developers.google.com/youtube/iframe_api_reference

var displayVideoData = function(videoDataFormat) {

  var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  player = new YT.Player('player', {
    height: '390',
    width: '640',
    // below is from console
    videoId: videoDataFormat.items[1].id.videoId,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

1
var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

getDrinkVideo();

