# Options for Advanced Product Options by Mageworx on Shopify (and other apps)

## Quick Intro

Advanced Product Options tends to be very WYSIWYG. I created this to make the app a bit more "custom" by eliminating some of the limitations.

We first need to wait for the app to load on the product page. This can also be used for most Shopify apps that wait to load on other pages as well.

```
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
```

Add IDs to buttons to make it easier to call them out (optional).
```
$.each($('.someClass .button-option .button-value-container'), function(index, value){ // let's use this button option!
  var num = index + 1;
  $(value).attr('id','someID_'+ num);
});
```

The reason for the IDs is that the app makes very general classes. There are times where you can create a class for each option, however this is not always the case.

## Things you can do

One of the coolest customizations you can use for this is creating a font preview next to the input or wherever you want really. Just use a bit of Angular and you're done. This is where the custom IDs can help if you have multiple input selections.

Another nifty trick is when a selection is made with buttons, we'll need to call out another option based on the button selection. While out of the box the app can handle this, sometimes you'll need to hide a selection that has TONS of options. If you have used this particular app, it can be difficult and very daunting.
Simply class the option, then create some for & if statement. Here's part of an "unfinished" sample using an pre-defined array (I shortened this up for sake of my sanity)
```
var numOver = ["one","two","three"]
var numValues = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
var numValues_02 = ["8","9","10","11","12","13","14"];
$('.example .swatch-option .swatch-value-container').click(function(){
  for (let i = 0; i < numValues.length; i++) {
    if ($("#someID_" + numValues_02[i] + " " + ".button-value--selected").length) { // used custom ID here
      // if the value is 14-20 we make the input 2
      // YAY! it works. now we need to make sure the input is enter correctly to reflect the price.
      $(".classOne .swatch-selected .mw-input input").val("2");
    }
  }
});
```

Good luck! And have fun with this simple little code!
