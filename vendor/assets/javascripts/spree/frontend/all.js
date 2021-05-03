// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require accounting.min
//= require js-routes
//= require spree/frontend

//= require_tree .


 // Example starter JavaScript for disabling form submissions if there are invalid fields
 
 $( document ).ready(function() {
  
  let slider = $('.slider .items');
  let items = $('.slider .items .item .child')
  const leftButton = $('#left')
  const rightButton = $('#right')
  
  let scrollPos = 0
  if (scrollPos >= 0) leftButton.hide()
  
  leftButton.click(function() {
    scrollPos += slider.width();
    if (scrollPos >= 0) {
      leftButton.hide()
      scrollPos = 0
    }
    rightButton.show()
    slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
  });

  rightButton.click((e) => {
    scrollPos -= slider.width();
    if (scrollPos <= -(items.innerHeight() - 2) * 15) rightButton.hide()
    leftButton.show()
    slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
  });

});




$(document).ready(function() {
    if (window.location.pathname == '/') {
        (function () {
            const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;
          
            let birthday = "april 30, 2021 00:00:00",
                countDown = new Date(birthday).getTime(),
                x = setInterval(function() {    
          
                  let now = new Date().getTime(),
                      distance = countDown - now;
          
                  document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          
                  //do something later when date is reached
                  if (distance < 0) {
                    let headline = document.getElementById("headline"),
                        countdown = document.getElementById("countdown"),
                        content = document.getElementById("content");
          
                    headline.innerText = "It's my birthday!";
                    countdown.style.display = "none";
                    content.style.display = "block";
          
                    clearInterval(x);
                  }
                  //seconds
                }, 0)
            }());
}
});

$( document ).on('turbolinks:load', function() {
  var flky = new Flickity( '.carousel', {
      // options, defaults listed
    
      accessibility: true,
      // enable keyboard navigation, pressing left & right keys
    
      adaptiveHeight: true,
      // set carousel height to the selected slide
    
      autoPlay: true,
      // advances to the next cell
      // if true, default is 3 seconds
      // or set time between advances in milliseconds
      // i.e. `autoPlay: 1000` will advance every 1 second
    
      cellAlign: 'center',
      // alignment of cells, 'center', 'left', or 'right'
      // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
    
      cellSelector: undefined,
      // specify selector for cell elements
    
      contain: false,
      // will contain cells to container
      // so no excess scroll at beginning or end
      // has no effect if wrapAround is enabled
    
      draggable: '>1',
      // enables dragging & flicking
      // if at least 2 cells
    
      dragThreshold: 3,
      // number of pixels a user must scroll horizontally to start dragging
      // increase to allow more room for vertical scroll for touch devices
    
      freeScroll: false,
      // enables content to be freely scrolled and flicked
      // without aligning cells
    
      friction: 0.2,
      // smaller number = easier to flick farther
    
      groupCells: false,
      // group cells together in slides
    
      initialIndex: 0,
      // zero-based index of the initial selected cell
    
      lazyLoad: true,
      // enable lazy-loading images
      // set img data-flickity-lazyload="src.jpg"
      // set to number to load images adjacent cells
    
      percentPosition: true,
      // sets positioning in percent values, rather than pixels
      // Enable if items have percent widths
      // Disable if items have pixel widths, like images
    
      prevNextButtons: true,
      // creates and enables buttons to click to previous & next cells
    
      pageDots: false,
      // create and enable page dots
    
      resize: true,
      // listens to window resize events to adjust size & positions
    
      rightToLeft: false,
      // enables right-to-left layout
    
      setGallerySize: true,
      // sets the height of gallery
      // disable if gallery already has height set with CSS
    
      watchCSS: false,
      // watches the content of :after of the element
      // activates if #element:after { content: 'flickity' }
    
      wrapAround: false
      // at end of cells, wraps-around to first for infinite scrolling
    
  });
});




    "use strict";

    productScroll();
    
    function productScroll() {
      let slider = document.getElementById("slider");
      let next = document.getElementsByClassName("pro-next");
      let prev = document.getElementsByClassName("pro-prev");
      let slide = document.getElementById("slide");
      let item = document.getElementById("slide");
    
      for (let i = 0; i < next.length; i++) {
        //refer elements by class name
    
        let position = 0; //slider postion
    
        prev[i].addEventListener("click", function() {
          //click previos button
          if (position > 0) {
            //avoid slide left beyond the first item
            position -= 1;
            translateX(position); //translate items
          }
        });
    
        next[i].addEventListener("click", function() {
          if (position >= 0 && position < hiddenItems()) {
            //avoid slide right beyond the last item
            position += 1;
            translateX(position); //translate items
          }
        });
      }
    
      function hiddenItems() {
        //get hidden items
        let items = getCount(item, false);
        let visibleItems = slider.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
      }
    }
    
    function translateX(position) {
      //translate items
      slide.style.left = position * -210 + "px";
    }
    
    function getCount(parent, getChildrensChildren) {
      //count no of items
      let relevantChildren = 0;
      let children = parent.childNodes.length;
      for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
          if (getChildrensChildren)
            relevantChildren += getCount(parent.childNodes[i], true);
          relevantChildren++;
        }
      }
      return relevantChildren;
    }
    