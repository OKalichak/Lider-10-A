go();
myBox = document.getElementById("first");
console.log(myBox);
myBox.style.left = "554px";
//elementHeight = ;
//elementWidth = ;
x = 0;
y = 0;
maxX  = 500;
maxY = 500;
window.addEventListener('resize', go);

function go(){
  maxX = document.body.clientWidth - document.getElementById("first").clientWidth;
  maxY = document.body.clientHeight - document.getElementById("first").clientHeight;
}
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





