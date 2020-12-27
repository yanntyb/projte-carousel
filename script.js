import {Carousel} from "./Carousel.js";

let img = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

let carousel = new Carousel(img);
carousel.initImg()
carousel.printHide()
carousel.initButton()