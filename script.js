function changeColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Apply the new color to the body background
    document.body.style.backgroundColor = randomColor;
}
function bgbox1(){
    var box1 = document.getElementById('box1');
    box1.style.backgroundColor = "rgb(255, 0, 0)";
}
function bgbox2(){
    var box2 = document.getElementById('box2');
    box2.style.backgroundColor = "rgb(255, 0, 0)";
}
function bgbox3(){
    var box3 = document.getElementById('box3');
    box3.style.backgroundColor = "rgb(255, 0, 0)";
}