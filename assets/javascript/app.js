//grab the value the user wants to search for using jquery and save it into a variable
//concatinate the value into a query string
//make the request to get the data
//then once response recieved, grab iframe code from youtube, click share then embed
//concatinate the video id into the end of the embed string into the source

// var searchTerm = $("#myInput").val();
var title = "Texas Chainsaw Massacre"
var searchTerm = title+ " movie trailer"

var queryString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchTerm + "&key=AIzaSyCYNVpx7UIKb2oZrtIxOtRKZEdGuq3CNnE";

$.get(queryString).then(function(response) {

    
    $("#myVideoElement").append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${response.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    console.log(response.items[0].id.videoId);
    

});