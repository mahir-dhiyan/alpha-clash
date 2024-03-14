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
    //Stop the game!!!!!!!!!!!!!!!!!!!!!!
    if(playerPressed==='Escape'){
        gameOver();
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet , playerPressed);
    //Check whether correct key is pressed or not
    if(playerPressed===expectedAlphabet){
        // console.log('You get a pont');
        // console.log('you have pressed the key correctly',expectedAlphabet);
     
     
        //update score--------------------------------
    //   const currentScoreElement = document.getElementById('current-score');
    //   const currentScoreText = currentScoreElement.innerText;
    //   const currentScore = parseInt(currentScoreText);
    //   console.log(currentScore);
    // const newScore = currentScore +1; 
    //   currentScoreElement.innerText=newScore;
        const currentScore=getTextElementValuebyId('current-score');
        const newScore = currentScore +1; 
            setTextElementValuebyId('current-score',newScore)

        //Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You lose a point');
// ----------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // let currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife=currentLife -1;
        // currentLifeElement.innerText = newLife;
//  -------------------------------------------------------------------------
      const currentLife=getTextElementValuebyId('current-life');
      const newLife = currentLife -1;
      setTextElementValuebyId('current-life' , newLife);
      if(newLife===0){
        gameOver();

      }
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
    hideElementbyId('final-score');
    showElementbyId('play-ground');
    setTextElementValuebyId('current-life', 5);
    setTextElementValuebyId('current-score', 0);
    continueGame();
    
}
function gameOver(){
    hideElementbyId('play-ground');
    showElementbyId('final-score');
    //Update final score
    const lastScore = getTextElementValuebyId('current-score');
    console.log(lastScore);
    setTextElementValuebyId('last-score', lastScore);
    //clear the background of last alphabet
    // removeBackgroundColorById('current-alphabet');
    const currentAlphabet = getElementTextbyId('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}