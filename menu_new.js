
var main_menu =
      '<ul id="category" class="category">'+
        '<li><a href="index.html"><b>Home</b></a>'+
          '<ul class="submenu">'+
             '<li><a href="index.html">Executive Summary</a></li>'+
             '<li><a href="ebay_home1.0.html">Required Elements</a></li>'+
             '<li><a href="ebay_home1.1.html">Email Account</a></li>'+
             '<li><a href="ebay_home1.2.html">PayPal</a></li>'+
             '<li><a href="ebay_home1.3.html">ebay Account</a></li>'+
             '<li><a href="ebay_home1.4.html">Install PayPal over ebay</a></li>'+

          '</ul>'+

        '<li><a href="ebay_buy0.0.html"><b>Buy</b></a>'+
          '<ul class="submenu">'+
             '<li><a href="ebay_buy0.0.html">Search and Buy It</a></li>'+
             
             '<li><a href="ebay_buy1.1.html">Cool Stuff to Buy</a></li>'+
             '<li><a href="ebay_buy1.2.html">Cool Videos</a></li>'+


          '</ul>'+


        '<li><a href="ebay_sum1.0.html"><b>eBay Review</b></a>'+
          '<ul class="submenu">'+
             '<li><a href="ebay_sum1.0.html">eBay Review</a></li>'+
             '<li><a href="ebay_sum1.1.html">Early Years</a></li>'+
             '<li><a href="ebay_sum1.2.html">2000s</a></li>'+
             '<li><a href="ebay_sum1.3.html">Directors Board</a></li>'+
             '<li><a href="ebay_sum1.4.html">Logo</a></li>'+
             '<li><a href="ebay_sum1.5.html">Profit and Transactions</a></li>'+
             '<li><a href="ebay_sum1.6.html">Skype and PayPal</a></li>'+
          '</ul>'+
                  '<li><a href="fail.html"><b>eBay FAIL</b></a></li>'+

     '<li><a href="contact.html"><b>Contact</b></a></li>'+
        '<li><a href="about.html"><b>About</b></a></li>'+
      '</ul>';
/*
var sidemenu = '<div id="sideblock" class="sideblock">'+
                 '<ul>'+
                  '<li><a href="http://aux.shenkar.ac.il/656/group14/TomGoldberg/Homework11.2/Tom_Goldberg_Ex11temp2.html">Web Connection</a></li>'+
                  '<li><a href="">Email Account</a></li>'+
                  '<li><a href="">Credit Card</a></li>'+
                  '<li><a href="">Other1</a></li>'+
                  '<li><a href="">Other2</a></li>'+
                 '</ul>'+
              '</div>';
*/

function mark2() { 
var page = window.location.href ;// page url
/*alert(page);*/
var obj = document.getElementById("category") ;
var elements = obj.getElementsByTagName("a");// Array of links
for (i=elements.length-1; 0 < i ; i--) {
var kuku=page.indexOf(elements[i].href) ;
if (kuku >= 0 ) 
    break ; 
}

elements[i].parentNode.style.backgroundColor="#E8E8C7";
/*elements[i].className="currentSubCategory";*/ 
var objli=elements[i].parentNode.parentNode ; // goes to UL
 console.log(objli);
 console.log(elements[i]);

if  (objli.id=="category"){
  elements[i].parentNode.className="currentSubCategory";
  return ;
  }

document.getElementById("side").innerHTML=objli.innerHTML ;
objli.parentNode.className = "currentCategory";  //page has children
}




