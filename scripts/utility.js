function hideElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}