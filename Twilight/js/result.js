
var resCor = localStorage.getItem("rCorrect");
var reswrong = localStorage.getItem("rInCorrect");
var resNot = localStorage.getItem("rNotAns");

if(resCor <= 3){
    $("img").attr("src","images/bella_sad.gif");
}
else if(resCor > 3 && resCor <=6){
    $("img").attr("src","images/edward_smile.gif");
}
else{
    $("img").attr("src","images/jacob_laugh.gif");
}

$("#crt").text(resCor);
$("#wrng").text(reswrong);
$("#notans").text(resNot);