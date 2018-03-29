console.log('Loaded!');

//to change the content of the webpage
var element= document.getElementById('text');
element.innerHTML="welcome";

//to shift the image
/*var img=document.getElementById("mad");
img.onclick = function () {
    img.style.marginLeft="100px";
};*/
//to shift image by using function call

/*var img = document.getElementById("mad");
var marginLeft=0;
function moveRight () {
    marginLeft=marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
    
};*/
var button=document.getElementById("counter");
button.onclick=function() {
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechsnge=function() {
        if(request.readystate===XMLHtttpRequest.DONE) {
            //take some action
            if(request.status===200) {
                var counter=request.responseText;
                 var span=document.getElementById("count");
    span.innerHTML=counter.toString();
            }
        }
       //not dne yet 
    };
    //make a request
   request.open('GET','http://http://srijanssnl406.imad.hasura-app.io/counter',true);
   request.send(null);
};