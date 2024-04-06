//Grapping objects:
var disBtn = document.getElementById("count");
var decBtn = document.getElementById("decCount");
var resBtn = document.getElementById("reset");
var display = document.getElementById("disPlay");
var litScr = document.getElementById("lit");

// Initializing value:
var count = 0;

// Event for increment:
disBtn.addEventListener('click',function(){
    count = count + 1;
    document.getElementById("disPlay").innerHTML = count;
    console.log(count);
});

// Event for reset:
resBtn.addEventListener('click',function(){
    count = 0;
    document.getElementById("disPlay").innerHTML = count;
    console.log(count);
    
});

// Event for decrement:
decBtn.addEventListener('click',function(){
    if(count > 0)
    {
        count = count - 1;
        document.getElementById("disPlay").innerHTML = count;
        console.log(count);
    }
});

// To Change light color when pressing button
let toggle = 0;

// Event for Lit Screen:
litScr.addEventListener('click',function(){
    if(toggle === 0)
    {
        display.style.background = "black";
        toggle = 1;
    }
    else if (toggle === 1)
    {
        display.style.background = "none";
        toggle = 0;  
    }
});