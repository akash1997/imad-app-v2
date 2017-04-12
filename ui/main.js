console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};

var button = document.getElementById('counter');
button.onclick = function() {
    //Create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some Action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not Done Yet
    };
    
    //Make a request
    request.open('GET', 'http://akash1997.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit Name

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    //Create a request to the counter endpoint
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some Action
            if(request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length;i++) {
                    list+="<li>"+names[i]+"</li>";
                }
                var ul = document.getElementById('nameList');
                ul.innerHTML = list;
            }
        }
        //Not Done Yet
    };
    
    //Make a request
    request.open('GET', 'http://akash1997.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    //Capture a list of names and render it as a list
    
};
