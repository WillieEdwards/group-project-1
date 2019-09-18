$(document).ready(function(){
  $(".personalityTest").hide();
  $(".movieGenre").hide();
  $(".movieOptions").hide();

  
  $("#start").click(function(){
  $(".personalityTest").show();
  $(".mainContent").hide();
  $(".movieGenre").hide();
  $(".movieOptions").hide();
  
  })
  
  $("#result").click(function(){
  $(".movieGenre").show();
  $(".mainContent").hide();
  $(".personalityTest").hide();
  $(".movieOptions").hide();

})

$("#suggest").click(function(){
  $(".movieGenre").hide();
  $(".mainContent").hide();
  $(".personalityTest").hide();
  $(".movieOptions").show();

})



  
  });
  