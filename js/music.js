const musics = [
  {
    img: "img/mu-1.jpg",
    music: "Twist and Shout",
    singer: "The Beatles",
  },
  {
    img: "img/mu-2.jpg",
    music: "The Beatles' Hits",
    singer: "The Beatles",
  },
  {
    img: "img/mu-3.jpg",
    music: "The Beatles (No. 1)",
    singer: "The Beatles",
  },
  {
    img: "img/mu-4.jpg",
    music: "All My Loving",
    singer: "The Beatles",
  },
  {
    img: "img/mu-5.jpg",
    music: "Long Tall Sally",
    singer: "The Beatles",
  },
];

const img = document.querySelector("#music img");
const music = document.querySelector("#music span:nth-child(2)");
const singer = document.querySelector("#music span:nth-child(3)");
const todaysMusic = musics[Math.floor(Math.random() * musics.length)];

img.src = todaysMusic.img;
music.innerText = todaysMusic.music;
singer.innerText = todaysMusic.singer;
