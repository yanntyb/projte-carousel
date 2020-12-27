let Carousel = function (imgTab){
    this.imageTab = imgTab;
    this.div = document.getElementById("global")
}

Carousel.prototype.initImg = function (){
    this.width = getComputedStyle(this.div).width;
    this.heiht = getComputedStyle(this.div).height;
    this.left = getComputedStyle(this.div).left;
    for(let i in this.imageTab){
        let img = document.createElement("img");
        img.src = "./image/" + this.imageTab[i]
        img.style.width = this.width;
        img.style.height = this.heiht;
        img.style.position = "absolute";
        img.style.left =parseInt(this.left) +  parseInt(this.width) * i + "px";
        this.div.append(img);
    }
}

Carousel.prototype.printHide = function (){
    this.divHide = document.getElementById("hide");
    this.divHide.style.left = parseInt(this.left) + parseInt(this.width) + "px";
    this.divHide.style.width = this.imageTab.length * parseInt(this.width) + "px";
    this.divHide.style.height = this.heiht
    this.divHide.style.backgroundColor = "white";
    this.divHide.style.zIndex = "100";
}

Carousel.prototype.move = function (dir){
    switch (dir){
        case "left":
            let pos = parseInt(this.width);
            let interval = window.setInterval(function (){
                console.log(pos)
                if (pos < 10){
                    this.div.style.left = pos + "px"
                }
                pos -= 10;
            },1)


    }

}

Carousel.prototype.initButton = function (){
    let _this = this;
    this.buttonLeft = document.createElement("i");
    this.buttonLeft.className = "fas fa-arrow-left";
    this.buttonLeft.style.position = "relative";
    this.buttonLeft.style.left = parseInt(this.left) + 40 + "px";
    this.buttonLeft.style.top = "50%"
    this.buttonLeft.style.zIndex = "100";
    this.buttonLeft.addEventListener("click",function(){
        _this.move("left")
    });

    this.buttonRight = document.createElement("i");
    this.buttonRight.className = "fas fa-arrow-right";
    this.buttonRight.style.position = "relative";
    this.buttonRight.style.left =  parseInt(this.width) - parseInt(this.left) + "px";
    this.buttonRight.style.top = "50%"
    this.buttonRight.style.zIndex = "100";

    this.div.append(this.buttonRight)
    this.div.append(this.buttonLeft);
}



export {Carousel};
