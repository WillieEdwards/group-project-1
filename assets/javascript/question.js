$("#personalityQuiz").submit(function (event) {

    event.preventDefault();

    var answers = $(this).serializeArray();

    var scores = {
        believer: 0,
        dramatic: 0,
        indie: 0,
        laughaholic: 0,
        nailBiter: 0,
        romantic: 0,
        stuntDouble: 0,
        other: 0,
    }

    for (var answer of answers) {
        scores[answer.value] += 1;
    }

    console.log("scores", scores);

    // displayMovieOptions(scores); 

    var maxGenre = Object.keys(scores).reduce(function (a, b) { 
        return scores[a] > scores[b] ? a : b 
    })

    console.log(maxGenre);

    $("#personalityQuiz").css("display", "none");
    $(".result#" + maxGenre).css("display", "block");

    displayMovieOptions(maxGenre);
    
});