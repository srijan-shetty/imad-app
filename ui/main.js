console.log('Loaded!');

//to change the content of the webpage
var element= document.getElementById('text');
element.innerHTML="bthgrfreh";

//to shift the image
/*var img=document.getElementById("mad");
img.onclick = function () {
    img.style.marginLeft="100px";
};*/
//to shift image by using function call

var img = document.getElementById("mad");
var marginLeft=0;
function moveRight () {
    marginLeft=marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var internal = setInternal(moveRight, 100);
    
}