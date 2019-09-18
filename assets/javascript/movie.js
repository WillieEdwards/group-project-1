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

    // console.log("url", queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $('.movieOptions').empty();
        console.log('ajax response', response);
        for (let i = 0; i < response.results.length; i++) {
            var type
            var title = response.results[i].title;

            switch (response.results[i].genre_ids[0]) {
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
            // console.log('array', resultsTitleArray)

            var rating = response.results[0].vote_average;
            var imgURL = response.results[0].poster_path;

            var videoCard = $(`<div class="col s12 m7">
            <div class="card horizontal">
              <div class="card-image">
                  <img src="${imgURL}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Titile: ${title}</p>
                  <p>Rating: ${rating}</p>
                  <p>Genre: ${type}</p>
                </div>
                <div class="card-action">
                  <a href="#" class="grabMovieTrailer">Watch Movie Trailer</a>
                </div>
              </div>
              </div>
            </div>`);

            // videoCard.attr('class', 'col s12 m7');

            // poster

            // console.log(title);

            // var movieTitleDiv = $("<h5>").attr('class', 'header').text("Title: " + title);

            // videoCard.append(movieTitleDiv);

            // rating



            // console.log(rating);

            // var pTwo = $("<p>").text("Vote Average: " + rating + "/10");

            // videoCard.append(pTwo);

            // genre

            // var genre = response.results[0].genre_ids;

            // console.log(genre);

            // var pThree = $("<p>").text("Genre: " + genre);

            // videoCard.append(pThree);



            // console.log(imgURL);

            // var image = $("<img>").attr("src", imgURL);

            // videoCard.append(image);

            // var movieOptionsDiv = $('.movieOptions')
            // console.log('movieOptionsDiv', movieOptionsDiv)

            // movieOptionsDiv.append(videoCard)
            // movieDiv.append(image);
            // renderCard();
            // youtube trailer

            // movie title array for youtube

            // create cards that click handler will get attached too

            //     <div class="col s12 m7">
            //     <h2 class="header">Horizontal Card</h2>
            //     <div class="card horizontal">
            //       <div class="card-image">
            //         <img src="https://lorempixel.com/100/190/nature/6">
            //       </div>
            //       <div class="card-stacked">
            //         <div class="card-content">
            //           <p>I am a very simple card. I am good at containing small bits of information.</p>
            //         </div>
            //         <div class="card-action">
            //           <a href="#">This is a link</a>
            //         </div>
            //       </div>
            //     </div>
            //   </div>

            // function renderCard() {

            // for (let i = 0; i < resultsTitleArray.length; i++) {
            // console.log("loop trigger")

            // movieTitleDiv.text(pOne);

            // videoCard.append(movieTitleDiv);

            // pTwo.text(videoCard);
            // pThree.text(videoCard);
            console.log(videoCard)
            console.log($(".movieOptions"))
            $(".movieOptions").prepend(videoCard);
            $(".movieOptions").show();
            // }
            // }
        }

    })
}


// resultsTitleArray();

// displayMovieOptions();


// https://api.themoviedb.org/3/movie/550?api_key=d85d81953c9f6c3511e419e5fbfad6f4