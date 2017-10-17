function lineDraw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 200;
    for (var i = 380.1; i <= 780; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i-1, 200);
        ctx.lineTo(i, 200);
        ctx.strokeStyle = generateRGBString(i);
        ctx.stroke();
    }
}

function blue(x) {
    if (x >= 380 && x <= 420) blue_y = Math.floor(3.875*x - 1372.5);
    else if (x > 420 && x <= 490) blue_y = 255;
    else if (x > 490 && x <= 510) blue_y = Math.floor(-12.75*x + 6502.5);
    else blue_y = 0;
    return blue_y;
}
function green(x) {
    if (x >= 440 && x <= 490) green_y = Math.floor(5.1*x - 2244);
    else if (x > 490 && x <= 580) green_y = 255;
    else if (x > 580 && x <= 650) green_y = Math.floor(-3.6*x + 2340);
    else green_y = 0;
    return green_y;
}
function red(x) {
    if (x >= 380 && x <= 440) red_y = Math.floor(-0.07*x*x + 56*x - 10910);
    else if (x >= 510 && x <= 580) red_y = Math.floor(3.6*x -1833);
    else if (x > 580 && x <= 700) red_y = 255;
    else if (x > 700 && x <= 780) red_y = Math.floor(-2*x + 1655);
    else red_y = 0;
    return red_y;
}

function generateRGBString(x){
    R = red(x).toString(16);
    G = green(x).toString(16);
    B = blue(x).toString(16);
    if (red(x) < 16) R = "0"+red(x).toString(16);
    if (green(x) < 16) G = "0"+green(x).toString(16);
    if (blue(x) < 16) B = "0"+blue(x).toString(16);
    return "#"+R+B+G;
}