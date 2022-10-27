AOS.init();


/* topBtn 클릭시 제일 위로 */
$(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>500){
      $('#topBtn').fadeIn();
    }else{
      $('#topBtn').fadeOut();
    }
  });

  $('#topBtn').click(function(){
    $('html, body').animate({
      scrollTop : 0
    }, 400);
  });
});



$(window).scroll(function(){
  let yOffset = window.pageYOffset;
  let calc = yOffset / ($('body').outerHeight() - $(window).outerHeight());
  
  $('.onTkt .back').css({
      'transform' : `rotate(${calc*360}deg)`
  });

});
