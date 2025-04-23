// Code by Eve, excessive commenting also by Eve.

// A HUGE array of splash texts.
var splashes = [
  // I am going to comment out the unprofessional splashes, I'm still just as crazy just pretending not to be.
  // "These splashes are a russian roulete, if the wrong person sees the wrong one I could be FUCKED.",
  // "Certified brat",
   "I'm not brave, just impulsive.",
   "Welcome back to Trench!",
  // "I'm everywhere I'm so Julia",
  // "Known for developing unhealthy obsessions with people",
  "I will reign, until you notice that I'm insane but then it's too late to flee.",
  // "Pointy pointy pointy my point is sharp and pointy",
  // "YOU DON'T SHOW THE SYMPTOMS YOU DON'T EVEN FALTER, YOU JUST KEEP ON RUNNING INTO ISSUES LIKE A STALKER",
  "You take me for a genius! (A goddess and a wonderchild)",
  "I am your leader, I am your god! If you don't obey, they that's not okay!",
  // "Sometimes I wish I could lend you my eyes, lend you my hips and lend you my thighs",
  // "The 'troon' you speak of is I",
  // "The 'gigahon' you speak of is I",
  // "The 'youngshit passoid' you speak of is I",
  "You're a true blue friend.",
  // "I hate bad friends, but I hate losing friends more.",
  // 'They call it an "Object Show".',
  // "Sick puppy, have you been taking your pills?",
  // "Resident minor, how do you plead?",
  // "i love food house, lemon demon, rebzyyx and charli xcx",
  // "Bradley is one hell of a Dhiller",
  // "A toast, to ONE and it's contestants.",
  // "Briefly known as EgoRockAn",
  'I made the following popular Fitbit clockfaces: "Lagtrain Clock", "BFDI Clock" and "hfjONE Clock".',
  // "Don't buy a HMD/Nokia phone. You can't unlock the bootloader :(",
  // "Eternally 14",
  // "Collecting mental illnesses like Pokemon since 2008",
  'I was the (co)leader of the Pxls faction "Miku and More"!',
  "I made the Dhilly Game series!",
  "I made the Ice OS Scratch projects",
  "Many things are temporary, but LibreIvan is forever.",
  // "Bad things happen not to me though",
  // "Give me a drink and I'll drink it drink it",
  // "I have issues controlling myself around alcohol",
  // "I'm perfect for the background - one foot in a normal life.",
  "The future is <i>so</i> yesterday",
  // "You wouldn't even stay for the chance to win a prize?",
  "You are the 1 millionth visitor! Click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D'>here</a> to recieve your prize.",
  // "<img src='/media/kneesurgery.jpg' alt='That feeling when you can put images in the splash text'>",
  // "And now you're walking on your own, rain falls down and I'm not answering my phone. I got to phase you out my zone. Hope you realise now that I'm never coming home. You were meant to be alone.",
  // "FUCK YOU, SUCKER!",
  // "Adrien Brody",
  // "I want to lock you up inside my heart.",
  // "Don't say I didn't warn you, I did.",
  // "DIY or die!!",
  'You should thank <a href="https://hackclub.com/">Hack Club</a> for many of my projects.',
  // '"Funded" by <a href="https://ahoy.hack.club/1648">High Seas!</a>',
  // 'I love you <a href="https://libreivan.com">Intervals</a>',
  // 'Be gay, do crime!',
  // 'ok get <a href="https://tenor.com/en-GB/view/kagamine-len-get-lenned-fruity-spice-minato-gif-22375519">lenned</a>!',
  // 'ok get canned!',
  // 'Still enjoying Len!',
  // 'Fuck YuaBeVibin',
  // '<a href="https://www.youtube.com/watch?v=cE2hd1mKDZM&list=PLibm-rpGR0iD8pJdfYJCFtw4OZUxuUCuM">Watch ONE by Cheesy Hfj</a>',
  // "<a href='https://www.youtube.com/watch?v=khmjbZtMrJQ&pp=ygUKdGhvcyBtb3Nlcg%3D%3D'>Fuck Musk, Fuck Notch, I'll piss on Zedd!</a>",
  // "Screw browser monopolies, switch to <a href='https://www.mozilla.org/firefox/'>Firefox</a>, <a href='https://www.apple.com/safari/'>Safari</a> or <a href='https://ladybird.org/'>Ladybird</a> to protect the open web!",
  "You can't see me behind the screen - I'm half human and half machine!",
  // "Easter eggs are in check!",
  // "It's <a href='https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7?si=LdOCJRQcQY-lrYbMGOHhBA'>BRAT</a> winter!",
  // "<a href='https://www.youtube.com/watch?v=ZlVUXLBJg14&pp=ygUOMTIzNDU2IHBva2Vtb24%3D'>One Two Three Four Five Six Pokemon! Who are you gonna vote for? BARACK OBAMA!</a>",
  // "<a href='https://www.youtube.com/watch?v=wSHhzOCnSf4&pp=ygUaY29uc3VtZXIgd2hvcmUgbGVtb24gZGVtb24%3D'>I am okay, because I got my cute little Nokia cell-phone!</a>",
  // "Statistically speaking, you who is reading this is almost certainly mentally ill",
  // "What us girls really need is a <a href='https://youtu.be/pjeF8aiQgLU?si=KXdfaav7hTJyqCay'>Soft Fuzzy Man</a>",
  // "Won't you please just <a href='https://www.youtube.com/watch?v=S7cOt-xFU8Y&'>Take My Hand</a>?",
  // 'Remember to delete your French language pack on macOS and Linux by running the command "sudo rm -fr / --no-preserve-root"',
  // "I need your love, I need it <a href='https://youtu.be/A9F11D41Bgs?si=epSs2dt1Ek4Vjyok'>even when it hurts me</a>",
  // "Trapped like a <a href='https://youtu.be/12tWtPQt0IQ?si=ce9dsiJdXB4VgYPs'>hot day in the summer</a>",
  // "Ideas are bulletproof.",
  // "Cross of fear, I'm drowning here - <a href='https://www.youtube.com/watch?v=5bDFQoee9Zw&pp=ygUPZXZlcnl3aGVyZSB1IGdv'>get me get me out of here!</a>",
  // "Billions must trvthnvke",
  // "I LOVE YOU VANNA ESSENTIAL OILS",
  "guys its me texty!! this is my computer",
  // "I'm your only friend but I'm not your only friend but I'm a little glowing friend but really I'm not actually your friend. (*dw bro im just a little birdhouse in your soul*)",
  // "Hey contestants, this is Circle, and welcome to the Battle for Circle",
  // "You 6 are here, specifically, to compete in my competition, called ONE.",
  // "<a href='https://www.youtube.com/watch?v=71E_uF0f_XA&pp=ygUTc29tZXRpbWVzIHBlYXJsIGthbQ%3D%3D'>Sometimes</a> I rise, sometimes I fall, sometimes I don't, sometimes I speak of nothing at all",
  // "You don't seem to carry empathy empathy, don't seem to notice hurting me hurting me",
  // "I don't know who needs to hear this, but Lain is NOT a DID system and if you think she is you completely missed the point of the show :3",
  // "JavaScript? How about I console your log ;)",
  // "So why can't I stop being everyone's friend?! Why don't I want conversation to end?!",
  // "Can you really call it hyperpop if this beat is more cybergrind mixed up with digicore?",
  // "There was a period of time you were my only friend, if somebody met me eventually they'd have to meet you, I look back on these times and think too much and get myself sick",
  // "I GOTTA DO PENIS MUSIC I AM A DISEASE I'M TOO SICK THESE LOOSE ASS TIES ALL GREW THICK THESE DAY ONES IN MY GROUP PIC I GOTTA MAKE ALL THIS MUSIC I DO IT FOR THERAPUETIC I DO IT FOR MASSACHUSETTS I DO IT FOR FRAXIOM MUSIC!!!!!!!!!!!!",
  // "HAPPINESS PEACE AND LOVE EVEN WHEN IT SUCKS",
  // "Slash four Ts, don't fw that!!",
   "I don't wanna be a loser, but I think that's where I'm heading",
  // "Don't talk shit about me, you know it makes me mad and it'll come back to bite you",
  // "If you make music then stop it, are you mad cuz I called you a wallet",
  // "Don't hesitate to maybe overcompensate",
  // "Give it for free to he/him lesbians",
  // "I got HRT for free at my own show in Denver",
  // "What about me makes me so special that I think I deserve your love?",
  // "What's up? Haven't seen you. What the fuck?! Used to regret what I did to you but now I can't forgive myself enough!",
  "I need a kind of therapy that hasn't been invented yet.",
  // "BIG DAY FOR ANNOYING PEOPLE, FRAXIOM IS BACK!",
  // "I don't want it at all, phone is dead I just stare at the wall",
  // "I am offering free ink and toner",
  // "I've got Oxycodone without a prescription",
  "The government hates me but I know YOU love me!",
  "You can own your name dot com!",
  // "If you see someone listening to intolerable hyperpop at a volume a bit too loud it might be me",
  "Autistic, BPD or lonely? My favourite gameshow!",
 //  "Stargazing in your eyes, I think you're so perfect so fucking perfect",
  "I'll never stop talking about you ever, will you hold me till December?",
  // "Hope you're happy with him, you didn't have to waste my time! Used to care so much and all you did was fucking lie!",
  // "Just want you to trust me, I already trust you",
  // "You're so upset with me but I'm so obsessed with you!",
  // "I don't know where I am... but... I'm so in love with you!!",
  // "Never in the spotlight, always in the background, I'm about to pass out so just give me a kiss now",
  // "Cut my skull with your used razors, carve a heart I'll see you later"
];

