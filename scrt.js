$(document).ready(function(){
  $(".card-body").on('click',function (event) {
    $(this).parent().animate({
      opacity:"0"
    },100);
    $(".popup").fadeIn();
    $(".popmenu").html($(this).parent().html()).appendTo(".popup")
  });
  $(".popup").on('click',function (event) {
    $(".popup").fadeOut();
    $(".card-main").css('opacity','1');
  });
  $('header').find('h1').mouseenter(function(event){
    $(this).each(function(index,element){
      var pleace = $('.mainbar').attr('class');
      var count = $('.mainbar').length;
      $(this).text(count+"tag in "+pleace);
    });
  });
  $('header').find('h1').mouseleave(function(event){
    $(this).each(function(index,element){
      $(this).text("homepage main");
    });
  });
  $(".mainbar").onclick(function(){
    document.location.href='201868007_.html'
  });
});
