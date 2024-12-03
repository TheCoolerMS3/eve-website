async function fetchNowPlaying() {
  let nowplayingtext = "Getting data!";
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
    } else {
      nowplayingtext = "I am not streaming any music right now!";
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