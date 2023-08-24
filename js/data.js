document.addEventListener('DOMContentLoaded', function(){
    let localStorageTest = localStorage.getItem ("input");
   document.getElementById("data").innerHTML = localStorageTest;
});