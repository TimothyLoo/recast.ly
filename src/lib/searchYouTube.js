import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', { youtube_api_key: YOUTUBE_API_KEY,
    q: query
  })
    .done ((data) => {
      if (callback) {
        console.log(data);
        callback(data);
      }
    });
};

export default searchYouTube;
