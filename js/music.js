const musics = [
  {
    img: "img/mu-1.jpg",
    music: "The way to get started is to quit talking and begin doing.",
    singer: "Walt Disney",
  },
  {
    img: "img/mu-1.jpg",
    music: "Life is what happens when you're busy making other plans.",
    singer: "John Lennon",
  },
  {
    img: "img/mu-1.jpg",
    music:
      "The world is a book and those who do not travel read only one page.",
    singer: "Saint Augustine",
  },
  {
    img: "img/mu-1.jpg",
    music: "Life is either a daring adventure or nothing at all.",
    singer: "Helen Keller",
  },
  {
    img: "img/mu-1.jpg",
    music: "To Travel is to Live",
    singer: "Hans Christian Andersen",
  },
  {
    img: "img/mu-1.jpg",
    music: "Only a life lived for others is a life worthwhile.",
    singer: "Albert Einstein",
  },
  {
    img: "img/mu-1.jpg",
    music: "You only live once, but if you do it right, once is enough.",
    singer: "Mae West",
  },
  {
    img: "img/mu-1.jpg",
    music: "Never go on trips with anyone you do ntot love.",
    singer: "Hemmingway",
  },
  {
    img: "img/mu-1.jpg",
    music: "We wander for distraction, but we travel for fulfilment.",
    singer: "Hilaire Belloc",
  },
  {
    img: "img/mu-1.jpg",
    music: "Travel expands the mind and fills the gap.",
    singer: "Sheda Savage",
  },
];

const img = document.querySelector("#music img");
const music = document.querySelector("#music span:nth-child(2)");
const singer = document.querySelector("#music span:nth-child(3)");
const todaysMusic = musics[Math.floor(Math.random() * musics.length)];

img.src = todaysMusic.img;
music.innerText = todaysMusic.music;
singer.innerText = todaysMusic.singer;
