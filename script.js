let pages = document.querySelectorAll(".page");
let currentPage = 0;
let progress = document.getElementById("progress");
let music = document.getElementById("music");

function showPage(index){
pages.forEach(page=>{
page.classList.remove("active");
});

pages[index].classList.add("active");
updateProgress();
}

function nextPage(){
if(currentPage < pages.length-1){
currentPage++;
showPage(currentPage);
}
}

function prevPage(){
if(currentPage>0){
currentPage--;
showPage(currentPage);
}
}

function updateProgress(){
progress.innerText = (currentPage+1) + " / " + pages.length;
}

function createHeart(){
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤";

heart.style.left = Math.random()*100+"vw";
heart.style.fontSize = Math.random()*20+10+"px";
heart.style.animationDuration = Math.random()*5+5+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);
}

setInterval(createHeart,300);

function toggleMusic(){
if(music.paused){
music.play();
}else{
music.pause();
}
}