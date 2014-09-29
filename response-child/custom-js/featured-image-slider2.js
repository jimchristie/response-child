//featured-image-slider2.js

var frame = 0;
var imgList = [
        "http://jimirings.com/wp-content/uploads/2012/10/Jimi2.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/MG_0032.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/IMG_3397.jpg"
    ];
var fadeStop = 100;
var imageOpacity;
var currentImage;
var nextImage;

function loadNextImage(){
    frame++;
    if(frame >= imgList.length){
        frame = 0;
    }// end if
    nextImage = document.getElementById("featured-header-image-bottom");
    nextImage.src = imgList[frame];
}

function fadeOutTopImage(){
    setInterval(function(){    
        if (fadeStop > 0){
            fadeStop--;
            console.log(fadeStop);
            imageOpacity = fadeStop/100;
            document.getElementById("featured-header-image-top").style.opacity = imageOpacity;
        }// end if
    }, 10);
    fadeStop = 100;
}

function moveNextImageUp(){
    currentImage = document.getElementById("featured-header-image-top");
    currentImage.src = imgList[frame];
    document.getElementById("featured-header-image-top").style.opacity = "1.0";
}

function animate(){
    loadNextImage();
    fadeOutTopImage();
    setTimeout(function(){moveNextImageUp()}, 1000);
}

function imageSliderInit(){
    setInterval(function(){animate()}, 3000);
} // end imageSliderInit