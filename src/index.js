import dayjs from 'dayjs';
var test_audio;
var date;
var now;
var start_time;

window.dayjs = dayjs;

// channels = [ 'audio_test', 'forex-realtime', '' ];

  fetch('https://webrtc.newsquawk.com/flussonic/api/media', {
    headers: new Headers({
       'Authorization': "Basic " + btoa('view:ReadMe890')
     }),
  })
  .then(response => {
    return response.json();
  })
  .then((data) => {
    test_audio = data.find(function(item) {
      return item.entry == 'stream' && item.value.name.match('audio_test');
    });
    date = test_audio.value.stats.lifetime;
    console.log({running: date});
    now = new Date().getTime();
    start_time = dayjs(now - date);
    console.log({
      start_time: start_time.format("DD-MM-YYYY HH:mm:ss"),
      name: test_audio.value.name.replace('live/', '')
    });
  });

async function getData(url) {

  const response = await fetch('https://webrtc.newsquawk.com/flussonic/api/media');
  const responseJSON = await response.json();
  const data = await
    test_audio = data.find(function(item) {
      return item.entry == 'stream' && item.value.name.match('audio_test');
    });
    date = test_audio.value.stats.lifetime;
    console.log({running: date});
    now = new Date().getTime();
    start_time = dayjs(now - date);
    console.log({
      start_time: start_time.format("DD-MM-YYYY HH:mm:ss"),
      name: test_audio.value.name.replace('live/', '')
    });
}
