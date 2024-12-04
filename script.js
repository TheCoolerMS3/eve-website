async function fetchNowPlaying() {
  let nowplayingtext = "";
  let randnumber = Math.random() * 13;
      randnumber = Math.round(randnumber);
      if (randnumber === 1){
        nowplayingtext = "DIY or die!!"
      }
      else if (randnumber === 2){
        nowplayingtext = '<a href="https://hackclub.com/">Hack Club</a> is awesome!'
      }
      else if (randnumber === 3){
        nowplayingtext = "This site loads* on a Wii!"
      }
      else if (randnumber === 4){
        nowplayingtext = '"Funded" by High Seas!'
      }
      else if (randnumber === 5){
        nowplayingtext = 'I love you Intervals'
      }
      else if (randnumber === 6){
        nowplayingtext = 'Be gay, do crime!'
      }
      else if (randnumber === 7){
        nowplayingtext = 'ok get lenned!'
      }
      else if (randnumber === 8){
        nowplayingtext = 'ok get canned!'
      }
      else if (randnumber === 9){
        nowplayingtext = 'Still enjoying Len!'
      }
      else if (randnumber === 10){
        nowplayingtext = 'Fuck YuaBeVibin'
      }
      else if (randnumber === 11){
        nowplayingtext = 'Watch ONE by Cheesy Hfj'
      }
      else if (randnumber === 12){
        nowplayingtext = "Fuck Musk, Fuck Notch, I'll piss on Zedd!"
      }
      else if (randnumber === 13){
        nowplayingtext = "Easter eggs are in check!"
      }
  const lastfm_username = 'eveisinsane';
  const lastfm_apiKey = '9d9d0986fbd8191b0f60c42032ac6ac8';
  const lastfm_apiurl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm_username}&api_key=${lastfm_apiKey}&format=json&limit=1`;

  if (
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && localStorage.getItem("preferDesktop") !== "true"){
    window.location.href = "https://bottom.monster/mobile";
}

  try {
    const response = await fetch(lastfm_apiurl);
    const data = await response.json();

    const track = data.recenttracks.track[0];

    if (track && track['@attr'] && track['@attr'].nowplaying) {
      const artist = track.artist['#text'];
      const songTitle = track.name;

      nowplayingtext = `I am currently listening to ${songTitle} by ${artist}`;
    } 
  } catch (error) {
    console.error('Error fetching now playing data:', error);
    nowplayingtext = 'API Error! Check console...';
  }

  document.getElementById("lastfm").innerHTML = nowplayingtext;
}
fetchNowPlaying();

function discord() {
  alert("My discord name is @lenenjoyerr , I also have an account for Pxls called @greenwizardfan")
}

