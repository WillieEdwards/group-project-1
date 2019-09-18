$(document).ready(function(){
  $(".personalityTest").hide();
  $(".movieOptions").hide();
  $(".myVideoElement").hide();
  $(".aboutUs").hide();

  
  $("#start").click(function(){
  $(".personalityTest").show();
  $(".mainContent").hide();
  $(".myVideoElement").hide();
  $(".movieOptions").hide();
  $(".aboutUs").hide();
  
  })
  
  $("#res").click(function(){
  $(".mainContent").hide();
  $(".movieOptions").show();
  $(".aboutUs").hide();
  $(".myVideoElement").show();

})

$("a").click(function(){
  $(".mainContent").hide();
  $(".movieOptions").hide();
  $(".aboutUs").show();
  $(".myVideoElement").hide();

})

  
  });
  