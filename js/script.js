/**
 * Created by lg on 1/24/14.
 */
window.onload = start;
var activeKeys = [16,37,38,39,40];
function start(){
    console.log('loaded');
    addEventListener('keydown', function (e) {
        activeKeys[e.keyCode] = true;
        console.log(e.keyCode);
    }, false);
    addEventListener('keyup', function (e) {
        activeKeys[e.keyCode] = false;
    }, false);
    setInterval(handleKeys,100);
}

function handleKeys(e){
    if(activeKeys[38]){
        //cima
        console.log();
        ship.accelerate();
    }
    if(activeKeys[40]){
        //baixo
    }
    if(activeKeys[37]){
        //esquerda
        ship.rotate('left');
    }
    if(activeKeys[39]){
        //direita
        ship.rotate('right');
    }
}
function getAngle(angle){
    return angle * Math.PI / 180;
}