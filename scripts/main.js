//Vanta implimentation for starting div's background
VANTA.BIRDS({
    el: "#start",
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

//projects tabs

const libraryTab = document.querySelector(".linkLibrary");
const busTab = document.querySelector(".linkBus");
const vitaTab = document.querySelector(".linkVita");

const librarySelect = document.querySelector(".libraryDiv");
const busSelect = document.querySelector(".busDiv");
const vitaSelect = document.querySelector(".vitaDiv");

libraryTab.addEventListener("click", function(){
    librarySelect.setAttribute("id","libraryShow");
    busSelect.setAttribute("id","projectHide");
    vitaSelect.setAttribute("id","projectHide");
    libraryTab.setAttribute("id","libraryLinkSelect");
    busTab.setAttribute("id","busLink");
    vitaTab.setAttribute("id","vitaLink");
});
busTab.addEventListener("click", function(){
    librarySelect.setAttribute("id","projectHide");
    busSelect.setAttribute("id","busShow");
    vitaSelect.setAttribute("id","projectHide");
    libraryTab.setAttribute("id","libraryLink");
    busTab.setAttribute("id","busLinkSelect");
    vitaTab.setAttribute("id","vitaLink");
});
vitaTab.addEventListener("click", function(){
    librarySelect.setAttribute("id","projectHide");
    busSelect.setAttribute("id","projectHide");
    vitaSelect.setAttribute("id","vitaShow");
    libraryTab.setAttribute("id","libraryLink");
    busTab.setAttribute("id","busLink");
    vitaTab.setAttribute("id","vitaLinkSelect");
});



if(window.innerWidth > 768){
    document.querySelector(".busImage").setAttribute("src", "images/bustalker.png")
    document.querySelector(".vitaImage").setAttribute("src", "images/myvitalog.png")
}
window.addEventListener("resize", ()=>{
    if(window.innerWidth > 768){
        document.querySelector(".busImage").setAttribute("src", "images/bustalker.png")
        document.querySelector(".vitaImage").setAttribute("src", "images/myvitalog.png")
    }
    if(window.innerWidth < 768){
        document.querySelector(".busImage").setAttribute("src", "images/bustalkerWide.png")
        document.querySelector(".vitaImage").setAttribute("src", "images/myvitalogWide.png")
    }
})