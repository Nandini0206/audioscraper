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
    return item.value.stats.lifetimes
    });
    console.log({name: test_audio.value.name});
    date = test_audio.value.stats.lifetime
    console.log({timestamp: date});
  });
console.log(dayjs());
// return (new Date().getTime()
