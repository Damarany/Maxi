
var x = window.matchMedia("(max-width: 700px)");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    document.getElementById("m-nav").style.backgroundColor = "black";
  }else if(x.matches){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("m-nav").style.backgroundColor = "black";
  }
  else{
      document.getElementById("m-nav").style.backgroundColor = "transparent";
  }
}else{
    document.getElementById("m-nav").style.backgroundColor = "transparent";
}

}

let click = document.getElementById("click");


click.onclick = function(){
    document.getElementById("m-nav").style.backgroundColor = "black";
    }

// alert("ssasdsadas");