/--------counter---------/ 


$(document).ready(function(){
    loopcounter('counter-class');
});




/*----------sticky bar---------*/

$(window).scroll(function(){
    var scrollamount = $(window).scrollBottom()
    if(scrollamount > 50){
      $("#Timer-part").addClass("fixed")
    }else{
      $("#Timer-part").removeClass("fixed")
    }
  })