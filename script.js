 /*function showhide(){
     var x = document.getElementById("mydiv");
     if (x.style.display === "none") {
      x.style.display = "block";
      x.style.color= "" ? "blue" : "red";
     } else {
       x.style.display = "none";    
    }
   }*/
  status = 1;
function showhide() {
//Note the lowercase first letter.
x = document.getElementById("mydiv");

if(status==1) {
    x.style.display = "block";
    x.style.color = "blue";
    status = 2;
}
else if(status==2) {
    x.style.display = "none";
    status = 3;
}
else if(status==3) {
    x.style.display = "block";
    x.style.color = "red";
    status = 4;
}
else if(status==4) {
    x.style.display = "none";
    status = 1;
}

}
  