var splash = ""; // This variable will hold the splash text
var trackimgs = "Recent LastFM activity: <br>"; // This variable will hold LastFM images
var allowlastfmintergration = true; // Control the LastFM integration

document.getElementById("splash").innerHTML = "Loading...";
document.getElementById("trackimgs").innerHTML = "Loading...";

// My LastFM info, please use your own credentials if you copy this
var lastfm_username = 'eveisinsane';
var lastfm_apiKey = '9d9d0986fbd8191b0f60c42032ac6ac8';
var lastfm_apiurl = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" +
  lastfm_username + "&api_key=" + lastfm_apiKey + "&format=json&limit=8";

// Using XMLHttpRequest (instead of fetch and async/await) for older browsers
function getSplashVariable() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", lastfm_apiurl, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          var data = JSON.parse(xhr.responseText);
          var track = data.recenttracks.track[0];
          if (track && track["@attr"] && track["@attr"].nowplaying) {
            var artist = track.artist["#text"];
            var songTitle = track.name;
            splash = "🎵 " + artist + " - " + songTitle;
          } else {
            var randnumber = Math.floor(Math.random() * splashes.length);
            splash = splashes[randnumber];
          }
          for (var i = 0; i < 8; i++) {
            if (data.recenttracks.track[i].image.length > 1) {
              trackimgs += "<a href=\"" + data.recenttracks.track[i].url + "\"> <img width=\"60px\" alt=\"" +
                data.recenttracks.track[i].artist["#text"] + " - " + data.recenttracks.track[i].name +
                "\" src=\"" + data.recenttracks.track[i].image[1]["#text"] + "\"></a> ";
            }
          }
          trackimgs += "<br>";
        } catch (e) {
          if (window.console && console.error) {
            console.error("Error parsing LastFM data: ", e);
          }
          splash = "Splash error, check console";
          trackimgs = "";
        }
      } else {
        if (window.console && console.error) {
          console.error("Error getting splash: ", xhr.statusText);
        }
        splash = "Splash error, check console";
        trackimgs = "";
      }
      document.getElementById("splash").innerHTML = splash;
      document.getElementById("trackimgs").innerHTML = trackimgs;
    }
  };
  xhr.send();
}

