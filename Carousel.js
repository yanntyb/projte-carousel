let Carousel = function (imgTab){
    this.imageTab = imgTab;
    this.div = document.getElementById("global");
    this.width = getComputedStyle(this.div).width;
    this.heiht = getComputedStyle(this.div).height;
    this.left = getComputedStyle(this.div).left;
    this.index = 0
}

Carousel.prototype.initImg = function (){
    this.imgLeft = document.createElement("img");
    this.imgCenter = document.createElement("img");
    this.imgRight = document.createElement("img");

    this.imgLeft.style.left = "0";
    this.imgCenter.style.left = "400px";
    this.imgRight.style.left = "800px";
}

Carousel.prototype.afficherImg = function (){
    this.imgLeft.src = "./image/" +  this.imageTab[this.index];
    this.imgCenter.src = "./image/" +  this.imageTab[this.index + 1];
    this.imgRight.src = "./image/" +  this.imageTab[this.index + 2];

    this.div.append(this.imgLeft);
    this.div.append(this.imgCenter);
    this.div.append(this.imgRight);
}

Carousel.prototype.moveImg = function (dir){
    switch (dir){
        case "right":
            let pos = 0;
            let _this = this
            let interval = window.setInterval(function(){
                pos +=1;
                _this.imgLeft.style.left = pos + "px";
                _this.imgCenter.style.left =  pos + 400 + "px";
                if(pos > 1/3 * parseInt(_this.width)){
                    _this.index --;
                    _this.imgLeft.style.left = "0";
                    _this.imgCenter.style.left =  "400px";
                    _this.afficherImg();
                    clearInterval(interval);
                }
            },1)
            break;
        case "left":
            let pos2 = 0;
            let _this2 = this
            let interval2 = window.setInterval(function(){
                pos2 +=1;
                _this2.imgRight.style.left = -pos2 + 800 + "px";
                _this2.imgCenter.style.left =  -pos2 + 400 + "px";
                if(pos2 > 1/3 * parseInt(_this2.width)){
                    _this2.index ++;
                    _this2.imgLeft.style.left = "0";
                    _this2.imgCenter.style.left =  "400px";
                    _this2.afficherImg();
                    clearInterval(interval2);
                }
            },1)
            break;
    }
}

Carousel.prototype.printHide = function (){
    this.divHide1 = document.getElementById("hide1");
    this.divHide1.className= "hid";
    this.divHide1.style.left = parseInt(this.left) + 2/3 *parseInt(this.width) + "px";
    this.divHide1.style.width =  parseInt(this.width) * 1/3 + "px"
    this.divHide1.style.height = this.heiht

    this.divHide2 = document.getElementById("hide2");
    this.divHide2.className= "hid"
    this.divHide2.style.left = parseInt(this.left) + "px";
    this.divHide2.style.width = parseInt(this.width) * 1/3 + "px";
    this.divHide2.style.height = this.heiht
}

Carousel.prototype.initButton = function (){
    let _this = this;
    this.buttonLeft = document.createElement("i");
    this.buttonLeft.className = "fas fa-arrow-left";
    this.buttonLeft.style.position = "relative";
    this.buttonLeft.style.left = 1/3 * parseInt(this.width) + "px";
    this.buttonLeft.style.top = "50%"
    this.buttonLeft.style.zIndex = "100";
    this.buttonLeft.addEventListener("click",function(){
        _this.moveImg("left")
    });

    this.buttonRight = document.createElement("i");
    this.buttonRight.className = "fas fa-arrow-right";
    this.buttonRight.style.position = "relative";
    this.buttonRight.style.left =  parseInt(this.width) * 2/3 - 60 + "px";
    this.buttonRight.style.top = "50%"
    this.buttonRight.style.zIndex = "100";
    this.buttonRight.addEventListener("click",function(){
        _this.moveImg("right")
    });

    this.div.append(this.buttonLeft);
    this.div.append(this.buttonRight);
}



export {Carousel};
