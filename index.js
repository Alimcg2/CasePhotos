(function(){
    window.onload = function(){
        
        var request = new XMLHttpRequest();
        request.open("GET", "https://alimcg2.github.io/CasePhotos/testing.html");
        request.onload = handleTHIS;
        request.onerror = function(){
            console.log("ooops");
        }
        request.send();

        function handleTHIS(){
            var time =  parseFloat(this.responseText);
            setInterval(function(){
                time  = time + .037;
                document.getElementById("moneyTimer").innerHTML = time;
            }, 1000);
        }
        
    }
}());
