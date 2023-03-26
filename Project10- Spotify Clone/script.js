console.log("welcome to spotify");

//Initialise Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay'); //main play button
let myProgressBar = document.getElementById('myProgressBar'); //seekbar
let gif= document.getElementById('gif'); //gif
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Woman-Doja Cat", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Harleys in Hawai-Katy Perry", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Summer High-AP Dhillon", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tu Aake Dekhle-King", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Play Date-Melanie Martinez", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Heat Waves-Glass Animals", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Maan Meri Jaan-King", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ma Belle-AP Dhillon", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Brown Munde-AP Dhillon", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Kehndi Hundi Si-AP Dhillon", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

//Handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//to update seekbar when song plays
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

//to update the song when you drag seekbar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

//all buttons will become play
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


//when u click button, it will change to pause button and all other button will become play
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        //
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        //to play song on pressing the small play button
        audioElement.src = `songs/${songIndex+1}.mp3`;
        //
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0; //will start song from starting
        audioElement.play();//will play song
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){ //if last song playing , play first song
        songIndex = 0;
    }
    else{
        songIndex+= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;//will change the name of the song that is playing
    audioElement.currentTime = 0; //will start song from starting
    audioElement.play();//will play song
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('prev').addEventListener('click', ()=>{
    if(songIndex<=0){ 
        songIndex = 0;
    }
    else{
        songIndex-= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; //will start song from starting
    audioElement.play();//will play song
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

