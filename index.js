(function(){
    window.onload = function(){
        var d = new Date();
        var currentMs = d.getTime();
        var startTime = 1511848179984;
        var timeDiff = parseInt((currentMs - startTime) / 60000)
        var newNum = parseFloat(33645) + parseFloat((timeDiff * 0.037).toFixed(2))
        console.log(timeDiff);
        console.log(newNum);
        document.getElementById("moneyTimer").innerHTML = "$" + newNum;
    }
}());
