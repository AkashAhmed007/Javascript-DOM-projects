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
        generateToastMsg(``);
    })
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);
        generateToastMsg(`Your color : ${output.value} copied`); 
        output.value = "";
    })
    output.addEventListener('keyup', function(e){
        let colorCode = e.target.value;
        if(colorCode && isValidHex(colorCode)){
            root.style.backgroundColor = colorCode;
        }  
    })
 }
 function generatHEXColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
function generateToastMsg(msg){
    const div = document.createElement('div');
    div.innerText = msg;
    document.body.appendChild(div);
    div.classList.add('text-2xl','bg-green-400','w-60','h-24','border-2','fixed','top-8','right-4','p-4','mt-10');
}
function isValidHex(color){
   if(color.length !== 7){
    return false;
      } else if(color[0] !== '#'){
        return false;
      }   
    return true;
}