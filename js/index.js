var imageWrapper = document.getElementsByClassName('image-wrapper');
var image = document.getElementsByClassName('image');
var wrapperWidth = imageWrapper[0].offsetWidth;
var wrapperHeight = imageWrapper[0].offsetHeight;
var adaptationType = 1;
Array.from(image).forEach(function(element) {
  renderSelfAdaptationImage(element, adaptationType, wrapperWidth, wrapperHeight);
});