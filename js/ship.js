/**
 * Created by lg on 1/24/14.
 */

var ship = {
    speed : 15,
    nitroFactor : 2.5,
    angleRotateFactor: 10,
    angle : 0,
    posX : 0,
    posY : 0,
    ele : function(){ return document.getElementById('ship') },
    nitro : function(){
        return this.nitroFactor * this.speed;
    },
    accelerate : function(){
        var speed = this.speed;
        console.log(this.posX,this.posY);
        this.posY += Math.cos(getAngle(this.angle))*speed;
        this.posX += Math.sin(getAngle(this.angle))*speed;
        document.body.style.backgroundPosition = this.posY +'px '+ this.posX+'px';
    },

    rotate : function (side){
        if(side == 'left'){
            this.angle = this.angle - this.angleRotateFactor;
        }else{
            this.angle = this.angle + this.angleRotateFactor;
        }
        console.log(this.angle);
        this.updateStyle();
    },
    updateStyle : function(){
        this.ele().style.WebkitTransform ='rotateZ(' + this.angle + 'deg)';// translate3d(' + this.posX + 'px,' + this.posY + 'px, 0px)';
    }
}