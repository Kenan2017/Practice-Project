var image = document.getElementsByTagName(img);
image.onclick = function change (){
  var oldSrc = image.getAttribute("src");
  if (oldSrc = 'images/firefox-icon.png'){
    oldSrc.setAttribute("src", "https://cdn.pixabay.com/photo/2018/06/24/18/46/dovetail-3495224_960_720.jpg")
  }
	else {
    oldSrc.setAttribute("src",'images/firefox-icon.png');
  }
}
