# Advanced-Product-Options
Options for Advanced Product Options on Shopify. 

Advanced Product Options tends to be very WYSIWYG.

We first need to wait for the app to load. This can also be used for most Shopify apps that wait to load.

$(window).load(function() {
  if ($('body.product').length) { // are we on the product page?
    var checkExist = setInterval(function() { // repeats until "if" == true
   	  if ($('.has-mw-options').length) { // checks to see if class exists
        console.log("Options Exist!"); // YAY!
        clearInterval(checkExist);  // no more checking
      
        // Place your code here
      
      }
    }, 100);
  }
});
