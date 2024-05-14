go();
var Objects = [];
myBox = document.getElementById("first");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
console.log(myBox);
myBox.style.left = "1500px";
canvas.height = 1500;
//elementHeight = ;
//elementWidth = ;
x = 0;
y = 0;
maxX  = 500;
maxY = 1000;
window.addEventListener('resize', go);
go();
myInterval = setInterval(function() {
    x = x + 5;
    y = y + 5;
    if(x > 500)
    {
        clearInterval(myInterval);
    }
    myBox.style.left = x + "px";
    myBox.style.top = x + "px";
}, 14)
function fall()
{
    
    Second.style.top = 10 + "px";
    if(Second.style.top > maxY)
    {
        Second.style.top = 0;
    }
}
function go(){
    maxX = document.body.clientWidth - document.getElementById("first").clientWidth;
    maxY = document.body.clientHeight - document.getElementById("first").clientHeight;
  }
var createObj = setInterval(function() {
    Objects.push({
        x: Math.random() * (maxX  - 60),
        y: 0
    })
},  500)
var moveObj = setInterval(function() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for (let index = 0; index < Objects.length; index++)
    {   var element = Objects[index];
        
        if(element.y < maxY)
        {   Objects[index].y++;
            
           ctx.fillStyle = "rgb(0,200,0)";
           ctx.fillRect(element.x, element.y, 20, 20);

            
        }
        else 
        {
            Objects.splice(index,1);
          index--;
        }
        
       
    }
},  10)



document.addEventListener("keypress", function(e) {
console.log(e);
key = e.key;
x =parseInt( myBox.style.left);
y =parseInt( myBox.style.top);
switch (key) {
    case "w":
       

    y = y - 10;

       
        break;
    case "a":
        x = x - 10;
    break;
    case "s":
        y = y + 10;
        break;
    case "d":
        x = x + 10;
        break;
    default:
        break;
}

console.log(x);
console.log(y);

if(x <= maxX && x >= 0 && y <= maxY && y >= 0)
{
    myBox.style.left = x + "px";
    myBox.style.top = y + "px";
}



});





