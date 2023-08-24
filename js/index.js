document.addEventListener('DOMContentLoaded', function(){
    document.getElementById ("inputText").addEventListener("input", ()=> {
       let contenido = document.getElementById("inputText").value;
        localStorage.setItem ("input", contenido);
    })
});