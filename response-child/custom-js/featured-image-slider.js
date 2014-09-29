/*

var frame = 0;
var imgFiles = [
        "http://jimirings.com/wp-content/uploads/2012/10/Jimi2.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/MG_0032.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/IMG_3397.jpg"
    ];
var images = new Array(imgFiles.length);
var fadeStop = 0;
var imageOpacity;
var currentImage;
var nextImage;

function loadImages(){
    var i;
    for (i = 0; i < imgFiles.length; i++){
        images[i] = new Image();
        images[i].src = imgFiles[i];
    }// end for
}// end loadImages

function loadNextImage(){
    frame++;
    if(frame >= imgFiles.length){
        frame = 0;
    }// end if
    nextImage = document.getElementById("featured-header-image-bottom");
    nextImage.src = imgFiles[frame];
}

function fadeRepeat(){
    if (fadeStop > 0){
        fadeStop--;
        console.log(fadeStop);
        imageOpacity = fadeStop/100;
        document.getElementById("featured-header-image-top").style.opacity = imageOpacity;
    }// end if
}// end fadeRepeat

function fadeOutTopImage(){
    setInterval(function(){fadeRepeat()}, 40);
    fadeStop = 100;
}

function moveNextImageUp(){
    currentImage = document.getElementById("featured-header-image-bottom");
    currentImage.src = imgFiles[frame];
    document.getElementById("featured-header-image-top").style.opacity = "1.0";
}

function animate(){
    loadNextImage();
    setTimeout(function(){fadeOutTopImage()}, 1000);
    setTimeout(function(){moveNextImageUp()}, 1000);
}// end animate

function imageSliderInit(){
    loadImages();
    setInterval(function(){animate()}, 3000);
} // end imageSliderInit

*/

var frame = 0;
var imgFiles = [
        "http://jimirings.com/wp-content/uploads/2012/10/Jimi2.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/MG_0032.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/IMG_3397.jpg"
    ];
var images = new Array(imgFiles.length);
var fadeStop = 0;
var imageOpacity;
var currentImage;
var nextImage;

function loadImages(){
    var i;
    for (i = 0; i < imgFiles.length; i++){
        images[i] = new Image();
        images[i].src = imgFiles[i];
    }// end for
}// end loadImages

function loadNextImage(){
    frame++;
    if(frame >= imgFiles.length){
        frame = 0;
    }// end if
    nextImage = document.getElementById("featured-header-image-bottom");
    nextImage.src = imgFiles[frame];
}// end loadNextImage

function fadeOutTopImage(){
        fadeStop--;
        //console.log(fadeStop);
        imageOpacity = fadeStop/100;
        document.getElementById("featured-header-image-top").style.opacity = imageOpacity;
}

function moveNextImageUp(){
    currentImage = document.getElementById("featured-header-image-top");
    currentImage.src = imgFiles[frame];
    document.getElementById("featured-header-image-top").style.opacity = "1.0";
}

function imageSwap(){
    while (fadeStop > 0){
        setInterval(function(){fadeOutTopImage()}, 4);
    }// end while
    fadeStop = 100;
    moveNextImageUp();
}// end imageSwap

function animate(){
    loadNextImage();
    imageSwap();
}// end animate

function imageSliderInit(){
    loadImages();
    setInterval(function(){animate()}, 3000);
} // end imageSliderInit


