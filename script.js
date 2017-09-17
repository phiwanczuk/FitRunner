'use strict'

var div = document.querySelector('img');
var divX = 900;
var divY = 0;
var step = 50;

div.style.transitionDuration = '.3s';

div.style.position = 'fixed';
div.style.top = divY + 'px';
div.style.left = divX + 'px';

function trimPx(string){
    return parseInt(string.replace('px', ''));
}

function changeElementPosition(element, xOffset, yOffset) {
    if (element.style.position !== 'fixed') throw new Error('The element position should be set to fixed!');
    var xActual = trimPx(div.style.left);
    var yActual = trimPx(div.style.top);
    var xNew = xActual + xOffset;
    var yNew = yActual + yOffset;
    element.style.top = yNew + 'px';
    element.style.left = xNew + 'px';
}

function moveRight(element, distance) {
    changeElementPosition(element, distance, 0);
}

function moveLeft(element, distance) {
    moveRight(element, -distance);
}

function animateLeft(element) {
    if (!element) throw new Error('The element should be passed to that functiond!');
    var interval = setInterval(function () {
        moveLeft(element, 25);
        if (trimPx(element.style.left) < (0 - div.offsetWidth)) {
            clearInterval(interval);
            element.remove();
        }
    }, 100);
}

animateLeft(div);
