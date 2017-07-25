function renderSelfAdaptationImage(element, adaptationType, wrapperWidth, wrapperHeight) {
  element.onload = function() {
    var elementNaturalWidth = element.naturalWidth;
    var elementNaturalHeight = element.naturalHeight;
    var elementRatio = elementNaturalWidth / elementNaturalHeight;
    var wrapperRatio = wrapperWidth / wrapperHeight;
    if(adaptationType == 1) {
      if(elementRatio > wrapperRatio) {
        element.style.width = wrapperHeight * elementRatio;
        element.style.height = wrapperHeight;
        element.style.left = (wrapperWidth - wrapperHeight * elementRatio)/2 + 'px';
        element.style.top = '0px';
      } else {
        element.style.width = wrapperWidth;
        element.style.height = wrapperWidth * elementRatio;
        element.style.left = '0px';
        element.style.top = (wrapperHeight - wrapperWidth * elementRatio)/2 + 'px';
      }
    } else if(adaptationType == 2) {
      if(elementRatio > wrapperRatio) {
        element.style.width = wrapperWidth;
        element.style.height = wrapperWidth / elementRatio;
        element.style.left = '0px';
        element.style.top = (wrapperHeight - wrapperWidth / elementRatio) / 2 + 'px';
      } else {
        element.style.width = wrapperHeight * elementRatio;
        element.style.height = wrapperHeight;
        element.style.left = (wrapperWidth - wrapperHeight * elementRatio) / 2 + 'px';
        element.style.top = '0px';
      }
    } else {
      element.style.width = wrapperWidth;
      element.style.height = wrapperHeight;
      element.style.left = '0px';
      element.style.top = '0px';
    }
  }
}
