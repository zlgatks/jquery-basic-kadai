$(function(){
  $(window).on('load', function(){
    console.log('loadイベントが発生しました');
  });
  $(window).on('scroll', function(){
    console.log('srollイベントが発生しました');
  });
});
