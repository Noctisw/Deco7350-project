// get popup
var popup = document.getElementById('myPopup');
 
// get img
var img = document.getElementById('img1');
var popImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    popup.style.display = "block";
    popImg.src = this.src;
    captionText.innerHTML = this.alt;
}
 
// get span && close button
var span = document.getElementsByClassName("close")[0];
 
// click x to close
span.onclick = function() { 
  modal.style.display = "none";
}