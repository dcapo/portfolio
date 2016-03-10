$(function() {

    function openLightGallery(items) {
        return function(e) {
            $(this).lightGallery({
                mode: 'lg-fade',
                speed: 0,
                dynamic: true,
                dynamicEl: items
            });
        };
    }

    $(".thumbnail a").on("click", function(e) {
        e.stopImmediatePropagation();
    });

    $(".cornhole.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/cornhole_0.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/cornhole_1.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/cornhole_2.jpg'
        }
    ]));

    $(".bolt.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_0.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_1.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_2.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_3.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_4.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_5.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_6.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_7.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_8.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_9.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_10.png'
        }
    ]));
    
    $(".set.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_0.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_1.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_2.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_3.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_4.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_5.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_6.png'
        }, {
            src: 'https://www.youtube.com/watch?v=YX6GuELqX3U',
            autoplay: 1
        }
    ]));

    $(".piano.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_0.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_1.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_2.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_3.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_4.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_5.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_6.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_7.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_8.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_9.jpg'
        }
    ]));

    $(".bbq.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_0.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_1.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_2.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_3.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_4.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_5.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_6.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_7.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_8.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_9.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_10.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_11.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_12.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_13.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_14.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_15.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_16.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_17.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_18.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_19.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_20.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_21.jpg'
        }
    ]));

    $(".peet.thumbnail").on("click", openLightGallery([
        {
            src: 'https://www.youtube.com/watch?v=pd_rx-yp0e8'
        }
    ]));
});