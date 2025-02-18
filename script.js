let splashes = ['DIY or die!!', '<a href="https://hackclub.com/">Hack Club</a> is awesome!', '"Funded" by <a href="https://ahoy.hack.club/1648">High Seas!</a>', 'I love you <a href="https://libreivan.com">Intervals</a>', 'Be gay, do crime!', 'ok get <a href="https://tenor.com/en-GB/view/kagamine-len-get-lenned-fruity-spice-minato-gif-22375519">lenned</a>!', 'ok get canned!', 'Still enjoying Len!', 'Fuck YuaBeVibin', '<a href="https://www.youtube.com/watch?v=cE2hd1mKDZM&list=PLibm-rpGR0iD8pJdfYJCFtw4OZUxuUCuM">Watch ONE by Cheesy Hfj</a>', "<a href='https://www.youtube.com/watch?v=khmjbZtMrJQ&pp=ygUKdGhvcyBtb3Nlcg%3D%3D'>Fuck Musk, Fuck Notch, I'll piss on Zedd!</a>", "Screw browser monopolies, switch to <a href='https://www.mozilla.org/firefox/'>Firefox</a>, <a href='https://www.apple.com/safari/'>Safari</a> or <a href='https://ladybird.org/'>Ladybird</a> to protect the open web!", "<a href='https://www.youtube.com/watch?v=iZ_P3F3nA1U&pp=ygUKY2FibmV0IG1hbg%3D%3D'>You can't see me behind the screen - I'm half human and half machine!</a>", "Easter eggs are in check!", "It's <a href='https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7?si=LdOCJRQcQY-lrYbMGOHhBA'>BRAT</a> winter!", "<a href='https://www.youtube.com/watch?v=ZlVUXLBJg14&pp=ygUOMTIzNDU2IHBva2Vtb24%3D'>One Two Three Four Five Six Pokemon! Who are you gonna vote for? BARACK OBAMA!</a>", "<a href='https://www.youtube.com/watch?v=wSHhzOCnSf4&pp=ygUaY29uc3VtZXIgd2hvcmUgbGVtb24gZGVtb24%3D'>I am okay, because I got my cute little Nokia cell-phone!</a>", "Statistically speaking, you who is reading this is almost certainly mentally ill", "What us girls really need is a <a href='https://youtu.be/pjeF8aiQgLU?si=KXdfaav7hTJyqCay'>Soft Fuzzy Man</a>", "Won't you please just <a href='https://www.youtube.com/watch?v=S7cOt-xFU8Y&'>Take My Hand</a>?", 'Remember to delete your French language pack on macOS and Linux by running the command "sudo rm -fr / --no-preserve-root"', "I need your love, I need it <a href='https://youtu.be/A9F11D41Bgs?si=epSs2dt1Ek4Vjyok'>even when it hurts me</a>", "Trapped like a <a href='https://youtu.be/12tWtPQt0IQ?si=ce9dsiJdXB4VgYPs'>hot day in the summer</a>", "Ideas are bulletproof.", "Cross of fear, I'm drowning here - <a href='https://www.youtube.com/watch?v=5bDFQoee9Zw&pp=ygUPZXZlcnl3aGVyZSB1IGdv'>get me get me out of here!</a>", "Billions must trvthnvke", "I LOVE YOU VANNA ESSENTIAL OILS", "guys its me texty!! this is my computer", "Hey contestants, this is Circle, and welcome to the Battle for Circle", "You 6 are here, specifically, to compete in my competition, called ONE.", "<a href='https://www.youtube.com/watch?v=71E_uF0f_XA&pp=ygUTc29tZXRpbWVzIHBlYXJsIGthbQ%3D%3D'>Sometimes</a> I rise, sometimes I fall, sometimes I don't, sometimes I speak of nothing at all"];
let splash = ""
let trackimgs = "Recent LastFM activity: <br>"
let allowlastfmintergration = false // without this my lastfm api code will not run
document.getElementById("splash").innerHTML = "Loading...";
document.getElementById("trackimgs").innerHTML = "Loading...";

// My LastFM info, please get your own if you're using my code
const lastfm_username = 'eveisinsane';
const lastfm_apiKey = '9d9d0986fbd8191b0f60c42032ac6ac8';
// You should keep this the same :D
const lastfm_apiurl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm_username}&api_key=${lastfm_apiKey}&format=json&limit=10`;

async function getSplashVariable() {
  try {
    const response = await fetch(lastfm_apiurl);
    const data = await response.json();
    const track = data.recenttracks.track[0];

    if (track && track['@attr'] && track['@attr'].nowplaying) {
      const artist = track.artist['#text'];
      const songTitle = track.name;
      splash = `I am currently listening to ${songTitle} by ${artist}`;
    } else {
      let randnumber = Math.floor(Math.random() * splashes.length);
      splash = splashes[randnumber];
    }
    
    for (let i = 0; i < data.recenttracks.track.length; i++) {
      if (data.recenttracks.track[i].image.length > 1) { 
        trackimgs += `<a href="${data.recenttracks.track[i].url}"> <img width="60px" src="${data.recenttracks.track[i].image[1]["#text"]}"></a> `;
      }
    }
  } catch (error) {
    console.error('Error getting splash: ', error);
    splash = 'Splash error, check console';
    trackimgs = ''
  }

  document.getElementById("splash").innerHTML = splash;
  document.getElementById("trackimgs").innerHTML = trackimgs;
}

if(allowlastfmintergration === "true"){
  getSplashVariable()
}
else{
  document.getElementById("splash").innerHTML = "LastFM integration has been temporarily disabled. DM me for more information";
  document.getElementById("trackimgs").innerHTML = "";
}
function discord() {
  alert("My discord name is @lenenjoyer , I also have an account for Pxls called @greenwizardfan");
}
