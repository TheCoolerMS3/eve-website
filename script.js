async function fetchNowPlaying() {
  let nowplayingtext = "";
  let randnumber = Math.random() * 20;
      randnumber = Math.round(randnumber);
      if (randnumber === 1){
        nowplayingtext = "DIY or die!!"
      }
      else if (randnumber === 2){
        nowplayingtext = '<a href="https://hackclub.com/">Hack Club</a> is awesome!'
      }
      else if (randnumber === 3){
        nowplayingtext = '<a href="/media/wii.jpg">This site loads* on a Wii!</a>'
      }
      else if (randnumber === 4){
        nowplayingtext = '"Funded" by <a href="https://ahoy.hack.club/1648">High Seas!</a>'
      }
      else if (randnumber === 5){
        nowplayingtext = 'I love you <a href="https://libreivan.com">Intervals</a>'
      }
      else if (randnumber === 6){
        nowplayingtext = 'Be gay, do crime!'
      }
      else if (randnumber === 7){
        nowplayingtext = 'ok get <a href="https://tenor.com/en-GB/view/kagamine-len-get-lenned-fruity-spice-minato-gif-22375519">lenned</a>!'
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
        nowplayingtext = '<a href="https://www.youtube.com/watch?v=cE2hd1mKDZM&list=PLibm-rpGR0iD8pJdfYJCFtw4OZUxuUCuM">Watch ONE by Cheesy Hfj</a>'
      }
      else if (randnumber === 12){
        nowplayingtext = "<a href='https://www.youtube.com/watch?v=khmjbZtMrJQ&pp=ygUKdGhvcyBtb3Nlcg%3D%3D'>Fuck Musk, Fuck Notch, I'll piss on Zedd!</a>"
      }
      else if (randnumber === 13){
        nowplayingtext = "Easter eggs are in check!"
      }
      else if (randnumber === 14){
        nowplayingtext = "It's <a href='https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7?si=LdOCJRQcQY-lrYbMGOHhBA'>BRAT</a> winter!"
      }
      else if (randnumber === 15){
        nowplayingtext = "Screw browser monopolies, switch to <a href='https://www.mozilla.org/firefox/'>Firefox</a>, <a href='https://www.apple.com/safari/'>Safari</a> or <a href='https://ladybird.org/'>Ladybird</a> to protect the open web!"
      }
      else if (randnumber === 16){
        nowplayingtext = "<a href='https://www.youtube.com/watch?v=iZ_P3F3nA1U&pp=ygUKY2FibmV0IG1hbg%3D%3D'>You can't see me behind the screen - I'm half human and half machine!</a>"
      }
      else if (randnumber === 17){
        nowplayingtext = "<a href='https://www.youtube.com/watch?v=ZlVUXLBJg14&pp=ygUOMTIzNDU2IHBva2Vtb24%3D'>One Two Three Four Five Six Pokemon! Who are you gonna vote for? BARACK OBAMA!</a>"
      }
      else if (randnumber === 18){
        nowplayingtext = "<a href='https://www.youtube.com/watch?v=wSHhzOCnSf4&pp=ygUaY29uc3VtZXIgd2hvcmUgbGVtb24gZGVtb24%3D'>I am okay, because I got my cute little Nokia cell-phone!</a>"
      }
      else if (randnumber === 19){
        nowplayingtext = "Statistically speaking, you who is reading this is almost certainly mentally ill"
      }
      else if (randnumber === 20){
        nowplayingtext = "What us girls really need is a <a href='https://youtu.be/pjeF8aiQgLU?si=KXdfaav7hTJyqCay'>Soft Fuzzy Man</a>"
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

