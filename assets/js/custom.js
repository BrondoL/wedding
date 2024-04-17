// Gallery Single Slider
window.GALLERY_SINGLE_SLIDER = true;

// On Ready
$(document).ready(function(){
    // get viewport
    var vp = typeof getViewport === 'function' ? getViewport() : undefined;    

    // check slider function
    if (typeof gallerySingleSlider === 'function') {
            
        // Init Slider
        gallerySingleSlider({ infinite: true });

        // Single Slider Container
        var singleSliderContainer = $('#singleSliderContainer');        

        // Single Slider Picture
        $(singleSliderContainer).find('.singleSliderPicture').each(function(i, picture) {
            var width = $(this).width();

            var width = width - (50);
            var height = width + (width - 110);
            // var height = width;

            if (vp && vp.width > 700) {

                width = width * (2);
                height = width + (width / 4);
            }
            $(picture).css('--width', width + 'px');
            $(picture).css('--height', height + 'px');
        });

        // Slider has been initialized
        if ($(singleSliderContainer).hasClass('slick-initialized')) {
            // Set to the first slide
            $(singleSliderContainer).slick('slickGoTo', 0);

            setTimeout(() => {
                // show slider
                $(singleSliderContainer).css('opacity', 1);
            }, 500);
        }

    }

});