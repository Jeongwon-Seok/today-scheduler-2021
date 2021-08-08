const musics = [
  {
    music: "The way to get started is to quit talking and begin doing.",
    singer: "Walt Disney",
  },
  {
    music: "Life is what happens when you're busy making other plans.",
    singer: "John Lennon",
  },
  {
    music:
      "The world is a book and those who do not travel read only one page.",
    singer: "Saint Augustine",
  },
  {
    music: "Life is either a daring adventure or nothing at all.",
    singer: "Helen Keller",
  },
  {
    music: "To Travel is to Live",
    singer: "Hans Christian Andersen",
  },
  {
    music: "Only a life lived for others is a life worthwhile.",
    singer: "Albert Einstein",
  },
  {
    music: "You only live once, but if you do it right, once is enough.",
    singer: "Mae West",
  },
  {
    music: "Never go on trips with anyone you do ntot love.",
    singer: "Hemmingway",
  },
  {
    music: "We wander for distraction, but we travel for fulfilment.",
    singer: "Hilaire Belloc",
  },
  {
    music: "Travel expands the mind and fills the gap.",
    singer: "Sheda Savage",
  },
];

const music = document.querySelector("#music span:first-child");
const singer = document.querySelector("#music span:last-child");
const todaysMusic = musics[Math.floor(Math.random() * musics.length)];

music.innerText = todaysMusic.music;
singer.innerText = todaysMusic.singer;
