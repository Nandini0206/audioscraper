import dayjs from 'dayjs';
var test_audio;
var date;
var now;
var start_time;
var url = 'https://webrtc.newsquawk.com/flussonic/api/media'

// window.dayjs = dayjs;
//
// // channels = [ 'audio_test', 'forex-realtime', '' ];
//
//   fetch('https://webrtc.newsquawk.com/flussonic/api/media', {
//     headers: new Headers({
//        'Authorization': "Basic " + btoa('view:ReadMe890')
//      }),
//   })
//   .then(response => {
//     return response.json();
//   })
//   .then((data) => {
//     test_audio = data.find(function(item) {
//       return item.entry == 'stream' && item.value.name.match('audio_test');
//     });
//     date = test_audio.value.stats.lifetime;
//     console.log({running: date});
//     now = new Date().getTime();
//     start_time = dayjs(now - date);
//     console.log({
//       start_time: start_time.format("DD-MM-YYYY HH:mm:ss"),
//       name: test_audio.value.name.replace("live/"", "")
//     });
//   });

async function getData(url) {
  try {
    const response = await fetch(url, {
        headers: new Headers({
           'Authorization': "Basic " + btoa('view:ReadMe890')
         })
    });
    const data = await response.json();
    const test_audio = data.find(function(item) {
      return item.entry == 'stream' && item.value.name.match('audio_test');
    });
    date = test_audio.value.stats.lifetime;
    console.log({running: date});
    now = new Date().getTime();
    start_time = dayjs(now - date);
    console.log({
      start_time: start_time.format("DD-MM-YYYY HH:mm:ss"),
      name: test_audio.value.name.replace("live/", "")
    });
  } catch(err) {
      throw("error while fetching data")
  }
}
getData(url)
