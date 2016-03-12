$(function() {

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

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
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_0.png',
            subHtml: '<h3>Gratuitous CAD</h3>\
                      <p>I started in Sketchup with the dimensions of my keyboard, speakers, and laptop. \
                      I wanted a platform for resting my computer for reading, recording, instruments, etc.</p>'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_1.png',
            subHtml: '<h3>Gratuitous CAD</h3>\
                      <p>Other goals: space for music, hidden cables, and in terms of aesthetics, clearly I went for a gross, boxy approximation of an upright piano...'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_2.jpg',
            subHtml: '<h3>Glamour Shots</h3>\
                      <p>The stand is little more than oak plywood and pine molding; altogether under $100. I definitely spent more on tools than I did on raw materials.</p>'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_3.jpg',
            subHtml: "<h3>Glamour Shots</h3>\
                      <p>Two coats of mahogany stain, two coats of polyurethane. Next time I'll go lighter.</p>"
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_4.jpg',
            subHtml: '<h3>Glamour Shots</h3>\
                      <p>Note the carriage bolts: the two bases break away from the tabletop for easier moving.</p>'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_6.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_7.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_8.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/piano_stand_9.jpg',
            subHtml: "<h3>Glamour Shots</h3>\
                      <p>After playing, I have to remind myself to put away my music. Can't let that jigsaw work on the music stand go hiding!</p>"
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