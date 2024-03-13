// function play(){
//     //hide the home screen
//     const homeSection=document.getElementById('home');
//    homeSection.classList.add('hidden');
//    //show the playground
//    const playGround=document.getElementById('play-ground');
//    playGround.classList.remove('hidden');
// }
function continueGame(){
    const alphabet= getRandomAlphabet();
    console.log('your random alphabet: ',alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    addBackgroundcolorById(alphabet);
}
function play(){
    hideElementbyId('home');
    showElementbyId('play-ground');
    continueGame();
    
}