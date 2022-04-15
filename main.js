let currentMusic = 0
let musicName =document.querySelector(".music-name")
let musicArtist = document.querySelector(".music-artist")
let musicImg = document.querySelector(".music-img")
let musicRange = document.querySelector(".music-range")
let timeStart = document.querySelector(".time-start")
let timeEnd = document.querySelector(".time-end")
let back = document.querySelector(".back")
let controlBtn = document.querySelector(".control-btn")
let next = document.querySelector(".next")
let audio = document.querySelector("#audio")
controlBtn.addEventListener("click", () =>{
    if(controlBtn.className.includes("pause")){
        audio.play()
    }else{
        audio.pause()
    }
    controlBtn.classList.toggle("pause")
    musicImg.classList.toggle("play")
})
let allData = (i) =>{
    musicRange.value = 0
    let song = songs[i]
    currentMusic = i
    musicName.innerHTML = song.name
    musicArtist.innerHTML = song.artist
    musicImg.style.backgroundImage = `url("${song.img}")`
    audio.src = song.path
    timeStart.innerHTML = "00:00"
    setTimeout(() => {
        musicRange.max = audio.duration
        timeEnd.innerHTML = formatTime(audio.duration)
    }, 300);
}
allData(0)
const formatTime = (time) => {
    let min = Math.floor(time / 60)
    if(min < 10){
        min = `0${min}`
    }
    let secande = Math.floor(time % 60)
    if(secande < 10){
        secande = `0${secande}`
    }
    return `${min} : ${secande}`
}
setInterval(() => {
    musicRange.value = audio.currentTime
    timeStart.innerHTML = formatTime(audio.currentTime)
    if(Math.floor(audio.currentTime) == Math.floor(musicRange.max))
    next.click()
},300);
musicRange.addEventListener("change", () =>{
    audio.currentTime = musicRange.value
})
let containue = () =>{
    audio.play()
    controlBtn.classList.remove("pause")
    musicImg.classList.add("play")
}
next.addEventListener("click", () =>{
    if(currentMusic >= songs.length - 1){
        currentMusic = 0
    }else{
        currentMusic++
    }
    allData(currentMusic)
    containue()
})
back.addEventListener("click", () =>{
    if(currentMusic <= 0){
        currentMusic = songs.length - 1
    }else{
        currentMusic--
    }
    allData(currentMusic)
    containue()
})
let searchBtn = document.getElementById("search-btm")
let search = document.getElementById("search-formm")
searchBtn.addEventListener("click", ()=>{
    search.classList.toggle("display")
})
close.addEventListener("click", ()=>{
    search.classList.toggle("hide")
})








