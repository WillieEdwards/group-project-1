     $(document).on("click", ".grabMovieTrailer", function () {
        
        var trailerTitle = $(this).attr("value")
        var searchTerm = trailerTitle + " movie trailer"
        
        var queryString = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + searchTerm + "&key=AIzaSyCL0nfgNuuV-XLvLcJ0Cs6k4fjdJLlWvwQ";
        
        $.get(queryString).then(function(response) {
            console.log(response)            
            
            $(".myVideoElement").append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${response.items[0].id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
            console.log(response.items[0].id.videoId);
            
        });
    });