
  function checkScore(){
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var notAnswered = 0;
    var output = [2,1,1,2,3,2,1,1,2,1];
    var i=0;

    $(".card-body").each(function(){
        if($("#ans"+i+output[i]).is(":checked")){
            console.log(i+" "+output[i]);
            correctAnswer++;
        }
        else if(!($("#ans"+i+"1").is(":checked")) && !($("#ans"+i+"2").is(":checked")) && !($("#ans"+i+"3").is(":checked"))){
            console.log("not answered");
            notAnswered++;
        }
        else{
            console.log("incorerct");
            wrongAnswer++;
        }
        i++;
    })
    localStorage.setItem("rCorrect",correctAnswer);
    localStorage.setItem("rInCorrect",wrongAnswer);
    localStorage.setItem("rNotAns",notAnswered);
    window.open("result.html","_self");
}