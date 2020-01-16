import dayjs from 'dayjs';
const URL = 'https://webrtc.newsquawk.com/flussonic/api/media'

async function getData(url) {
  try {
    const response = await fetch(url, {
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('view:ReadMe890')
      })
    });
    return response.json();
  } catch(error) {
    throw('error while fetching data :'  + error);
  }
}

function extractData(json, channel_list) {
  return json.map(item => {
    const now = new Date().getTime();
    const start_time = dayjs(now - item.value.stats.lifetime);
    return {
      name: item.value.name.replace('live/', ''),
      start_time: start_time.format('DD-MM-YYYY HH:mm:ss')
    };
  });
};
// if the json date matches the channel list then filter if not then remove string from array
function filterActive(json, channel_list) {
  return json.filter(item => {
    return channel_list.find(label => {
      return item.value.name.match(label);
    });
  });
};

async function run() {
  const json = await getData(URL);
  const active = filterActive(json, [ 'audio_test', 'forex-realtime', 'multi_asset-realtime', 'blah' ]);
  const content = extractData(active);
  console.log(content);
}

run();

// const test_audio = json.find(function(item) {
//   return item.entry == 'stream' && item.value.name.match('audio_test');
// });
