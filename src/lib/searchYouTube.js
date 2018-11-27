

var searchYouTube = (options, callback) => {

  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      'maxResults': options.max,
      'part': 'snippet',
      'q': options.query,
      'videoEmbeddable': true,
      'type': 'video',
      'key': options.key
    },
    success: callback
  });
};



export default searchYouTube;
