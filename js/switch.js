function arts(){
    window.location.href = '../art.html';
}
function culture(){
    window.location.href = '../culture.html';
}
function heritage(){
    window.location.href = '../heritage.html';
}
function wonders(){
    window.location.href = '../wonder.html';
}
document.querySelector('.card1').onclick = arts;
document.querySelector('.card2').onclick = culture;
document.querySelector('.card3').onclick = heritage;
document.querySelector('.wonders').onclick = wonders;