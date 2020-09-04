function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
  function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }

  function myAccFuncn() {
    var x = document.getElementById("Novel");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-green";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-green", "");
    }
  }

  function myAccFuncv() {
    var x = document.getElementById("Vehicle");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-green";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-green", "");
    }
  }

  function checkScore(){
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var notAnswered = 0;
    var output = [3,2,2,3,2,1,1,3,2,3];
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