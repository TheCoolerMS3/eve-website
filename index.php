<!DOCTYPE html>
<head>
  <title>Eve's Website: PHP Edition</title>
  <link rel="shortcut icon" href="favicon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mobile.css" media="(max-width: 1199px)">
  <link rel="stylesheet" href="style.css" media="(min-width: 1200px)">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
  <script src="script.js" defer></script>
</head>
<body>
  <div class="sitebox">
    <div class="left">
      <a href="/"><img data-hover="<b>Eve</b><br>Age: 17<br>Gender: Female<br>Current interests: Splatoon 3, Homestuck, hfjONE, Lemon Demon" class="centerAdaptiveImg" width="200" src="/media/evecooltext.png"></a>
      <marquee>
        <?php
          $options = ["I've been Google image searching for my really cool wig.", "Welcome back to Trench!", "Welcome to my personal website!"];
          $choice = $options[array_rand($options)];
          echo "$choice";
        ?>
      </marquee>
      Recent LastFM activity:<br>
      <?php
        $lastfm = json_decode(file_get_contents("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=eveisinsane&api_key=9d9d0986fbd8191b0f60c42032ac6ac8&format=json&limit=8"), true);
        $tracks = $lastfm['recenttracks']['track'];
        foreach ($tracks as $track) {
        $image = $track['image'][2]['#text'];
        $album = $track['album']['#text'];
        $name = $track['name'];
        $url = $track['url'];
        $artist = $track['artist']['#text'];
        echo '<a href=' . $url . '><img src="' . $image . '" width="60px" data-hover="' . $name . '<br>On: ' . $album . '<br>By: ' . $artist . '"></a> ';
            $count++;
        if ($count >= 8) {
            break;
        }
    }
    ?>
  <div class="showcase">
    <?php
          $options = ["<a href='https://gallery.fitbit.com/details/5049cf2d-61d5-47c3-92a4-b7f6858c0443'><img width='260px' height='260px' src='/media/showcase/bfdionyowrist.png'></a>", "<a href='/iceos'><img width='260px' height='260px' src='/media/showcase/iceos.png'></a>", "<a href='htt[s://mintydev.games/glasssea'><img width='260px' height='260px' src='/media/showcase/glassseashowcase.png'></a>", "<a href='https://mintydev.games/dhilly6'><img width='260px' height='260px' src='/media/showcase/dhillygamead.png'></a>", "<a href='https://gallery.fitbit.com/details/f8d7c96d-a68c-4695-abda-c1d5c27b1067'><img width='260px' height='260px' src='/media/showcase/hfjone_whtthefuck.png'></a>"];
          $choice = $options[array_rand($options)];
          echo "$choice";
        ?>
  </div>
      <a href="https://eve.motorcycles"><img data-hover="<b>Eve's Button</b><br>Link to my website with this if you want!" src="media/eve.png"></a>
      <a href="https://en.wikipedia.org/wiki/Brat_(album)"><img data-hover="<b>BRAT</b><br>This button is dedicated to the 2024 album 'BRAT' by Charli XCX." src="media/bratbuttonbyeve.gif"></a>
      <details>
        <summary style="cursor: pointer;">Pals!!</summary>
        <a href="https://toewizard.online"><img data-hover="<b>Azi</b><br>My best friend, they're honestly the coolest person I've ever met." src="/media/azi.png"></a>
        <a href="http://ivanmarkov.net"><img data-hover="<b>Ivan / LibreIvan</b><br>My first friend, we have a lot of history together and honestly he's awesome." src="/media/marchintosh.png"></a>
        <a href="https://nek0zyx.lgbt.sh/"><img data-hover="<b>Sam / Nek0zyx / kevadesu</b><br>A fellow developer friend of mine! We go a long way back, and she has some cool projects." src="/media/sam.webp"></a>
        <img data-hover="<b>Earnest Opal</b><br>The most important person on Pxls." src="/media/erendgosts.gif">
        <a href="http://empyrean.lol"><img data-hover="<b>Empyrean</b><br>A YouTuber I'm friends with! He's pretty cool!" src="media/empyreanlol.png"></a>
        <a href="https://greenwizard.neocities.org/"><img data-hover="<b>Greenwizard</b><br>An underrated Pxls user." src="media/greenbutton.png"></a>
      </details>
    </div>
    <div class="middle">
      Socials:<br>
      <a href="https://www.youtube.com/@theoneandtrueeve"><img data-hover="<b>YouTube</b><br>Here I upload random projects of mine, with varying levels of quality." src="media/youtube.png"></a>
      <a href="https://open.spotify.com/user/2ybpn44qepw7tg6k3mm8h6k3o?si=2850cf2dbbb2457f"><img data-hover="<b>Spotify</b><br>I mainly use offline music players. However, I sometimes make playlists here with an odd mix of Lemon Demon, hyperpop, Rebzyyx, and god knows what else. If that's your thing then check my profile out!" src="media/spotify.png"></a>
      <a href="https://github.com/TheCoolerMS3/"><img data-hover="<b>GitHub</b><br>Here you can find scraps of source code for various projects of mine." src="media/github.png"></a>
      <a href="mailto:eve@bottom.monster"><img data-hover="<b>E-mail</b><br>I have tons of emails you can contact me at. <i>eve@bottom.monster</i> is probably the one I use the most, which means I'm doomed to pay for that domain forever. Oh well!" src="media/mail.png"></a>
      <a onclick="discord()"><img data-hover="<b>Discord</b><br>My discord name is <i>'lenenjoyer'</i>. If you would like to contact me about Pxls-related things, you may want my other account, <i>'greenwizardfan'</i>." style="cursor: pointer;" src="media/discord.png"></a><br>
      Site:<br>
      <a href="rand/"><img data-hover="<b>/rand/</b><br>/rand/ is a directory where I put random things I fancy hosting." src="media/rand.png"></a><br>
      2025 projects:<br>
      <a href="https://mintydev.games/dhilly6"><img data-hover="<b>Dhilly Game 6 Remake</b><br>Released: <img src='media/2025.png'><br>Tools used: Aseprite, GB Studio 4<br>Languages: GB Studio Visual, GBVM<br>Platform: Game Boy, Game Boy Color, SGB<br>For Hack Club's Arcade and High Seas events<br>Open Source<br><br><img src='media/dhillygame6screenshot.png'>" width="60px" height="60px" src="media/dhilly6n.png"></a>
      <a href="/"><img data-hover="<b>Eve's Website 3</b><br>Released: <img src='media/2025.png'><br>Tools used: GNU Nano, Aseprite<br>Languages: PHP, CSS, JavaScript<br>Platform: Web<br>For Hack Club Summer of Making<br>Open Source<br><br><img width='125px' src='media/evesitescreenshot.png'>" src="media/evesite60px.png"></a>
      <a href="https://www.youtube.com/watch?v=RkwXOOBeTpc"><img data-hover="<b>I've Got Some Falling To Do Flash Animation</b><br>Released: <img src='media/2025.png'><br>Tools used: Adobe Animate 2024<br>Platform: Adobe Flash<br>For college<br>Free<br><br><img src='media/fallingscreenshot.png'>" width="60px" height="60px" src="media/falling.png"></a>
      <a href="https://gallery.fitbit.com/details/6ac1c439-1c07-4190-a9a0-84fb2b682480"><img data-hover="<b>Jade Harley Clockface</b><br>Released: <img src='media/2025.png'><br>Tools used: Visual Studio Code, Aseprite, Fitbit SDK 6<br>Languages: JavaScript<br>Platform: Fitbit OS 5<br>Free" src="https://gallery-assets.fitbit.com/public/NM0kDYGaCY0WBqNlAIJnNnJhC58aNmotNn3qAIBsC2GXCIOZDLGWDF/BIGWNYWXD2ZhCL4YOHooBq3tAIVrO27hBYNoB5FoCLCWNq7l@1x.png" width="60px" height="60px"></a>
      <a href="https://toewizard.online"><img data-hover="<b>azi's website</b><br>Released: <img src='media/2025.png'><br>Tools used: Visual Studio Code<br>Languages: HTML, CSS, JavaScript<br>Collaborators: <img height='20px' src='media/azi.png'><br>Platform: Web<br>Made for my friend Azi (duh)" src="https://toewizard.online/media/profile.jpeg"></a>
      <a href="https://mintydev.games/glasssea"><img data-hover="<b>The Glass Sea</b><br>Release: TBA<br>Tools used: GameMaker Studio 2 Professional, Aseprite, others<br>Languages: GameMaker Language<br>Collaborators: <img height='20px' src='media/azi.png'> <img height='20px' src='media/marchintosh.png'><br>Platform: Windows, MacOS, Linux, iOS, Android<br><br><img width='390px' src='media/glassseas5.jpg'>" width="60px" height="60px" src="media/glasssea.gif"></a>
      <details>
        <summary style="cursor: pointer;">2024 projects:</summary>
        <a href="https://scratch.mit.edu/projects/1006574455/"><img data-hover="<b>Ice OS 2024</b><br>Released: <img src='media/2024.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" width="60px" height="60px" src="media/iceos2024.png"></a>
        <a href="https://old.eve.motorcycles"><img data-hover="<b>Eve's Website 2</b><br>Released: <img src='media/2024.png'><br>Tools used: Visual Studio Code, Aseprite, Adobe Photoshop 2015<br>Language: HTML, CSS, JavaScript<br>Platform: Web<br>Made for Hack Club's Arcade and High Seas<br>Open Source" width="60px" height="60px" src="media/evesite60px.png"></a>
        <a href="https://gallery.fitbit.com/details/5049cf2d-61d5-47c3-92a4-b7f6858c0443"><img
            data-hover='<b>Battle For Dream Island Clockface</b><br>Released: <img src="media/2024.png"><br>Tools used: Fitbit SDK 6, Fitbit SDK 7, Aseprite, Visual Studio Code<br>Language: JavaScript<br>Platform: Fitbit OS 5, Fitbit SDK 7<br>Credit: Battle For Dream Island by jacknjellify<br>Open Source'
            width="60px" height="60px"
            src="https://gallery-assets.fitbit.com/public/NM0kDaFnCYBtBYSXAISWB2VhC5FqCmosC2RrAL3pBnNoOI7pBnW_Ck/OYCaB2_XOL7hC2FnO1ooCI.lAIVmC2BhBYBnO5NlOY7nOLJt@1x.png"></a>
        <a href="https://gallery.fitbit.com/details/f8d7c96d-a68c-4695-abda-c1d5c27b1067"><img
            data-hover='<b>ONE Clockface</b><br>Released: <img src="media/2024.png"><br>Tools used: Fitbit SDK 6, Fitbit SDK 7, Aseprite, Visual Studio Code<br>Language: JavaScript<br>Platform: Fitbit OS 5, Fitbit SDK 7<br>Credit: ONE by Cheesy hfj<br>Made for Hack Club High Seas<br>Open Source'
            width="60px" height="60px"
            src="https://gallery-assets.fitbit.com/public/NM0kDY0YCYRpOY8YALGYCYFhC2.rCmotBYC_AL4YCYVqOYBsD2KXCF/OYVqD2BrNaNhBnVpCHooB2FrAL7sBIBhO5JmCn0aOI.kDIBm@1x.png"></a>
        <a href="/iceos"><img data-hover="<b>Ice OS Winter 2024</b><br>Released: <img src='media/2024.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" width="60px" height="60px" src="media/iceoswinter2024.png"></a>
        <a href="https://scratch.mit.edu/projects/1113760345/"><img
            data-hover="<b>Phone Designs</b><br>Released: <img src='media/2024.png'><br>Tools used: Scratch 3<br>Use with credit"
            src="media/phones.png" width="60px"></a>
      </details>
      <details>
        <summary style="cursor: pointer;">2023 projects:</summary>
        <a href="https://reallyold.eve.motorcycles"><img data-hover="<b>Eve's Website 1</b><br>Released: <img src='media/2023.png'><br>Tools used: Neocities, Photoshop<br>Languages: HTML, CSS<br>Platform: Web<br>Open Source<br>" width="60px" height="60px" src="media/evesiteold.png"></a>
        <a href="https://mintydev.games/2021"><img data-hover="<b>Dhilly Game 6</b><br>Released: <img src='media/2023.png'><br>Tools used: GB Studio 3.1, Aseprite, Pixilart, Microsoft Paint, Visual Studio Code<br>Language: GB Studio Visual, Manual .gbsproj Editing<br>Collaborators: StanDX<br>Platform: Game Boy Color<br>Free<br>" width="60px" height="60px" src="media/dhilly6o.png"></a>
      </details>
      <details>
        <summary style="cursor: pointer;">2022 projects:</summary>

        <a href="https://scratch.mit.edu/projects/646068686/"><img
            data-hover="<b>Ice OS 2022</b><br> Released: <img src='media/2022.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            width="60px" height="60px" src="media/iceos2022.png"></a>
        <a href="https://www.youtube.com/watch?v=1CLgqzdS85M"><img width="60px" height="60px"
            data-hover="<b>Len Non-Breath Oblige Edit</b><br>Released: <img src='media/2022.png'><br>Tools used: Hatsune Miku: Project DIVA F 2nd<br>PSN: TheCoolerMS3<br>Free"
            src="media/lenthing.png"></a>
        <a href="https://mikuam.uk"><img
            data-hover="<b>Miku and More</b><br>Started in: <img src='media/2022.png'><br>Tools used: Pxls, Discord, Aseprite, others<br>Collaborators: TheBestYouHaveEverSeen, many others"
            src="media/mikuam.png"></a>
        <a href="https://gallery.fitbit.com/details/369d1d82-bca7-4a96-a5d8-69db535eb483"><img
            data-hover='<b>Lagtrain Clockface</b><br>Released: <img src="media/2022.png"><br>Tools used: Fitbit Studio, Fitbit SDK 4, Fitbit SDK 6, Fitbit SDK 7, Microsoft Paint, Fitbit Studio, Visual Studio Code<br>Languages: JavaScript<br>Platform: Fitbit OS 4, Fitbit OS 5, Fitbit SDK 7<br>Credit: Osage-chan by ぬくぬくにぎりめし<br>Open Source'
            src="media/fitbit.png"></a>
      </details>
      <details>
        <summary style="cursor: pointer;">2021 projects:</summary>
        <a href="https://mintydev.games/2021"><img data-hover="<b>Dhilly Game</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 4, Microsoft Paint, others<br>Languages: GB Studio Visual<br>Collaborators: <img height='20px' src='media/marchintosh.png'><br>Platform: Game Boy<br>Free" width="60px" height="60px" src="media/dhilly1.png"></a>
        <a href="https://scratch.mit.edu/projects/482927012/"><img data-hover="<b>Ice OS Lumenistic</b><br>Released: <img src='media/2021.png'><br>Tools used: Scratch 3<br>Languages: Scratch 3<br>Collaborators: ProstoWindows<br>Platform: Scratch 3<br>Open Source" width="60px" height="60px" src="media/lumenistic.png"></a>
        <a href="https://mintydev.games/2021"><img data-hover="<b>Dhilly Game 2</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 4, Microsoft Paint<br>Languages: GB Studio Visual<br>Platform: Game Boy Color<br>Open Source" width="60px" height="60px" src="media/dhilly2.png"></a>
        <a href="https://drive.google.com/file/d/1nRlYcc9IX8VI6wFUOfGKP1bL4KpHWyLb/view?usp=sharing"><img data-hover="<b>MzDesigns Game</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 4, Microsoft Paint<br>Languages: GB Studio Visual<br>Platform: Game Boy<br>Open Source" width="60px" height="60px" src="media/mzdesigns.png"></a>
        <a href="https://mintydev.games/2021"><img
            data-hover="<b>Dhilly Game 3</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 4, GB Studio 2 Beta 5, GB Studio 3, Microsoft Paint, Pixilart<br>Collaborators: StanDX<br>Platform: Game Boy Color<br>Open Source"
            width="60px" height="60px" src="media/dhilly3.png"></a>
        <a href="https://mintydev.games/2021"><img
            data-hover="<b>Dhilly Game 4</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 4, Microsoft Paint<br>Platform: Game Boy Color<br>Open Source"
            width="60px" height="60px" src="media/dhilly4.png"></a>
        <a href="https://mintydev.games/2021"><img data-hover="<b>Dhilly Game 5</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 5, GB Studio 3, Microsoft Paint, Pixilart<br>Collaborators: StanDX<br>Open Source" width="60px" height="60px" src="media/dhilly5.png"></a>
        <a href="https://scratch.mit.edu/projects/556939236"><img
            data-hover="<b>Ice OS 3rd Anniversary Edtion</b><br>Released: <img src='media/2021.png'><br>Tools used: Scratch 3<br>Languages: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            width="60px" height="60px" src="media/iceos3rd.png"></a>
        <a href="https://github.com/TheCoolerMS3/MS3-Game"><img data-hover="<b>MS3 Game</b><br>Released: <img src='media/2021.png'><br>Tools used: GB Studio 2 Beta 5, GB Studio 3, Microsoft Paint, Pixilart<br>Open Source" width="60px" height="60px" src="media/ms3game.png"></a>

        
      </details>
      <details>
        <summary style="cursor: pointer;">2020 projects:</summary>
        <a href="https://scratch.mit.edu/projects/374557938/"><img width="60px" height="60px" data-hover="<b>Ice OS Finale</b><br>Released: <img src='media/2020.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/finale.png"></a>
        <a href="https://scratch.mit.edu/projects/452220337/"><img width="60px" height="60px" data-hover="<b>Ice OS Version 23</b><br>Released: <img src='media/2020.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/iceos23.png"></a>
    </details>
      <details>
        <summary style="cursor: pointer;">2019 projects:</summary>
        <a href="https://scratch.mit.edu/projects/303241315"><img width="60px" height="60px"
            data-hover="<b>Ice OS Spring 2019</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/spring2019.png"></a>
        <a href="https://scratch.mit.edu/projects/306005754/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Summer 2019</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/summer2019.png"></a>
        <a href="https://scratch.mit.edu/projects/313717483/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Summer 2019 Pack 2</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/summer20192.png"></a>
        <a href="https://scratch.mit.edu/projects/314454882/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Adaptive</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/adaptive.png"></a>
        <a href="https://scratch.mit.edu/projects/315887595/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Pro</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/pro.png"></a>
        <a href="https://scratch.mit.edu/projects/317200542/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Pro Version 2</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/pro2.png"></a>
        <a href="https://scratch.mit.edu/projects/318570837/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Gamer's Edition</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"
            src="media/gamersedition.png"></a>
        <a href="https://scratch.mit.edu/projects/320402325/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Dark</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/dark.png"></a>
        <a href="https://scratch.mit.edu/projects/323909023/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Anniversary Edition</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/anniversary.png"></a>
        <a href="https://scratch.mit.edu/projects/324562526/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Anniversary Edition 2</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/anniversary2.png"></a>
        <a href="https://scratch.mit.edu/projects/330585848/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Autumn Fall 2019</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/autumnfall2019.png"></a>
        <a href="https://scratch.mit.edu/projects/332448209/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Autumn Fall 2019 Version 2</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/autumnfall20192.png"></a>
        <a href="https://scratch.mit.edu/projects/334128752/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Your Ideas Edition</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/yourideasedition.png"></a>
        <a href="https://scratch.mit.edu/projects/339082922/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Premium</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source"" src="media/premium.png"></a>
        <a href="https://scratch.mit.edu/projects/355500567/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Winter 2019</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/winter2019.png"></a>
        <a href="https://scratch.mit.edu/projects/356629662/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Winter 2019 Version 2</b><br>Released: <img src='media/2019.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/winter20192.png"></a>
      </details>
      <details>
        <summary style="cursor: pointer;">2018 projects:</summary>
        <a href="https://scratch.mit.edu/projects/238867245"><img width="60px" height="60px"
            data-hover="<b>Ice OS 1</b><br>Released: <img src='media/2018.png'><br>Tools used: Scratch 2<br>Language: Scratch 2<br>Platform: Scratch 2<br>Open Source" src="media/iceos1.png"></a>
        <a href="https://scratch.mit.edu/projects/244121096/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Autumn Fall</b><br>Released: <img src='media/2018.png'><br>Tools used: Scratch 2<br>Language: Scratch 2<br>Platform: Scratch 2<br>Open Source" src="media/autumnfall.png"></a>
        <a href="https://scratch.mit.edu/projects/253378045/"><img width="60px" height="60px"
            data-hover="<b>Ice OS Winter</b><br>Released: <img src='media/2018.png'><br>Tools used: Scratch 3<br>Language: Scratch 3<br>Platform: Scratch 3<br>Open Source" src="media/winter.png"></a>
      </details>
    </div>
    <div class="right">
      <img class="centerAdaptiveImg" src="media/info.png">
      <span id="currentselect"><noscript>Enable JavaScript to use this cool information pane - or don't, I can't make you.</noscript></span>
    </div>
</body>
