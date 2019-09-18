// MOVIE PERSONALITY TYPES

var query;

function displayMovieOptions(category) {

    var believerArray = [14, 878];

    var dramaticArray = [18, 36, 80, 10752];

    var nailBiterArray = [27, 53, 9648];

    var romanticArray = [10749, 10751];

    var stuntDoubleArray = [12, 28, 37];

    var otherArray = [16, 10402, 10770];

    switch (category) {
        case "believer":
            query = believerArray
                // Believer -14 fantasy, 878 science fiction
            break;
        case "dramatic":
            query = dramaticArray
                // Dramatic - 18 drama, 80 crime, 10752 war, 36 history
            break;
        case "indie":
            query = "99"
                // Indie - 99 documentary
            break;
        case "laughaholic":
            query = "35"
                // Laughaholic - 35 comedy
            break;
        case "nailBiter":
            query = nailBiterArray
                // Nail Biter - 27 horror, 53 thriller, 9648 mystery
            break;
        case "romantic":
            query = romanticArray
                // Romantic - 10749 romance, 10751 family
            break;
        case "stuntDouble":
            query = stuntDoubleArray
                // Stunt Double - 28 action, 12 adventure, 37 western
            break;

        default:
            query = otherArray
                // Other - 16 animation, 10402 music, 10770 tv movie 

    };
    console.log("query", query)
    getMovieOptions()
    return query;
}


function getMovieOptions() {

    var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=" + query + "&api_key=d85d81953c9f6c3511e419e5fbfad6f4";

    console.log("url", queryURL);

    var resultsTitleArray = [];

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log('ajax response', response);

        var type;

        for (let i = 0; i < response.results[0].genre_ids.length; i++) {

            switch (response.results[0].genre_ids[i]) {
                case 28:
                    type = "Action"
                        // code block
                    break;
                case 12:
                    type = "Adventure"
                        // code block
                    break;
                case 16:
                    type = "Animation"
                        // code block
                    break;
                case 35:
                    type = "Comedy"
                        // code block
                    break;
                case 80:
                    type = "Crime"
                        // code block
                    break;
                case 99:
                    type = "Documentary"
                        // code block
                    break;
                case 18:
                    type = "Drama"
                        // code block
                    break;
                case 10751:
                    type = "Family"
                        // code block
                    break;
                case 14:
                    type = "Fantasy"
                        // code block
                    break;
                case 36:
                    type = "History"
                        // code block
                    break;
                case 27:
                    type = "Horror"
                        // code block
                    break;
                case 10402:
                    type = "Music"
                        // code block
                    break;
                case 9648:
                    type = "Mystery"
                        // code block
                    break;
                case 10749:
                    type = "Romance"
                        // code block
                    break;
                case 878:
                    type = "Science Fiction"
                        // code block
                    break;
                case 10770:
                    type = "TV Movie"
                        // code block
                    break;
                case 53:
                    type = "Thriller"
                        // code block
                    break;
                case 10752:
                    type = "War"
                        // code block
                    break;
                case 37:
                    type = "Western"

            }
            console.log("type", type);
            return type;
        };

        // title

        var movieDiv = $("<div class= 'movie'>");

        var title = response.results[0].title;

        // console.log(title);

        var pOne = $("<p>").text("Title: " + title);

        movieDiv.append(pOne);

        resultsTitleArray.append(pOne);

        // rating

        var rating = response.results[0].vote_average;

        // console.log(rating);

        var pTwo = $("<p>").text("Vote Average: " + rating + "/10");

        movieDiv.append(pTwo);

        // genre

        var genre = response.results[0].genre_ids;

        // console.log(genre);

        var pThree = $("<p>").text("Genre: " + genre);

        movieDiv.append(pThree);

        // poster

        var imgURL = response.results[0].poster_path;

        // console.log(imgURL);

        var image = $("<img>").attr("src", imgURL);

        movieDiv.append(image);
        // movieDiv.append(image);

        // youtube trailer

        // movie title array for youtube

        // create cards that click handler will get attached too



        // function renderButtons() {
        //     $("#buttons-display").empty();
        //     for (var i = 0; i < moods.length; i++) {
        //         var newMood = $("<button>")
        //             .addClass("mood")
        //             .attr("data-mood", moods[i])
        //             .text(moods[i]);
        //         $("#buttons-display").append(newMood);
        //     }
        // }
        // $("#mood-button").on("click", function(event) {
        //     event.preventDefault();
        //     var newMood = $("#mood-input").val().trim();
        //     console.log(newMood);
        //     moods.push(newMood);
        //     renderButtons();
        // });
        // renderButtons();
        // $(document).on("click", ".addVideo", function(event) {
        //     event.preventDefault();

        // });
    })
}
resultsTitleArray();

displayMovieOptions();


// https://api.themoviedb.org/3/movie/550?api_key=d85d81953c9f6c3511e419e5fbfad6f4