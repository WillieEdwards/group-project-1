     $(document).on("click", ".grabMovieTrailer", function (event) {
        console.log(event)
        
        
        
        var trailerTitle = ""
        var searchTerm = trailerTitle+ " movie trailer"
        
        var queryString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchTerm + "&key=AIzaSyCYNVpx7UIKb2oZrtIxOtRKZEdGuq3CNnE";
        
        $.get(queryString).then(function(response) {
            
            
            $("#myVideoElement").append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${response.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
            console.log(response.items[0].id.videoId);
            
            
        });
    });