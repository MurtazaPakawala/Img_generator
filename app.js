function generate() {
  console.log("clicked the generate button");
  var image = document.createElement("img");
  image.src = "static/naruto_image.png";

  var element = document.getElementById("frame");
  element.appendChild(image);
}