jssor_slider2_starter = function (containerId) {
            var options = {
                $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,                    //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 6,                           //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

                    $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                    $AutoCenter: 0,                             //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
                    $SpacingX: 0,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                    $SpacingY: 0,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
                    $DisplayPieces: 8,                              //[Optional] Number of pieces to display, default value is 1
                    $ParkingPosition: 10,                            //[Optional] The offset position to park thumbnail
                    $Orientation: 1,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
                    $DisableDrag: false                              //[Optional] Disable drag or not, default value is false
                }
            };

            var jssor_slider2 = new $JssorSlider$(containerId, options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider2.$Elmt.parentNode.clientWidth;
                if (parentWidth) {
                    var sliderWidth = parentWidth;

                    //keep the slider width no more than 602
                    sliderWidth = Math.min(sliderWidth, 930);

                    jssor_slider2.$ScaleWidth(sliderWidth);
                }
                else
                    $Jssor$.$Delay(ScaleSlider, 50);
            }

            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);

            $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        };

        $(document).ready(function() {
    $('.pgwSlider').pgwSlider();
})


(function($){
    $.fn.pgwSlider = function(options) {

        var defaults = {
            mainClassName : 'pgwSlider',
            listPosition : 'right',
            selectionMode : 'click',
            transitionEffect : 'fading',
            autoSlide : true,
            displayList : true,
            displayControls : false,
            touchControls : true,
            verticalCentering : false,
            adaptiveHeight : false,
            maxHeight : null,
            beforeSlide : null,
            afterSlide : null,
            adaptiveDuration : 200,
            transitionDuration : 500,
            intervalDuration : 3000
        };

        if (this.length == 0) {
            return this;
        } else if(this.length > 1) {
            this.each(function() {
                $(this).pgwSlider(options);
            });
            return this;
        }

        var pgwSlider = this;
        pgwSlider.plugin = this;
        pgwSlider.data = [];
        pgwSlider.config = {};
        pgwSlider.currentSlide = 0;
        pgwSlider.slideCount = 0;
        pgwSlider.resizeEvent = null;
        pgwSlider.intervalEvent = null;
        pgwSlider.touchFirstPosition = null;
        pgwSlider.transitionInProgress = false;
        pgwSlider.window = $(window);

        // Init
        var init = function() {

            // Merge user options with the default configuration
            pgwSlider.config = $.extend({}, defaults, options);

            // Setup
            setup();

            // Activate interval
            if (pgwSlider.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Get element
        var getElement = function(obj) {
            var element = {};

            // Get link
            var elementLink = obj.find('a').attr('href');
            if ((typeof elementLink != 'undefined') && (elementLink != '')) {
                element.link = elementLink;
                var elementLinkTarget = obj.find('a').attr('target');
                if ((typeof elementLinkTarget != 'undefined') && (elementLinkTarget != '')) {
                    element.linkTarget = elementLinkTarget;
                }
            }

            // Get image 
            var elementThumbnail = obj.find('img').attr('src');
            if ((typeof elementThumbnail != 'undefined') && (elementThumbnail != '')) {
                element.thumbnail = elementThumbnail;
            }

            var elementImage = obj.find('img').attr('data-large-src');
            if ((typeof elementImage != 'undefined') && (elementImage != '')) {
                element.image = elementImage;
            }

            // Get title 
            var elementSpan = obj.find('span').text();
            if ((typeof elementSpan != 'undefined') && (elementSpan != '') && (elementSpan != null)) {
                element.title = elementSpan;
            } else {
                var elementTitle = obj.find('img').attr('alt');
                if ((typeof elementTitle != 'undefined') && (elementTitle != '')) {
                    element.title = elementTitle;
                }
            }

            // Get description
            var elementDescription = obj.find('img').attr('data-description');
            if ((typeof elementDescription != 'undefined') && (elementDescription != '')) {
                element.description = elementDescription;
            }

            return element;
        };

        // Update the current height
        var updateHeight = function(height, animate) {

            // Check maxHeight
            if (pgwSlider.config.maxHeight) {
                if (pgwSlider.plugin.width() > 480 && height > pgwSlider.config.maxHeight) {
                    height = pgwSlider.config.maxHeight;
                } else if (pgwSlider.plugin.width() <= 480) {
                    if (height + pgwSlider.plugin.find('.ps-list').height() > pgwSlider.config.maxHeight) {
                        height = pgwSlider.config.maxHeight - pgwSlider.plugin.find('.ps-list').height();
                    }
                }
            }

            // Prevents multiple calculations in a short time
            clearTimeout(pgwSlider.resizeEvent);
            pgwSlider.resizeEvent = setTimeout(function() {

                // Adjust right list
                var elementHeight = ((height - ((pgwSlider.slideCount - 1) * 6)) / pgwSlider.slideCount);
                var elementWidth = (100 / pgwSlider.slideCount);
                pgwSlider.plugin.find('.ps-list > li').css({ width: elementWidth + '%' });

                // Adjust main container
                if (typeof animate != 'undefined' && animate && pgwSlider.config.maxHeight == null) {

                    if (typeof pgwSlider.plugin.find('.ps-current').animate == 'function') {
                        pgwSlider.plugin.find('.ps-current').animate({
                            height: height
                        }, pgwSlider.config.adaptiveDuration, function() {
                            pgwSlider.plugin.find('.ps-list > li').animate({ height: elementHeight }, pgwSlider.config.adaptiveDuration);
                        });
                    } else {
                        pgwSlider.plugin.find('.ps-current').css('height', height);
                        pgwSlider.plugin.find('.ps-list > li').css('height', elementHeight);
                    }

                } else {
                    pgwSlider.plugin.find('.ps-current').css('height', height);
                    pgwSlider.plugin.find('.ps-list > li').css('height', elementHeight);
                }

                // Vertical alignement
                if (pgwSlider.config.verticalCentering) {

                    // List elements
                    pgwSlider.plugin.find('.ps-list > li').each(function(){
                        if ((elementHeight > 50) && ($(this).find('img').height() > elementHeight)) {
                            var imageMargin = Math.round(($(this).find('img').height() - elementHeight) / 2);
                            $(this).find('img').css('margin-top', -imageMargin);

                        } else if ($(this).find('img').height() < elementHeight) {
                            var imageMargin = Math.round((elementHeight - $(this).find('img').height()) / 2);
                            $(this).find('img').css('margin-top', imageMargin);

                        } else {
                            $(this).find('img').css('margin-top', '');
                        }
                    });

                    // Current elements
                    pgwSlider.plugin.find('.ps-current > ul > li').each(function(){
                        var isVisible = ($(this).css('display') == 'none') ? false : true;

                        if (! isVisible) {
                            $(this).show();
                        }

                        if ($(this).show().find('img').height() > height) {
                            var imageMargin = Math.round(($(this).find('img').height() - height) / 2);
                            $(this).find('img').css('margin-top', -imageMargin);

                        } else if ($(this).show().find('img').height() < height) {
                            var imageMargin = Math.round((height - $(this).find('img').height()) / 2);
                            $(this).find('img').css('margin-top', imageMargin);

                        } else {
                            $(this).find('img').css('margin-top', '');
                        }

                        if (! isVisible) {
                            $(this).hide();
                        }
                    });
                }

            }, 100);

            return true;
        };

        // Set size class
        var setSizeClass = function() {

            if (pgwSlider.plugin.width() <= 480) {
                pgwSlider.plugin.addClass('narrow').removeClass('wide');
            } else {
                pgwSlider.plugin.addClass('wide').removeClass('narrow');
            }

            return true;
        };

        // Setup
        var setup = function() {

            // Create container
            pgwSlider.plugin.removeClass(pgwSlider.config.mainClassName).addClass('ps-list');
            pgwSlider.plugin.wrap('<div class="' + pgwSlider.config.mainClassName + '"></div>');
            pgwSlider.plugin = pgwSlider.plugin.parent();
            pgwSlider.plugin.prepend('<div class="ps-current"><ul></ul><span class="ps-caption"></span></div>');
            pgwSlider.slideCount = pgwSlider.plugin.find('.ps-list > li').length;

            if (pgwSlider.slideCount == 0) {
                throw new Error('PgwSlider - No slider item has been found');
                return false;
            }

            // Add controls
            if (pgwSlider.config.displayControls && pgwSlider.slideCount > 1) {
                pgwSlider.plugin.find('.ps-current').prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>');
                pgwSlider.plugin.find('.ps-current').append('<span class="ps-next"><span class="ps-nextIcon"></span></span>');
                pgwSlider.plugin.find('.ps-current .ps-prev').click(function() {
                    pgwSlider.previousSlide();
                });
                pgwSlider.plugin.find('.ps-current .ps-next').click(function() {
                    pgwSlider.nextSlide();
                });
            }

            // Disable list
            if (! pgwSlider.config.displayList) {
                pgwSlider.plugin.find('.ps-current').css('width', '100%');
                pgwSlider.plugin.find('.ps-list').hide();
            }

            // Get slider elements
            var elementId = 1;
            pgwSlider.plugin.find('.ps-list > li').each(function() {
                var element = getElement($(this));
                element.id = elementId;
                pgwSlider.data.push(element);

                $(this).addClass('elt_' + element.id);

                // Check element title
                if (element.title) {
                    if ($(this).find('span').length == 1) {
                        if ($(this).find('span').text() == '') {
                            $(this).find('span').text(element.title);
                        }
                    } else {
                        $(this).find('img').after('<span>' + element.title + '</span>');
                    }
                }

                // Set element in the current list
                var currentElement = $('<li class="elt_' + elementId + '"></li>');

                if (element.image) {
                    currentElement.html('<img src="' + element.image + '" alt="' + (element.title ? element.title : '') + '">');
                } else if (element.thumbnail) {
                    currentElement.html('<img src="' + element.thumbnail + '" alt="' + (element.title ? element.title : '') + '">');
                }

                if (element.link) {
                    currentElement.html('<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + currentElement.html() + '</a>');
                }

                pgwSlider.plugin.find('.ps-current > ul').append(currentElement);

                // Set selection mode
                if ((pgwSlider.config.selectionMode == 'mouseOver') && (pgwSlider.config.transitionEffect == 'fading')) {
                    $(this).css('cursor', 'default').click(function(event) {
                        event.preventDefault();
                    }).bind('mouseenter', function(event) {
                        displayElement(element.id);
                    });
                    $(this).find('a').css('cursor', 'default');
                } else {
                    $(this).css('cursor', 'pointer').click(function(event) {
                        event.preventDefault();
                        displayElement(element.id);
                    });
                }

                elementId++;
            });

            // Set list position
            if (pgwSlider.config.listPosition == 'left') {
                pgwSlider.plugin.addClass('listOnTheLeft');
            }

            // Attach slide events
            if (pgwSlider.config.autoSlide) {
                pgwSlider.plugin.on('mouseenter', function() {
                    clearInterval(pgwSlider.intervalEvent);
                    pgwSlider.intervalEvent = null;
                }).on('mouseleave', function() {
                    activateInterval();
                });
            }

            // Display the first element
            displayElement(1);

            // Set the first height
            pgwSlider.plugin.find('.ps-current > ul > li.elt_1 img').on('load', function() {
                setSizeClass();

                var maxHeight = pgwSlider.plugin.find('.ps-current > ul > li.elt_1 img').height();
                updateHeight(maxHeight);

                pgwSlider.window.resize(function() {
                    // The new class must be set before the recalculation of the height.
                    setSizeClass();

                    var maxHeight = pgwSlider.plugin.find('.ps-current > ul > li.elt_' + pgwSlider.currentSlide + ' img').height();
                    updateHeight(maxHeight, pgwSlider.config.adaptiveHeight);
                });
            });

            // Touch controls for current image
            if (pgwSlider.config.touchControls && pgwSlider.slideCount > 1) {

                pgwSlider.plugin.find('.ps-current').on('touchstart', function(e) {
                    try {
                        if (e.originalEvent.touches[0].clientX && pgwSlider.touchFirstPosition == null) {
                            pgwSlider.touchFirstPosition = e.originalEvent.touches[0].clientX;
                        }
                    } catch(e) {
                        pgwSlider.touchFirstPosition = null;
                    }
                });

                pgwSlider.plugin.find('.ps-current').on('touchmove', function(e) {
                    try {
                        if (e.originalEvent.touches[0].clientX && pgwSlider.touchFirstPosition != null) {
                            if (e.originalEvent.touches[0].clientX > (pgwSlider.touchFirstPosition + 50)) {
                                pgwSlider.touchFirstPosition = null;
                                pgwSlider.previousSlide();
                            } else if (e.originalEvent.touches[0].clientX < (pgwSlider.touchFirstPosition - 50)) {
                                pgwSlider.touchFirstPosition = null;
                                pgwSlider.nextSlide();
                            }
                        }
                    } catch(e) {
                        pgwSlider.touchFirstPosition = null;
                    }
                });

                pgwSlider.plugin.find('.ps-current').on('touchend', function(e) {
                    pgwSlider.touchFirstPosition = null;
                });
            }

            return true;
        };

        // Finish element
        var finishElement = function(element) {

            // Element caption
            var elementText = '';
            if (element.title) {
                elementText += '<b>' + element.title + '</b>';
            }

            if (element.description) {
                if (elementText != '') elementText += '<br>';
                elementText += element.description;
            }

            if (elementText != '') {
                if (element.link) {
                    elementText = '<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + elementText + '</a>';
                }

                if (typeof pgwSlider.plugin.find('.ps-caption').fadeIn == 'function') {
                    pgwSlider.plugin.find('.ps-caption').html(elementText);
                    pgwSlider.plugin.find('.ps-caption').fadeIn(pgwSlider.config.transitionDuration / 2);
                } else {
                    pgwSlider.plugin.find('.ps-caption').html(elementText);
                    pgwSlider.plugin.find('.ps-caption').show();
                }
            }

            // Slider controls
            if (pgwSlider.config.displayControls) {
                if (typeof pgwSlider.plugin.find('.ps-current > .ps-prev').fadeIn == 'function') {
                    pgwSlider.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').fadeIn(pgwSlider.config.transitionDuration / 2);
                } else {
                    pgwSlider.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').show();
                }
            }

            // After slide
            if (typeof pgwSlider.config.afterSlide == 'function') {
                pgwSlider.config.afterSlide(element.id);
            }

            // Set the container height
            if (pgwSlider.config.adaptiveHeight) {
                var maxHeight = pgwSlider.plugin.find('.ps-current .elt_' + element.id + ' img').height();
                updateHeight(maxHeight, true);
            }

            return true;
        }

        // Fade an element
        var fadeElement = function(element) {
            var elementContainer = pgwSlider.plugin.find('.ps-current > ul');

            // Update list items
            pgwSlider.plugin.find('.ps-list > li').css('opacity', '0.6');
            pgwSlider.plugin.find('.ps-list > li.elt_' + element.id).css('opacity', '1');

            elementContainer.find('li').not('.elt_' + pgwSlider.currentSlide).not('.elt_' + element.id).each(function(){
                if (typeof $(this).stop == 'function') {
                    $(this).stop();
                }
                $(this).css('position', '').css('z-index', 1).hide();
            });

            // Current element
            if (pgwSlider.currentSlide > 0) {
                var currentElement = elementContainer.find('.elt_' + pgwSlider.currentSlide);

                if (typeof currentElement.animate != 'function') {
                    currentElement.animate = function(css, duration, callback) {
                        currentElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                if (typeof currentElement.stop == 'function') {
                    currentElement.stop();
                }

                currentElement.css('position', 'absolute').animate({
                    opacity : 0,
                }, pgwSlider.config.transitionDuration, function() {
                    currentElement.css('position', '').css('z-index', 1).hide();
                });
            }

            // Update current id
            pgwSlider.currentSlide = element.id;

            // Next element
            var nextElement = elementContainer.find('.elt_' + element.id);

            if (typeof nextElement.animate != 'function') {
                nextElement.animate = function(css, duration, callback) {
                    nextElement.css(css);
                    if (callback) {
                        callback();
                    }
                };
            }

            if (typeof nextElement.stop == 'function') {
                nextElement.stop();
            }

            nextElement.css('position', 'absolute').show().animate({
                opacity : 1,
            }, pgwSlider.config.transitionDuration, function() {
                nextElement.css('position', '').css('z-index', 2).show();
                finishElement(element);
            });

            return true;
        }

        // Slide an element
        var slideElement = function(element, direction) {
            var elementContainer = pgwSlider.plugin.find('.ps-current > ul');

            if (typeof direction == 'undefined') {
                direction = 'left';
            }

            if (pgwSlider.currentSlide == 0) {
                elementContainer.find('.elt_1').css({
                    position : '',
                    left : '',
                    opacity : 1,
                    'z-index' : 2
                }).show();
                pgwSlider.plugin.find('.ps-list > li.elt_1').css('opacity', '1');
                finishElement(element);

            } else {

                if (pgwSlider.transitionInProgress) {
                    return false;
                }

                pgwSlider.transitionInProgress = true;

                // Get direction details
                var elementWidth = elementContainer.width();

                if (direction == 'left') {
                    var elementDest = -elementWidth;
                    var nextOrigin = elementWidth;
                } else {
                    var elementDest = elementWidth;
                    var nextOrigin = -elementWidth;
                }

                var currentElement = elementContainer.find('.elt_' + pgwSlider.currentSlide);

                if (typeof currentElement.animate != 'function') {
                    currentElement.animate = function(css, duration, callback) {
                        currentElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                currentElement.css('position', 'absolute').animate({
                    left : elementDest,
                }, pgwSlider.config.transitionDuration, function() {
                    currentElement.css('position', '').css('z-index', 1).css('left', '').css('opacity', 0).hide();
                });

                // Next element
                var nextElement = elementContainer.find('.elt_' + element.id);

                if (typeof nextElement.animate != 'function') {
                    nextElement.animate = function(css, duration, callback) {
                        nextElement.css(css);
                        if (callback) {
                            callback();
                        }
                    };
                }

                nextElement.css('position', 'absolute').css('left', nextOrigin).css('opacity', 1).show().animate({
                    left : 0,
                }, pgwSlider.config.transitionDuration, function() {
                    nextElement.css('position', '').css('left', '').css('z-index', 2).show();
                    pgwSlider.transitionInProgress = false;

                    // Display new element
                    pgwSlider.plugin.find('.ps-list > li').css('opacity', '0.6');
                    pgwSlider.plugin.find('.ps-list > li.elt_' + element.id).css('opacity', '1');

                    finishElement(element);
                });
            }

            // Update current id
            pgwSlider.currentSlide = element.id;

            return true;
        }

        // Display the current element
        var displayElement = function(elementId, apiController, direction) {

            if (elementId == pgwSlider.currentSlide) {
                return false;
            }

            var element = pgwSlider.data[elementId - 1];

            if (typeof element == 'undefined') {
                throw new Error('PgwSlider - The element ' + elementId + ' is undefined');
                return false;
            }

            if (typeof direction == 'undefined') {
                direction = 'left';
            }

            // Before slide
            if (typeof pgwSlider.config.beforeSlide == 'function') {
                pgwSlider.config.beforeSlide(elementId);
            }

            if (typeof pgwSlider.plugin.find('.ps-caption').fadeOut == 'function') {
                pgwSlider.plugin.find('.ps-caption, .ps-prev, .ps-next').fadeOut(pgwSlider.config.transitionDuration / 2);
            } else {
                pgwSlider.plugin.find('.ps-caption, .ps-prev, .ps-next').hide();
            }

            // Choose the transition effect
            if (pgwSlider.config.transitionEffect == 'sliding') {
                slideElement(element, direction);
            } else {
                fadeElement(element);
            }

            // Reset interval to avoid a half interval after an API control
            if (typeof apiController != 'undefined' && pgwSlider.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Activate interval
        var activateInterval = function() {
            clearInterval(pgwSlider.intervalEvent);

            if (pgwSlider.slideCount > 1 && pgwSlider.config.autoSlide) {
                pgwSlider.intervalEvent = setInterval(function() {
                    if (pgwSlider.currentSlide + 1 <= pgwSlider.slideCount) {
                        var nextItem = pgwSlider.currentSlide + 1;
                    } else {
                        var nextItem = 1;
                    }
                    displayElement(nextItem);
                }, pgwSlider.config.intervalDuration);
            }

            return true;
        };

        // Start auto slide
        pgwSlider.startSlide = function() {
            pgwSlider.config.autoSlide = true;
            activateInterval();
            return true;
        };

        // Stop auto slide
        pgwSlider.stopSlide = function() {
            pgwSlider.config.autoSlide = false;
            clearInterval(pgwSlider.intervalEvent);
            return true;
        };

        // Get current slide
        pgwSlider.getCurrentSlide = function() {
            return pgwSlider.currentSlide;
        };

        // Get slide count
        pgwSlider.getSlideCount = function() {
            return pgwSlider.slideCount;
        };

        // Display slide
        pgwSlider.displaySlide = function(itemId) {
            displayElement(itemId, true);
            return true;
        };

        // Next slide
        pgwSlider.nextSlide = function() {
            if (pgwSlider.currentSlide + 1 <= pgwSlider.slideCount) {
                var nextItem = pgwSlider.currentSlide + 1;
            } else {
                var nextItem = 1;
            }
            displayElement(nextItem, true, 'left');
            return true;
        };

        // Previous slide
        pgwSlider.previousSlide = function() {
            if (pgwSlider.currentSlide - 1 >= 1) {
                var previousItem = pgwSlider.currentSlide - 1;
            } else {
                var previousItem = pgwSlider.slideCount;
            }
            displayElement(previousItem, true, 'right');
            return true;
        };

        // Destroy slider
        pgwSlider.destroy = function(soft) {
            clearInterval(pgwSlider.intervalEvent);

            if (typeof soft != 'undefined') {
                pgwSlider.plugin.find('.ps-list > li').each(function() {
                    $(this).attr('style', null).removeClass().css('cursor', '').unbind('click').unbind('mouseenter');
                    $(this).find('a').css('cursor', '');
                    $(this).find('img').attr('style', null);
                });

                pgwSlider.plugin.find('.ps-list').addClass(pgwSlider.config.mainClassName).removeClass('ps-list');
                pgwSlider.plugin.find('.ps-current').unwrap().remove();
                pgwSlider.hide();

            } else {
                pgwSlider.parent().remove();
            }

            pgwSlider.plugin = null;
            pgwSlider.data = [];
            pgwSlider.config = {};
            pgwSlider.currentSlide = 0;
            pgwSlider.slideCount = 0;
            pgwSlider.resizeEvent = null;
            pgwSlider.intervalEvent = null;
            pgwSlider.touchFirstPosition = null;
            pgwSlider.transitionInProgress = false;
            pgwSlider.window = null;

            return true;
        };

        // Reload slider
        pgwSlider.reload = function(newOptions) {
            pgwSlider.destroy(true);

            pgwSlider = this;
            pgwSlider.plugin = this;
            pgwSlider.window = $(window);
            pgwSlider.plugin.show();

            // Merge new options with the default configuration
            pgwSlider.config = $.extend({}, defaults, newOptions);

            // Setup
            setup();

            // Activate interval
            if (pgwSlider.config.autoSlide) {
                activateInterval();
            }

            return true;
        };

        // Slider initialization
        init();

        return this;
    }
})(window.Zepto || window.jQuery);

/*Strat of ebay_buy1.1.Html*/



/* End of ebay_buy1.1.html*/

/*Start of index.html*/



/*End of index.html*/

/*Start of ebay_buy1.2.html*/