if (allowlastfmintergration === true) {
  getSplashVariable();
} else {
  document.getElementById("splash").innerHTML = "LastFM integration has been temporarily disabled. DM me for more information";
  document.getElementById("trackimgs").innerHTML = "";
  if (window.console && console.log) {
    console.log("Info: The killswitch for LastFM integration is on. Call getSplashVariable() to bypass this.");
  }
}

function discord() {
  alert("My discord name is @lenenjoyer , I also have an account for Pxls called @greenwizardfan");
}

function createAd() {
  var ads = ["3d.png", "bfdionyowrist.png", "iceos.png", "dhillygamead.png", "hfjone_whtthefuck.png"];
  var randnumber2 = Math.floor(Math.random() * ads.length);
  var adlinks = [
    "https://3d.bottom.monster",
    "https://gallery.fitbit.com/details/5049cf2d-61d5-47c3-92a4-b7f6858c0443",
    "/iceos",
    "https://dhillygame.co.uk",
    "https://gallery.fitbit.com/details/f8d7c96d-a68c-4695-abda-c1d5c27b1067"
  ];
  document.getElementById("showcasethingy").innerHTML = "<a href='" + adlinks[randnumber2] + "'><img width='260px' height='260px' src='/media/showcase/" + ads[randnumber2] + "'></a>";
}

createAd();

// Cross-browser event listener helper
function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, callback);
  }
}

addEvent(document, "mouseover", function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;
  if (target && target.tagName === "IMG") {
    document.getElementById("currentselect").innerHTML = "<img alt=\"<img src='media/pointer.png'>\" src='media/pointer.png'>: " + target.alt + "<br>";
  }
});
