// Product Options next set to show.
$(window).load(function() {
if ($('body.product').length) { // are we on the product page?
var checkExist = setInterval(function() { // repeats until "if" == true
   	if ($('.has-mw-options').length) { // checks to see if class exists
      console.log("Options Exist!"); // YAY!
      clearInterval(checkExist);  // no more checking

// Buttons
      
$(".button-value:contains(over)").click(function(){
  console.log ("over 7 clicked");
});
      
 // ADD INPUT VALUES
      // Add IDs to buttons to make it easier to call them out.
      $.each($('.over-one .button-option .button-value-container'), function(index, value){
  		var num = index + 1;
  		$(value).attr('id','over-one_'+ num);
	  });
      $.each($('.over-two .button-option .button-value-container'), function(index_02, value_02){
  		var num_02 = index_02 + 1;
  		$(value_02).attr('id','over-two_'+ num_02);
	  });
      $.each($('.over-three .button-option .button-value-container'), function(index_03, value_03){
  		var num_03 = index_03 + 1;
  		$(value_03).attr('id','over-three_'+ num_03);
	  });
      
      
        var numOver = ["one","two","three"]
        var numValues = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"];
        var numValues_01 = ["1","2","3","4","5","6","7"];
        var numValues_02 = ["8","9","10","11","12","13","14"];
        var numValues_03 = ["15","16","17","18","19","20","21"];
        var numValues_04 = ["22","23","24","25","26","27","28"];
      $('.coupler-one .swatch-option .swatch-value-container').click(function(){
        //var attr = $(".coupler-one .mw-input input").attr('disabled');
        // more promising - see if you can make the if{} have a limited amount to the i for a shorter code
        for (let i = 0; i < numValues.length; i++) {
          if ($("#over-one_" + numValues_01[i] + " " + ".button-value--selected").length) {
            console.log ("#over-id_" + numValues_01[i])
            console.log ("selected 1")
          }
          if ($("#over-one_" + numValues_02[i] + " " + ".button-value--selected").length) {
            // if the value is 14-20 we make the input 2
            // YAY! it works. now we need to make sure the input is enter correctly to reflect the price.
            $(".coupler-one .swatch-selected .mw-input input").val("2");
            console.log ("#over-id_" + numValues_02[i])
            console.log ("selected 2")
          }
          if ($("#over-one_" + numValues_03[i] + " " + ".button-value--selected").length) {
            $(".coupler-one .swatch-selected .mw-input input").val("3");
            console.log ("#over-id_" + numValues_03[i])
            console.log ("selected 3")
          }
          if ($("#over-one_" + numValues_04[i] + " " + ".button-value--selected").length) {
            $(".coupler-one .swatch-selected .mw-input input").val("4");
            console.log ("#over-id_" + numValues_04[i])
            console.log ("selected 4")
          }
        }
        
      });
      $('.coupler-two .swatch-option .swatch-value-container').click(function(){
        for (let i = 0; i < numValues.length; i++) {
          if ($("#over-two_" + numValues_01[i] + " " + ".button-value--selected").length) {
            console.log ("selected 1")
          }
          if ($("#over-two_" + numValues_02[i] + " " + ".button-value--selected").length) {
            $(".coupler-two .swatch-selected .mw-input input").val("2");
            console.log ("selected 2")
          }
          if ($("#over-two_" + numValues_03[i] + " " + ".button-value--selected").length) {
            $(".coupler-two .swatch-selected .mw-input input").val("3");
            console.log ("selected 3")
          }
          if ($("#over-two_" + numValues_04[i] + " " + ".button-value--selected").length) {
            $(".coupler-two .swatch-selected .mw-input input").val("4");
            console.log ("selected 4")
          }
        }
        
      });
      $('.coupler-three .swatch-option .swatch-value-container').click(function(){
        for (let i = 0; i < numValues.length; i++) {
          if ($("#over-three_" + numValues_01[i] + " " + ".button-value--selected").length) {
            console.log ("selected 1")
          }
          if ($("#over-three_" + numValues_02[i] + " " + ".button-value--selected").length) {
            $(".coupler-three .swatch-selected .mw-input input").val("2");
            console.log ("selected 2")
          }
          if ($("#over-three_" + numValues_03[i] + " " + ".button-value--selected").length) {
            $(".coupler-three .swatch-selected .mw-input input").val("3");
            console.log ("selected 3")
          }
          if ($("#over-three_" + numValues_04[i] + " " + ".button-value--selected").length) {
            $(".coupler-three .swatch-selected .mw-input input").val("4");
            console.log ("selected 4")
          }
        }
        
      });
      
      // if (over-x id is clicked && has .button-value--selected) && (inches-x != '0"') {add X to input} ----only works for 7, 14, 21, 28
            
      
//      END TEST
      
      let x = document.getElementsByClassName('corner');
      let y = document.getElementsByClassName('other');
      let x_2 = document.getElementsByClassName('corner-2');
      let y_2 = document.getElementsByClassName('other-2');
      //let x_3 = document.getElementsByClassName('corner-3');
      //let y_3 = document.getElementsByClassName('other-3');
      
      $(".radio-buttons .button-value-container div:contains(Corner Piece)").addClass('corner');
      $(".radio-buttons .button-value-container div:not(.corner)").addClass('other');
      $(".radio-buttons-2 .button-value-container div:contains(Corner Piece)").addClass('corner-2');
      $(".radio-buttons-2 .button-value-container div:not(.corner-2)").addClass('other-2');
      $(".radio-buttons-3 .button-value-container div:contains(Corner Piece)").addClass('corner-3');
      $(".radio-buttons-3 .button-value-container div:not(.corner-3)").addClass('other-3');
      
      // first selection
      $(x).click(function(){
        if ($('.end-piece').hasClass('show-end')){
          $('.end-piece').removeClass('show-end').removeClass('mw-validate-required-option');
          $('.end-piece .button-value--selected').click();
        }
        else {
          $('.end-piece').addClass('show-end').addClass('mw-validate-required-option');
        }
	  });
      $(y).click(function(){
        $('.end-piece').removeClass('show-end').removeClass('mw-validate-required-option');
        $('.end-piece .button-value--selected').click();
	  });
      
      // second selection
      $(x_2).click(function(){
        if ($('.end-piece-2').hasClass('show-end-2')){
          $('.end-piece-2').removeClass('show-end-2').removeClass('mw-validate-required-option');
          $('.end-piece-2 .button-value--selected').click();
        }
        else {
          $('.end-piece-2').addClass('show-end-2').addClass('mw-validate-required-option');
        }
	  });
      $(y_2).click(function(){
        $('.end-piece-2').removeClass('show-end-2').removeClass('mw-validate-required-option');
        $('.end-piece-2 .button-value--selected').click();
	  });

     
	}
}, 100);
}
});
