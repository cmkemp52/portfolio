//Vanta implimentation for starting div's background
VANTA.BIRDS({
    el: "#startDiv",
    color1: 0x4b4f57,
    color2: 0xcacaca,
    colorMode: "lerpGradient",
    birdSize: 1.30,
    separation: 40.00,
    alignment: 30.00,
    cohesion: 23.00,
    quantity: 4.00,
    backgroundAlpha: 0.84
})

const libraryTab = document.querySelector("#linkLibrary");
const busTab = document.querySelector("#linkBus");
const vitaTab = document.querySelector("#linkVita");

const librarySelect = document.querySelector(".libraryDiv");
const busSelect = document.querySelector(".busDiv");
const vitaSelect = document.querySelector(".vitaDiv");


libraryTab.addEventListener("click", function(){
    librarySelect.setAttribute("id","libraryShow");
    busSelect.setAttribute("id","busHide");
    vitaSelect.setAttribute("id","vitaHide");
});
busTab.addEventListener("click", function(){
    librarySelect.setAttribute("id","libraryHide");
    busSelect.setAttribute("id","busShow");
    vitaSelect.setAttribute("id","vitaHide");
});
vitaTab.addEventListener("click", function(){
    librarySelect.setAttribute("id","libraryHide");
    busSelect.setAttribute("id","busHide");
    vitaSelect.setAttribute("id","vitaShow");
});