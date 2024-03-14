// function play(){
//     //hide the home screen
//     const homeSection=document.getElementById('home');
//    homeSection.classList.add('hidden');
//    //show the playground
//    const playGround=document.getElementById('play-ground');
//    playGround.classList.remove('hidden');
// }
 function handleKeyboardButtonPressed(event){
    const playerPressed = event.key;
    console.log('Player Pressed: ', playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet , playerPressed);
    //Check whether correct key is pressed or not
    if(playerPressed===expectedAlphabet){
        console.log('You get a pont');
        console.log('you have pressed the key correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You lose a point');
    }
 }
 //Capture keyboard keypress
 document.addEventListener('keyup' , handleKeyboardButtonPressed);
function continueGame(){
    const alphabet= getRandomAlphabet();
    // console.log('your random alphabet: ',alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    addBackgroundcolorById(alphabet);
}
function play(){
    hideElementbyId('home');
    showElementbyId('play-ground');
    continueGame();
    
}