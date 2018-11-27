

var searchYouTube = (options, callback) => {
  
  $.get('https://www.googleapis.com/youtube/v3/search',
    { 'maxResults': options.max,
      'part' : 'snippet',
      'q': options.query,
      'videoEmbeddable': true,
      'type': 'video',
      'key': options.key }, callback(response)
  );

};

export default searchYouTube;
