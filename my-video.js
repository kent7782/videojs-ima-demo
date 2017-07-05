window.addEventListener('load', function () {

  // Create video container div
  var videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');

  // Create video element
  var video = document.createElement('video');
  video.setAttribute('id', 'my-video');
  video.classList.add('video-js');
  video.classList.add('vjs-big-play-centered');

  // Create video source element
  var videoSource = document.createElement('source');
  videoSource.setAttribute('src', '//vjs.zencdn.net/v/oceans.mp4');
  videoSource.setAttribute('type', 'video/mp4');

  // Append source to video, and append video to vdieo-container
  video.appendChild(videoSource);
  videoContainer.appendChild(video);

  // Insert video container after the first paragraph
  var article = document.getElementById('my-article');
  var secondParagraph= article.getElementsByTagName('p')[1];
  article.insertBefore(videoContainer , secondParagraph);

  // Initialize video-js player with options
  var player = videojs('my-video', {
    controls: true,
    preload: true,
    width: 640,
    height: 360
  });

  // Set up IMA options
  var imaOptions = {
    id: 'my-video',
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
  }

  // Initialize IMA
  player.ima(imaOptions);

  // Display ad when user clicks the video
  player.one('click', function () {
    player.ima.requestAds();
    player.play();
  });

});
