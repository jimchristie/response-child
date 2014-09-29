var imgFiles = [
        "http://jimirings.com/wp-content/uploads/2012/10/Jimi2.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/MG_0032.jpg",
        "http://jimirings.com/wp-content/uploads/2012/10/IMG_3397.jpg"
    ];
var imgFilesLength = imgFiles.length;
var images = new Array(imgFilesLength);
var frame = 0;
var nextImage;
var fadeStop = 100;
var imageOpacity;

function loadImages(){
    for (var i = 0; i < imgFilesLength; i++){
        images[i] = new Image();
        images[i].src = imgFiles[i];
    }// end for
}// end loadImages

function loadNextImage(){
    frame++;
    if (frame >= imgFilesLength){
        frame = 0;
    }// end if
    nextImage = document.getElementById("featured-header-image-bottom");
    nextImage.src = imgFiles[frame];
    writeOpacity();
}// end loadNextImage

function fadeOutTopImage(){
    fadeStop--;
    if (fadeStop < 0){
        fadeStop = 100;
    }// end if
    
}// end fadeOutTopImage

function writeOpacity(){
    setInterval(function(){fadeOutTopImage()}, 40);
    console.log(fadeStop);
}

// this is here to start the rest of the functions
function imageSliderInit(){
    loadImages();
    loadNextImage();
    fadeOutTopImage();
    writeOpacity();
}