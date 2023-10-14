console.log("welcome to spotify")

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "salam-e-ishq", filePath: "songs/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "salam-e-ishq", filePath: "songs/2.mp3",coverPath: "cover/2.jpg"},
    {songName: "salam-e-ishq", filePath: "song/3.mp3",coverPath: "cover/3.jpg"},
    {songName: "salam-e-ishq", filePath: "song/4.mp3",coverPath: "cover/4.jpg"},
    {songName: "salam-e-ishq", filePath: "song/5.mp3",coverPath: "cover/5.jpg"},
    {songName: "salam-e-ishq", filePath: "song/6.mp3",coverPath: "cover/6.jpg"},
    {songName: "salam-e-ishq", filePath: "song/7.mp3",coverPath: "cover/7.jpg"},
    {songName: "salam-e-ishq", filePath: "song/8.mp3",coverPath: "cover/8.jpg"},
    {songName: "salam-e-ishq", filePath: "song/9.mp3",coverPath: "cover/9.jpg"},
]












// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
})



//listen to events
audioElement.addEventListener('timeupdate', ()=>{
        console.log('timeupdate');


//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})