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
                speed: 200,
                dynamic: true,
                dynamicEl: items
            });
        };
    }

    function captionHtml(title, subtext) {
        var html = "<div class='pg-caption'><h3>" + title + "</h3>";
        
        if (subtext) {
            html += "<p>" + subtext + "</p>";
        }

        return html + "</div>";
    }

    $(".thumbnail a").on("click", function(e) {
        e.stopImmediatePropagation();
    });

    $(".cornhole.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/cornhole_0.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/cornhole_1.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/cornhole_2.jpg'
        }
    ]));

    $(".bolt.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_0.png',
            subHtml: captionHtml('Bolt Ad Creation',
                                 "I led development on the Bolt app for a little over a year. \
                                  In my time at Conversant, the tool went from housing just flash ads \
                                  to a bunch of different formats.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_1.png',
            subHtml: captionHtml('Ad Preview Page',
                                 "Ads can be as simple as dual-orientation image ads...")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_4.png',
            subHtml: captionHtml('Ad Preview Page',
                                 'They can feature videos...')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_3.png',
            subHtml: captionHtml('Ad Preview Page',
                                 'Or they can incorporate buttons, animations, slideshows, games, etc.')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_2.png',
            subHtml: captionHtml('Ad Gallery Creation',
                                 'Bolt is built with Slim--a barebones PHP framework--and Backbone.js.')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_6.png',
            subHtml: captionHtml("Ad Creation",
                                 "Here's a look at the form for creating a video carousel ad.\
                                  Most everything is templatized; it's primarily a drag-and-drop UI.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_7.png',
            subHtml: captionHtml("Major Flashback",
                                 "This is what Bolt looked like a few months after I joined Conversant, \
                                  prior to a massive UI redesign.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_8.png',
            subHtml: captionHtml("RAC: Rich Ad Controller",
                                 "Conversant's JavaScript bridge for making native iOS and Android SDK calls.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_9.png',
            subHtml: captionHtml("Clickthrough URL generation")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bolt_10.png',
            subHtml: captionHtml("Mobile web testing")
        }
    ]));
    
    $(".set.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_0.png',
            subHtml: captionHtml('Main Menu',
                                 'The game comes with two modes. In Classic Mode, you play through \
                                  a whole deck without repeats. In Puzzle Mode, you find 6 sets in a \
                                  hand without replacement.')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_1.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_2.png'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_3.png',
            subHtml: captionHtml('An Evolving UI',
                                 "This is my first pass at the UI. Friggin' nailed it.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_4.png',
            subHtml: captionHtml('An Evolving UI',
                                 'Background and cards in place')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_5.png',
            subHtml: captionHtml('An Evolving UI',
                                 'Top and bottom menus')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/set_6.png',
            subHtml: captionHtml('An Evolving UI',
                                 'Final font choice')
        }, {
            src: 'https://www.youtube.com/watch?v=YX6GuELqX3U',
            subHtml: captionHtml('Demo Video')
        }
    ]));

    $(".piano.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_0.png',
            subHtml: captionHtml('Gratuitous CAD',
                                 'I started in Sketchup with the dimensions of my keyboard, speakers, \
                                  and laptop. I wanted a platform for resting my computer for reading, \
                                  recording, instruments, etc.')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_1.png',
            subHtml: captionHtml('Gratuitous CAD',
                                 'Other goals: space for music, hidden cables, and in terms of aesthetics, \
                                  clearly I went for a gross, boxy approximation of an upright piano...')
                                  
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_2.jpg',
            subHtml: captionHtml('Glamour Shots',
                                 "The stand is little more than oak plywood and pine molding; altogether \
                                  under $100. I definitely spent more on tools than I did on raw materials.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_3.jpg',
            subHtml: captionHtml('Glamour Shots',
                                 "Two coats of mahogany stain, two coats of polyurethane. \
                                  Next time I'll go lighter.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_4.jpg',
            subHtml: captionHtml('Glamour Shots',
                                 "Note the carriage bolts: the two bases break away from the tabletop \
                                 for easier moving.")
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_6.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_7.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_8.jpg'
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/piano_stand_9.jpg',
            subHtml: captionHtml('Glamour Shots',
                                 "After playing, I have to remind myself to put away my music. Can't let \
                                  that jigsaw work on the music stand go hiding!")
        }
    ]));

    $(".bbq.thumbnail").on("click", openLightGallery([
        {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_0.jpg',
            subHtml: captionHtml('Rapid paper prototyping')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_1.jpg',
            subHtml: captionHtml('Rapid paper prototyping')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_2.jpg',
            subHtml: captionHtml('Solidworks CAD',
                                 'The staircase cuts in the barbecue siding are for grate height adjustments.')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_3.jpg',
            subHtml: captionHtml('Solidworks CAD')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_4.jpg',
            subHtml: captionHtml('Solidworks CAD')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_5.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_6.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_7.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_8.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_9.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_10.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_11.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_12.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_13.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_14.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_15.jpg',
            subHtml: captionHtml('Construction Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_16.jpg',
            subHtml: captionHtml('Glamour Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_17.jpg',
            subHtml: captionHtml('Glamour Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_18.jpg',
            subHtml: captionHtml('Glamour Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_19.jpg',
            subHtml: captionHtml('Glamour Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_20.jpg',
            subHtml: captionHtml('Glamour Shots')
        }, {
            src: 'https://s3-us-west-1.amazonaws.com/daniel-capo-portfolio/img/bbq_21.jpg',
            subHtml: captionHtml('Glamour Shots')
        }
    ]));

    $(".peet.thumbnail").on("click", openLightGallery([
        {
            src: 'https://www.youtube.com/watch?v=pd_rx-yp0e8'
        }
    ]));
});