var imageWrapper = document.getElementsByClassName('image-wrapper');
var image = document.getElementsByClassName('image');
var wrapperWidth = imageWrapper[0].offsetWidth;
var wrapperHeight = imageWrapper[0].offsetHeight;
renderSelfAdaptationImage(image[0], 1, wrapperWidth, wrapperHeight);
renderSelfAdaptationImage(image[1], 2, wrapperWidth, wrapperHeight);