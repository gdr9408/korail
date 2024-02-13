// gnb슬라이드

$('.menuBtn').click(function(){
  $('.gnb').animate({right:0},300,'swing')
  $('.dark').fadeIn(300)
  $('body').css({overflow:'hidden'})
})

//닫기
$('.close, .dark').click(function(){
  $('#gnb').animate({right:'-100%'},300,'swing')
  $('.dark').fadeOut(200)
  $('.dark').css({overflow:'auto'})
})