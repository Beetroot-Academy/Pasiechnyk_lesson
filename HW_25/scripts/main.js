/*1.Створити сторінку, що показує нумерований список пісень: */

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

let openPlayList = document.querySelector('.first_task');
let songList = document.createElement('ul');
openPlayList.append(songList);

playList.forEach((element) => {
	let songListItem = document.createElement('li');
	songListItem.textContent = `${element.author} - ${element.song}`;
	songList.append(songListItem);
});

/*2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
На модальном вікні повинен бути текст і кнопка "Закрити". 
Спочатку модальне вікно не відображається. 
При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає. */

let openButton = document.querySelector('.btn_open');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.btn_close');

openButton.addEventListener('click', function () {
	modal.classList.add('active');
});

closeButton.addEventListener('click', function () {
	modal.classList.remove('active');
});

/*3. Створити HTML-сторінку зі світлофором і кнопкою, 
яка перемикає світлофор на наступний колір. */

let redLight = document.querySelector('.traffic__red');
let yellowLight = document.querySelector('.traffic__yellow');
let greenLight = document.querySelector('.traffic__green');
let color = 0;

function changeColorTraffic() {
    if (color === 0) {
        redLight.classList.toggle(`active`);
        color++;
        return;
    } else if (color === 1) {
        redLight.classList.toggle(`active`);
        yellowLight.classList.toggle(`active`);
        color++;
        return;
    } else if (color === 2) {
        yellowLight.classList.toggle(`active`);
        greenLight.classList.toggle(`active`);
        color++;
        return;
    } else {
        greenLight.classList.toggle(`active`);
        color = 0;
        return;
    }
}