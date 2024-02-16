window.onload = ()=>{
    main();
 }
 
 function main(){
    const root = document.getElementById("root");
    const changeBtn = document.getElementById("change-btn");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copy");
    
    changeBtn.addEventListener('click',function(){
        const bgcolor = generatHEXColor();
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
    })
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);
    })

 }
 function generatHEXColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}