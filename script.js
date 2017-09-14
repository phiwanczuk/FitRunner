


'use strict'

var div = document.querySelector('div');
var divX = 1300;
var divY = 300;
var step = 50;

div.style.width = '100px';
div.style.height = '100px';

div.style.transitionDuration = '.3s';

div.style.position = 'absolute';
div.style.top = divY+'px';
div.style.left = divX+'px';

function setElementPosition(){
    div.style.top = divY+'px';
    div.style.left = divX+'px';
}

function changePosition(x,y){
    divX = divX + x;
    divY = divY + y;
}

function moveRight(distance){
    changePosition(distance,0);
    setElementPosition();
}
function moveLeft(distance){
    moveRight(-distance);
}

setInterval(function (){
    moveLeft(20);
},80);