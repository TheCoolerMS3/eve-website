let splashes = ['DIY or die!!', '<a href="https://hackclub.com/">Hack Club</a> is awesome!', '"Funded" by <a href="https://ahoy.hack.club/1648">High Seas!</a>', 'I love you <a href="https://libreivan.com">Intervals</a>', 'Be gay, do crime!', 'ok get <a href="https://tenor.com/en-GB/view/kagamine-len-get-lenned-fruity-spice-minato-gif-22375519">lenned</a>!', 'ok get canned!', 'Still enjoying Len!', 'Fuck YuaBeVibin', '<a href="https://www.youtube.com/watch?v=cE2hd1mKDZM&list=PLibm-rpGR0iD8pJdfYJCFtw4OZUxuUCuM">Watch ONE by Cheesy Hfj</a>', "<a href='https://www.youtube.com/watch?v=khmjbZtMrJQ&pp=ygUKdGhvcyBtb3Nlcg%3D%3D'>Fuck Musk, Fuck Notch, I'll piss on Zedd!</a>", "Screw browser monopolies, switch to <a href='https://www.mozilla.org/firefox/'>Firefox</a>, <a href='https://www.apple.com/safari/'>Safari</a> or <a href='https://ladybird.org/'>Ladybird</a> to protect the open web!", "<a href='https://www.youtube.com/watch?v=iZ_P3F3nA1U&pp=ygUKY2FibmV0IG1hbg%3D%3D'>You can't see me behind the screen - I'm half human and half machine!</a>", "Easter eggs are in check!", "It's <a href='https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7?si=LdOCJRQcQY-lrYbMGOHhBA'>BRAT</a> winter!", "<a href='https://www.youtube.com/watch?v=ZlVUXLBJg14&pp=ygUOMTIzNDU2IHBva2Vtb24%3D'>One Two Three Four Five Six Pokemon! Who are you gonna vote for? BARACK OBAMA!</a>", "<a href='https://www.youtube.com/watch?v=wSHhzOCnSf4&pp=ygUaY29uc3VtZXIgd2hvcmUgbGVtb24gZGVtb24%3D'>I am okay, because I got my cute little Nokia cell-phone!</a>", "Statistically speaking, you who is reading this is almost certainly mentally ill", "What us girls really need is a <a href='https://youtu.be/pjeF8aiQgLU?si=KXdfaav7hTJyqCay'>Soft Fuzzy Man</a>"];
let splash = ""

// My LastFM info, please get your own if you're using my code
const lastfm_username = 'eveisinsane';
const lastfm_apiKey = '9d9d0986fbd8191b0f60c42032ac6ac8';
// You should keep this the same :D
const lastfm_apiurl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm_username}&api_key=${lastfm_apiKey}&format=json&limit=1`;

async function getSplashVariable() {
  try {
    const response = await fetch(lastfm_apiurl);
    const data = await response.json();
    const track = data.recenttracks.track[0];

    if (track && track['@attr'] && track['@attr'].nowplaying) { // If I'm currently streaming music (according to the LastFM API), display that!
      const artist = track.artist['#text'];
      const songTitle = track.name;
      splash = `I am currently listening to ${songTitle} by ${artist}`;
    }
    else { // Elsewise, display a fun splash!
      let randnumber = Math.floor(Math.random() * splashes.length);
      splash = splashes[randnumber];
    }
  } catch (error) {
    console.error('Error getting splash: ', error);
    splash = 'Splash error, check console';
  }
}

getSplashVariable();
document.getElementById("splash").innerHTML = splash;

function discord() {
  alert("My discord name is @lenenjoyerr , I also have an account for Pxls called @greenwizardfan");
}

