function loadScript() {
  if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

function loadPlayer() {
  window.onYouTubePlayerAPIReady = function () {
    onYouTubePlayer();
  };
}


$(function () {
  loadScript();
})

var getDrinkVideo = function () {
  var videoDataFormat = [];
  drinkValue = drinkValue.replace(/\s/g, '');
  var apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + drinkValue + 'cocktail&key=AIzaSyDeYvW3HSa4AoUphIkEkC9Sy_kqiKAz6bo';



  console.log(apiUrl);
  // make a get request to url
  fetch(apiUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
          var videoDataFormat = data;
          console.log(videoDataFormat);

          // Displays video data with parameter of videodata
          displayVideoData(videoDataFormat);
        });

      } else {
        alert("Error: API Could Not Load");
      }
    })
};

// display video in iframe https://developers.google.com/youtube/iframe_api_reference

var displayVideoData = function (videoDataFormat) {

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.YT.ready(function () {
    player = new window.YT.Player("video", {
      height: "390",
      width: "640",
      videoId: videoDataFormat.items[0].id.videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      },
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'autohide': 1,
        'wmode': 'opaque',
        'origin': 'http://localhost:8100'
      }
    });
  });


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
}
getDrinkVideo();

