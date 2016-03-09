(function() {

    function openPhotoSwipe(items) {
        return function(e) {
            var pswpElement = document.querySelectorAll('.pswp')[0];

            var options = {
                index: 0
            };

            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
    }

    $(".bolt.thumbnail").on("click", openPhotoSwipe([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_0.png',
            w: 1200,
            h: 858
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_1.png',
            w: 1200,
            h: 656
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_2.png',
            w: 1200,
            h: 858
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_3.png',
            w: 1200,
            h: 820
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_4.png',
            w: 1200,
            h: 820
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_5.png',
            w: 1200,
            h: 820
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_6.png',
            w: 1200,
            h: 820
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_7.png',
            w: 1200,
            h: 705
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_8.png',
            w: 1200,
            h: 820
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_9.png',
            w: 1200,
            h: 820
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bolt_10.png',
            w: 1200,
            h: 820
        }
    ]));

    $(".cornhole.thumbnail").on("click", openPhotoSwipe([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/cornhole_0.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/cornhole_1.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/cornhole_2.jpg',
            w: 1200,
            h: 900
        }
    ]));

    $(".set.thumbnail").on("click", openPhotoSwipe([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_0.png',
            w: 396,
            h: 744
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_1.png',
            w: 640,
            h: 960
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_2.png',
            w: 640,
            h: 960
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_3.png',
            w: 396,
            h: 744
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_4.png',
            w: 396,
            h: 744
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_5.png',
            w: 396,
            h: 744
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/set_6.png',
            w: 396,
            h: 744
        }
    ]));

    $(".piano.thumbnail").on("click", openPhotoSwipe([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_0.png',
            w: 1434,
            h: 918
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_1.png',
            w: 1434,
            h: 918
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_2.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_3.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_4.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_5.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_6.jpg',
            w: 900,
            h: 1200
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_7.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_8.jpg',
            w: 900,
            h: 1200
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_9.jpg',
            w: 1200,
            h: 900
        }
    ]));

    $(".bbq.thumbnail").on("click", openPhotoSwipe([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_0.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_1.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_2.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_3.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_4.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_5.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_6.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_7.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_8.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_9.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_10.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_11.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_12.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_13.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_14.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_15.jpg',
            w: 640,
            h: 480
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_16.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_17.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_18.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_19.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_20.jpg',
            w: 1200,
            h: 900
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/bbq_21.jpg',
            w: 1200,
            h: 900
        }
    ]));

})();