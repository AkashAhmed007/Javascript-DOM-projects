// project requirements: change the background color by generating random RGB color by clicking a button.

// step 1 :create onload handler.
 window.onload = ()=>{
    main();
 }
 function main(){
    const root =document.getElementById("root");
    const btn = document.getElementById("change-btn");
    
    btn.addEventListener('click',function(){
        const color = generatRGBColor();
        root.style.background = color;
    })
 }

//step 2: random color generator function
function generatRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

// step 3: collect all neccessary references
//step 4: handle the click event