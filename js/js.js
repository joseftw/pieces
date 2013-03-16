var myApp = {

  init: function () 
  { 
    myApp.animateLogo();

    $('.overlay').mouseenter(function(){
      var overlayDiv = $(this);
      var infoDiv = $(overlayDiv).siblings();
          overlayDiv.stop().animate({opacity: 0.01}, 340, function(){

              if(overlayDiv[0].id === 'thirdGameOverlay' )
              {
                $('#row3-2-bottom-triangle').fadeOut();
              }
              infoDiv.stop().fadeIn('fast');
          });
    });

    $('.overlay').mouseout(function(){
      var overlayDiv = $(this);
      var infoDiv = $(overlayDiv).siblings();
          overlayDiv.stop().animate({opacity: 0.8}, 340, function(){
              infoDiv.stop().fadeOut('fast');
          });
    });
  },

  animateLogo: function()
  {
    var row1 = $('.row1');
    var row2 = $('.row2');
    var row3 = $('.row3');
    var allImgs = $('#main img');
        allImgs.hide(); 
    
    row1.css("position", "absolute");
    row2.css("position", "absolute");
    row3.css("position", "absolute");

    row1.css('top', "50px");
    row1.css('left', "150px");

    row2.css('top', "-72px");
    row2.css('right', "323px");

    row3.css('bottom', "-72px");
    row3.css('left', "120px");

    row1.animate({top : "0px", left: "0px" }, 500);
    row1.css("position", "relative");

    row2.animate({top : "0px", left: "0px" }, 500);
    row2.css("position", "relative");

    row3.animate({top : "0px", left: "0px" }, 500);
    row3.css("position", "relative");


    var allDivs = $('#main div.visibleTriangle');
        allDivs.hide();
    $(allDivs).each(function(index) {
      console.log(index);
      if(index < allDivs.length -1)
      {
        $(this).delay(150*index).fadeIn(200);
      }
      else
      {
        $(this).delay(150*index).fadeIn(200, function(){
          allImgs.show('slow');
        });
        
      }
    });

  }
    
};

window.onload = myApp.init;