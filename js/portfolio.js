(function() {

    function openPhotoSwipe(items) {
        return function(e) {
            debugger;
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
            src: '/img/bolt_0.png',
            w: 1200,
            h: 858
        }, {
            src: '/img/bolt_1.png',
            w: 1200,
            h: 656
        }, {
            src: '/img/bolt_2.png',
            w: 1200,
            h: 858
        }, {
            src: '/img/bolt_3.png',
            w: 1200,
            h: 820
        }, {
            src: '/img/bolt_4.png',
            w: 1200,
            h: 820
        }, {
            src: '/img/bolt_5.png',
            w: 1200,
            h: 820
        }, {
            src: '/img/bolt_6.png',
            w: 1200,
            h: 820
        }, {
            src: '/img/bolt_7.png',
            w: 1200,
            h: 705
        }, {
            src: '/img/bolt_8.png',
            w: 1200,
            h: 820
        }, {
            src: '/img/bolt_9.png',
            w: 1200,
            h: 820
        }, {
            src: '/img/bolt_10.png',
            w: 1200,
            h: 820
        }
    ]));

    $(".cornhole.thumbnail").on("click", openPhotoSwipe([
        {
            src: '/img/cornhole_0.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/cornhole_1.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/cornhole_2.jpg',
            w: 1200,
            h: 900
        }
    ]));

    $(".set.thumbnail").on("click", openPhotoSwipe([
        {
            src: '/img/set_0.png',
            w: 396,
            h: 744
        }, {
            src: '/img/set_1.png',
            w: 640,
            h: 960
        }, {
            src: '/img/set_2.png',
            w: 640,
            h: 960
        }, {
            src: '/img/set_3.png',
            w: 396,
            h: 744
        }, {
            src: '/img/set_4.png',
            w: 396,
            h: 744
        }, {
            src: '/img/set_5.png',
            w: 396,
            h: 744
        }, {
            src: '/img/set_6.png',
            w: 396,
            h: 744
        }
    ]));

    $(".piano.thumbnail").on("click", openPhotoSwipe([
        {
            src: '/img/piano_stand_0.png',
            w: 1434,
            h: 918
        }, {
            src: '/img/piano_stand_1.png',
            w: 1434,
            h: 918
        }, {
            src: '/img/piano_stand_2.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/piano_stand_3.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/piano_stand_4.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/piano_stand_5.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/piano_stand_6.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/piano_stand_7.jpg',
            w: 900,
            h: 1200
        }, {
            src: '/img/piano_stand_8.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/piano_stand_9.jpg',
            w: 900,
            h: 1200
        }, {
            src: '/img/piano_stand_10.jpg',
            w: 1200,
            h: 900
        }
    ]));

    $(".bbq.thumbnail").on("click", openPhotoSwipe([
        {
            src: '/img/bbq_0.png',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_1.png',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_2.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/bbq_3.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/bbq_4.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/bbq_5.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_6.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_7.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_8.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_9.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_10.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_11.png',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_12.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_13.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_14.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_15.jpg',
            w: 640,
            h: 480
        }, {
            src: '/img/bbq_16.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/bbq_17.jpg',
            w: 900,
            h: 1200
        }, {
            src: '/img/bbq_18.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/bbq_19.jpg',
            w: 900,
            h: 1200
        }, {
            src: '/img/bbq_20.jpg',
            w: 1200,
            h: 900
        }, {
            src: '/img/bbq_21.jpg',
            w: 1200,
            h: 900
        }
    ]));

})();