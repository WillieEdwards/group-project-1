// MOVIE PERSONALITY TYPES

// Believer -14 fantasy, 878 science fiction

// Dramatic - 18 drama, 80 crime, 10752 war, 36 history

// Indie - 99 documentary

// Laughaholic - 35 comedy

// Nail Biter - 27 horror, 53 thriller, 9648 mystery

// Romantic - 10749 romance, 10751 family

// Stunt Double - 28 action, 12 adventure, 37 western

// Other - 16 animation, 10402 music, 10770 tv movie 
function displayMovieOptions(category) {

    var query;
    switch (category) {
        case "believer":
            query = "14" + "878"
                // code block
            break;
        case "dramatic":
            query = "18" + "80" + "10752"
                // code block
            break;
        case "indie":
            query = "99"
                // code block
            break;
        case "laughaholic":
            query = "35"
                // code block
            break;
        case "nailBiter":
            query = "27" + "53" + "9648"
                // code block
            break;
        case "romantic":
            query = "10749" + "10751"
                // code block
            break;
        case "stuntDouble":
            query = "28" + "12"
                // code block
            break;

        default:
            query = "16" + "36" + "10402" + "10770" + "37"
                // code block
    }

    var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=" + query + "&api_key=d85d81953c9f6c3511e419e5fbfad6f4";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response.results);

        var movieDiv = $("<div class= 'movie'>");

        var results = response.results;

        var pOne = $("<p>").text("Rating: " + results);

        movieDiv.append(pOne);

        // genre

        var genre = response.genre;

        var pTwo = $("<p>").text("Genre: " + genre);

        movieDiv.append(genre);


        // poster

        var imgURL = response.Poster

        var image = $("<img>").attr("src", imgURL);

        movieDiv.append(image);

        // rating

        // youtube trailer


    });

};

displayMovieOptions();

// https://api.themoviedb.org/3/movie/550?api_key=d85d81953c9f6c3511e419e5fbfad6f4
// {
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 16,
//         "name": "Animation"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 80,
//         "name": "Crime"
//       },
//       {
//         "id": 99,
//         "name": "Documentary"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 10751,
//         "name": "Family"
//       },
//       {
//         "id": 14,
//         "name": "Fantasy"
//       },
//       {
//         "id": 36,
//         "name": "History"
//       },
//       {
//         "id": 27,
//         "name": "Horror"
//       },
//       {
//         "id": 10402,
//         "name": "Music"
//       },
//       {
//         "id": 9648,
//         "name": "Mystery"
//       },
//       {
//         "id": 10749,
//         "name": "Romance"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       },
//       {
//         "id": 10770,
//         "name": "TV Movie"
//       },
//       {
//         "id": 53,
//         "name": "Thriller"
//       },
//       {
//         "id": 10752,
//         "name": "War"
//       },
//       {
//         "id": 37,
//         "name": "Western"
//       }
//     ]
//   }