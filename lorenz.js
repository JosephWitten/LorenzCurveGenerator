
function start() {
    init();
}

function init() {
    //creates background
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var boxLen = (canvas.clientWidth/10)*1;
    var boxWidth = (canvas.clientHeight/10)*1
    var padding = (canvas.clientWidth - boxWidth) / 2

    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    //draw graph box
    ctx.beginPath();
    ctx.rect(boxLen, boxWidth, 400, 400);
    ctx.stroke();
    //draw axis labels
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("% of population", ((canvas.clientWidth/10)*3), (canvas.clientHeight/20) );
    ctx.font = "12px Arial";
    ctx.fillText("|0", 50, 45);
    ctx.fillText("|10", 90, 45);
    ctx.fillText("|20", 130, 45);
    ctx.fillText("|30", 170, 45);
    ctx.fillText("|40", 210, 45);
    ctx.fillText("|50", 250, 45);
    ctx.fillText("|60", 290, 45);
    ctx.fillText("|70", 330, 45);
    ctx.fillText("|80", 370, 45);
    ctx.fillText("|90", 410, 45);
    ctx.fillText("|100", 450, 45);


    ctx.font = "20px Arial";
    ctx.rotate((-90*Math.PI)/180)
    ctx.fillText("Cumulative national income (%)", -400, 25)
}