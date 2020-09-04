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

var resCor = localStorage.getItem("rCorrect");
var reswrong = localStorage.getItem("rInCorrect");
var resNot = localStorage.getItem("rNotAns");

if(resCor <= 3){
    $("img").attr("src","images/hermione_sad.gif");
}
else if(resCor > 3 && resCor <=6){
    $("img").attr("src","images/ron_smile.gif");
}
else{
    $("img").attr("src","images/harry_laugh.gif");
}

$("#crt").text(resCor);
$("#wrng").text(reswrong);
$("#notans").text(resNot);