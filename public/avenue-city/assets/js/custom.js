$(document).ready(function () {
    // Mobile Toggle button
    $(".mobbtn").click(function () {
        $(this).toggleClass("is-active");
    })

})



// Blog Carousel

$('#arawali-city').owlCarousel({
    //center: true,
    items: 2,
    loop: true,
    singleItem: true,
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: false,
    slideBy: 1,
    margin: 15,
    merge: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});


// Blog Carousel

$('#about-slider').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    singleItem: true,
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    dots: false,
    slideBy: 1,
    margin: 15,
    merge: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }

});