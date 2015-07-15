/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
≡≡≡≡≡≡                                                                                                      ≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡   INITIALISE / BASE 1.0                                                                             ≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡                                                                                                    ≡≡≡≡≡≡≡≡≡≡≡≡
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   RESPONSIVE                                                                                     ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

Returns one of the specified values

$.responsive.viewport()     tablet-landscape | tablet-portrait | mobile-landscape | mobile-portrait
$.responsive.device()       mobile | tablet | desktop
*/

'use strict';

$.responsive = {
    width1: 1280,
    width2: 1023,
    width3: 768,
    width4: 480,

    viewport: function() {
        var width    = $(window).width(),
            //height   = $(window).height(),
            viewport = 'desktop';
        if (width >= this.width2 && width < this.width1) { viewport = 'desktop-compact'; }
        if (width >= this.width3 && width < this.width2) { viewport = 'tablet-portrait'; }
        if (width >= this.width4 && width < this.width3) { viewport = 'mobile-landscape'; }
        if (width >= 0 && width < this.width4)           { viewport = 'mobile-portrait'; }

        $('html').removeClass('desktop desktop-compact tablet-portrait mobile-landscape mobile-portrait');
        $('html').addClass(viewport);

        return viewport;
    },

    device: function() {
        var device;
        switch(this.viewport()) {
            case 'tablet-landscape':
            case 'tablet-portrait':
                device = 'tablet';
            break;
            case 'mobile-landscape':
            case 'mobile-portrait':
                device = 'mobile';
            break;
            default:
                device = 'desktop';
        }

        $('html').removeClass('mobile tablet desktop');
        $('html').addClass(device);

        return device;
    }
};

/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   RUN IF ENABLED                                                                                 ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

Enter true or false as parameters passed to the function

