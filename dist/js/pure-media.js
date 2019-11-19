// Pure-media v1.0

// Developer: https://github.com/localnetwork/

;(function() {
    'use strict';

    // set progressive image loading
    var progressiveMedias = document.querySelectorAll('.progressiveMedia');
    for (var i = 0; i < progressiveMedias.length; i++) {
        loadImage(progressiveMedias[i]);
    }

    // global function
    function loadImage(progressiveMedia) {

        // calculate aspect ratio
        // for the aspectRatioPlaceholder-fill
        // that helps to set a fixed fill for loading images
        var width = progressiveMedia.dataset.width,
        height = progressiveMedia.dataset.height,
        fill = height / width * 100,
        placeholderFill = progressiveMedia.previousElementSibling;

        placeholderFill.setAttribute('style', 'padding-bottom:'+fill+'%;');


    }

})();
