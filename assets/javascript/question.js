$("#personalityQuiz").submit(function(event){

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

    for(var answer of answers){
        scores[answer.value] += 1;
    }

    // console.log(scores);

    var maxGenre = "believer";

    for(var genre in scores){
        // console.log(scores[genre]);
        if(scores[genre] > scores[maxGenre]){
            maxGenre = genre;
        }
    }

    $("#personalityQuiz").css("display", "none");
    $(".result#"+maxGenre).css("display", "block");
});