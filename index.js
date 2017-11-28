(function(){
    window.onload = function(){
        var d = new Date();
        var currentMs = d.getTime();
        var startTime = 1511848179984;
        var timeDiff = parseInt((currentMs - startTime) / 60000)
        var newNum = 33645 + (timeDiff * 0.037)
        console.log(timeDiff);
        console.log(newNum);
        document.getElementById("moneyTimer").innerHTML = "$" + newNum;
    }
}());
