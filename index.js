(function(){
    window.onload = function(){
        
        var request = new XMLHttpRequest();
        request.open("GET", "http://127.0.0.1:5000/");
        request.onload = function(){
            console.log("HI");
            console.log(this.responseText);
        }
        request.onerror = function(){
            console.log("ooops");
        }
        request.send();
        var time =  1000;
        setInterval(function(){
            time  = time + 5;
            document.getElementById("moneyTimer").innerHTML = time;
        }, 1000);
    }
}());
