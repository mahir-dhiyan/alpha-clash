function hideElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//adding orange background color
function addBackgroundcolorById(elementId){
     const element = document.getElementById(elementId);
     element.classList.add('bg-orange-400');
}
//removing orange background color
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getRandomAlphabet(){
    //get or create and alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    //get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet=alphabets[index];
    // console.log(alphabet, index);
    return alphabet;
}
function getTextElementValuebyId(elementId){
    const element = document.getElementById(elementId);
    const elementText=element.innerText;
    const value = parseInt(elementText);
    return value;
}
function setTextElementValuebyId(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText=value;

}
function getElementTextbyId(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
    
}