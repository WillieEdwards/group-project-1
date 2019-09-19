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

    // https://api.themoviedb.org/3/movie/550?api_key=d85d81953c9f6c3511e419e5fbfad6f4

    var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=" + query + "&api_key=d85d81953c9f6c3511e419e5fbfad6f4&limit=10";

    // console.log("url", queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(movies) {
        var response = movies.results.slice(0, 10);
        $('.movieOptions').empty();
        console.log('ajax response', response);
        for (let i = 0; i < response.length; i++) {
            var type
            var title = response[i].title;

            switch (response[i].genre_ids[0]) {
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

            var rating = response[i].vote_average;

            if (response[i].poster_path) {
                var imgURL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + response[i].poster_path;
            } else {
                var imgURL = "https://picsum.photos/185/278/?blur"
            }

            //if statement for placeholder 'not available'

            var overview = response[i].overview.slice(0, 145) + "...";

            var videoCard = $(`<div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                  <img src="${imgURL}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h6>Titile: ${title}</h6>
                  <h6>Rating: ${rating}</h6>
                  <h6>Genre: ${type}</h6>
                  <h6>Overview: ${overview}</h6>
                </div>
                <div class="card-action">
                  <a href="#" class="grabMovieTrailer" value="${title}">Watch Movie Trailer</a>
                </div>
              </div>
              </div>
            </div>`);

            console.log(videoCard)
            console.log($(".movieOptions"))
            $(".movieOptions").prepend(videoCard);
            $(".movieOptions").show();

        }

    })
}