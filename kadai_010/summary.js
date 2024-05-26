$(function() {
  $('#change-color').on('click',function(){
    $('p').css('color','blue');
  });
  $('#change-text').on('click',function(){
    $('p').text("Hello! World!");
  });
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});