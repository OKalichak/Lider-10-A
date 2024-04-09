go();
myBox = document.getElementById("first");
console.log(myBox);
myBox.style.left = "554px";
elementHeight = ;
elementWidth = ;
x = 0;
y = 0;
maxX  = 500;
maxY = 500;
window.addEventListener('resize', go);

function go(){
  maxX = document.documentElement.clientWidth - elementWidth;
  maxY = document.documentElement.clientHeight - elementHeight;
}
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
        if( y >=maxY || y !=  -maxY && y <= -screenHeigth ||)
{
    y = y - 13;
}
       
        break;
    case "a":
        x = x - 13;
    break;
    case "s":
        y = y + 13;
        break;
    case "d":
        x = x + 13;
        break;
    default:
        break;
}

console.log(x);
console.log(y);
if(x >= screenWidth || x <= -screenHeigth)
{
    x = 0;
}

myBox.style.left = x + "px";
myBox.style.top = y + "px";


});





