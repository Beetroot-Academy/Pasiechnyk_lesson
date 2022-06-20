let playList = [
   {
       author: "LED ZEPPELIN",
       song: "STAIRWAY TO HEAVEN",
   },
   {
       author: "QUEEN",
       song: "BOHEMIAN RHAPSODY",
   },
   {
       author: "LYNYRD SKYNYRD",
       song: "FREE BIRD",
   },
   {
       author: "DEEP PURPLE",
       song: "SMOKE ON THE WATER",
   },
   {
       author: "JIMI HENDRIX",
       song: "ALL ALONG THE WATCHTOWER",
   },
   {
       author: "AC/DC",
       song: "BACK IN BLACK",
   },
   {
       author: "QUEEN",
       song: "WE WILL ROCK YOU",
   },
   {
       author: "METALLICA",
       song: "ENTER SANDMAN",
   },
];

function addPlayList(music) {
   let openPlayList = document.querySelector(`.first_task`);
   let songList = document.getElement('ul');
   openPlayList.append(songList);
   for (let i = 0; i < music.length; i++) {
      
   }
}
addPlayList(playList);
