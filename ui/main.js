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
//to simply update once page is clicked

/*var button=document.geElementById("counter");
var counter=0;
button.onclick=function() {
  counter=counter+1;
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
};*/


//to accept request and update later
/*var button=document.getElementById("counter");
button.onclick=function() {
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function() {
        if(request.readystate===XMLHtttpRequest.DONE) {
            //take some action
            if(request.status===200) {
                var counter=request.responseText;
                counter=counter+1;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
       //not dne yet 
    };
    //make a request
   request.open('GET','http://srijanssnl406.imad.hasura-app.io/counter',true);
   request.send(null);
};*/

//submit name

var nameInput=document.getElementById("name");
var name=nameInput.value();
var submit=document.getElementById("submit_btn");
submit.onclick= function() {
    //make request to sever for names
    
    //capure name list and render it
    var names=["name1","name2","name3"];
    var list="";
    for(var i=0;i<names.length;i++)
    {
        list='<li>'+ names[i]+'</li>';
        
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
    
    
};
