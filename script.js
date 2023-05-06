const colorPreview = document.querySelector('.color-preview'),
    hexCode = document.querySelector('.hex-code');

const copy = document.getElementById('btn-copy');

// Hex Code Generator
  
const randomCode = () =>{
    
    let hexNum  = '#'+(Math.floor(Math.random()*16777215).toString(16));
    colorPreview.style.background = hexNum;
    hexCode.innerText = hexNum;

}
    
randomCode();
document.getElementById('btn-gen').addEventListener('click', randomCode);

// for copying text
copy.addEventListener('click', ()=> {
    navigator.clipboard.writeText(hexCode.innerText);

    if(copy.textContent == 'Copy'){
        copy.textContent = "Copied";
        setTimeout(function() {
            copy.textContent = "Copy";
        }, 1000);
    }
  
})  