$.enable.removeImageLinkTitles(); Enter true | false (If an image is a link, remove the link title="" attribute
$.enable.backToTop();             Enter true | false (If a link has the attribute rel="back-to-top" this will make it scroll up smoothly
$.enable.IE7LastChild();          Enter true | false (Adds class="last-child" to all last child elements in IE7 and below - IE8 & above and all other browsers support :last-child)
$.enable.IE7HoverFocus();         Enter true | false (Adds/removes class="hover" and class="focus" in IE7 and below to match those pseudo states)
*/

$.enable = {

/*********************************************************************************/
/*****   LINK FUNCTIONS                                              ************/
/*******************************************************************************/

    removeImageLinkTitles: function() { $('img').parent('a').removeAttr('title'); },

    backToTop: function() {
        $('a[rel="back-to-top"]').click(function(e) {
            $('html, body').animate({scrollTop:0}, 'slow');
            e.preventDefault();
        });
    },



/*********************************************************************************/
/*****   IE FUNCTIONS                                                ************/
/*******************************************************************************/

    IE7LastChild: function() {
        if($.browser.ltie8) {
            $(':last-child').addClass('last-child');
        }
    },

    IE7HoverFocus: function() {
        if($.browser.ltie8) {
            $(':input')
            .focus(function() { $(this).addClass('focus'); })
            .blur(function() { $(this).removeClass('focus'); })
            .hover(
                function() { $(this).addClass('hover'); },
                function() { $(this).removeClass('hover'); }
            );
        }
    }
};



/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   SETTINGS                                                                                       ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

Returns either true or false

$.settings.images         Can only be used after document load, not during
$.settings.flash          Requires SWFObject to enable flash
$.settings.iframe         Checks if page is loaded within an iframe
$.settings.touchEnabled   Checks if device is touchenabled
*/

$.settings = {
    images: function() {
        $('<img src="/assets-ui/img/blank.gif' + '#' + Math.random() + '"/>').error(function () {
            $('html').addClass('images-off');
            $.settings.images = false;
        });
    },

    touchEnabled: function() {
        if('ontouchstart' in window || 'onmsgesturechange' in window) {
            $('html').addClass('touchenabled');
            return true;
        } else {
            $('html').removeClass('touchenabled');
            return false;
        }
    }
};




/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   BROWSER                                                                                        ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

All return FALSE unless the criteria is met

$.browser.ie              TRUE if any version of Internet Explorer †
$.browser.ie7             TRUE if IE7 †
$.browser.ie8             TRUE if IE8 †
$.browser.ie9             TRUE if IE9 †
$.browser.ie10            TRUE if IE10 †
$.browser.ltie7           TRUE if less than IE7 †
$.browser.ltie8           TRUE if less than IE8 †
$.browser.ltie9           TRUE if less than IE9 †
$.browser.ltie10          TRUE if less than IE10 †
$.browser.gtie6           TRUE if greater than IE6 †
$.browser.gtie7           TRUE if greater than IE7 †
$.browser.gtie8           TRUE if greater than IE8 †
$.browser.gtie9           TRUE if greater than IE9 †
*/

$.browser = {
    ie:     $('html').hasClass('ie'),
    ie7:    $('html').hasClass('ie7'),
    ie8:    $('html').hasClass('ie8'),
    ie9:    $('html').hasClass('ie9'),
    ie10:   $('html').hasClass('ie10'),
    ltie7:  $('html').hasClass('ltie7'),
    ltie8:  $('html').hasClass('ltie8'),
    ltie9:  $('html').hasClass('ltie9'),
    ltie10: $('html').hasClass('ltie10'),
    gtie6:  $('html').hasClass('gtie6'),
    gtie7:  $('html').hasClass('gtie7'),
    gtie8:  $('html').hasClass('gtie8'),
    gtie9:  $('html').hasClass('gtie9')
};




/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   EVENTS                                                                                         ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

***** MOUSE DOWN / MOUSE UP **********

Returns true or false depending on if the button is clicked or not

$.events.mouseLeftDown()
$.events.mouseMiddleDown()
$.events.mouseRightDown()
*/

$.events = {
    mouseLeftDown:   false,
    mouseMiddleDown: false,
    mouseRightDown:  false
};

$(document)
    .mousedown(function(e) {
        if(e.which === 1) { $.events.mouseLeftDown   = true; }
        if(e.which === 2) { $.events.mouseMiddleDown = true; }
        if(e.which === 3) { $.events.mouseRightDown  = true; }
    })
    .mouseup(function() {
        $.events = {
            mouseLeftDown:   false,
            mouseMiddleDown: false,
            mouseRightDown:  false
        };
    });
/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
≡≡≡≡≡≡                                                                                                      ≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡   USEFUL SETTINGS / VARIABLES / DETECTIONS 1.0                                                      ≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡                                                                                                    ≡≡≡≡≡≡≡≡≡≡≡≡
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/
'use strict';
/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   <HEAD> LOAD                                                                                    ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
*/


/*
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
≡≡≡≡≡≡   ON DOCUMENT LOAD                                                                               ≡≡≡≡≡≡≡≡≡≡≡≡
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
*/
$(function () {

/*********************************************************************************/
/*****   GLOBAL                                                      ************/
/*******************************************************************************/

$.enable.removeImageLinkTitles(true);
$.enable.backToTop(true);


/*********************************************************************************/
/*****   IE ONLY                                                     ************/
/*******************************************************************************/

$.enable.IE7LastChild(true);
$.enable.IE7HoverFocus(true);

});

/*************************************************************************/
/*****   DETECTING IMAGES ON OR OFF                          ************/
/***********************************************************************/

$(function () {
    $('html').addClass('images-off');
    $('<img src="./assets/img/structure/pixel.png' + '#' + Math.random() + '"/>').load(function() {
        $('html').removeClass('images-off');
    });
});


/********************************************************************************/
/***** MOBILE / TABLET SETTINGS ************************************************/
/******************************************************************************/


/***** DETECT TOUCH ENABLED *****/

	var touchEnabled = 'ontouchstart' in window || 'onmsgesturechange' in window;
	if(touchEnabled) {
		$('html').addClass('touchenabled');
	}


/***** DETECT IF USING iOS5 THEN FIX ORIENTATION BUG *****/
$(function () {
    if (navigator.userAgent.match(/iPad/i)) {

        var iOSVersion = function () {
            if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
                // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            }
        },

            ver = iOSVersion(),

            viewportmeta = document.querySelector('meta[name="viewport"]');

        if (ver[0] === 5) {
            if (viewportmeta) {
                viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
                jQuery(document).ready(function () {
                    document.body.addEventListener('gesturestart', function () {
                        viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                    }, false);
                });
            }
        }
    }
});


/*********************************************************************************/
/*****   GRIDS                                                     ************/
/*******************************************************************************/

$(function () {
  var body = $('body'),
      html = $('html');

  //toggle grid
  $(document).on( 'click', '.toggle-grid', function(e) {
    e.preventDefault();
    $(body).toggleClass('framework');
  });

  $(document).on( 'click', '.toggle-grid-type', function(e) {
    e.preventDefault();
    $(body).toggleClass('gutterless');
  });

  $(document).on( 'click', '.toggle-ads', function(e) {
    e.preventDefault();
    $(html).toggleClass('takeover-active');
  });
});

/* COMPONENT - placeholderText 1.0 */

// window.rm  = window.rm || {};
// window.rm.placeholderText = window.rm.placeholderText || {};

// window.rm.placeholderText = (function ($) {
//     'use strict';

//     $(function (){
//         if (!Modernizr.input.placeholder) {

//             $('[placeholder]').focus(function () {
//                 var input = $(this);
//                 if (input.val() === input.attr('placeholder')) {
//                     input.val('');
//                     input.removeClass('placeholder');
//                 }
//             }).blur(function () {
//                 var input = $(this);
//                 if (input.val() === '' || input.val() === input.attr('placeholder')) {
//                     input.addClass('placeholder');
//                     input.val(input.attr('placeholder'));
//                 }
//             }).blur();
//             $('[placeholder]').parents('form').submit(function () {
//                 $(this).find('[placeholder]').each(function () {
//                     var input = $(this);
//                     if (input.val() === input.attr('placeholder')) {
//                         input.val('');
//                     }
//                 });
//             });
//         }
//     });
    
// }(jQuery));