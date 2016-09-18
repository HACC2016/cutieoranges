Template.Carousel.onRendered(function(){
    $(document).ready(function() {

        $("#owl-demo").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items : 2,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]

        });

    });
});