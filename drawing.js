let ctx;
let load = (id) => {ctx = document.getElementById(id).getContext("2d"); ctx.fillStyle = "#000"; ctx.strokeStyle = "#000"};
let line = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
};
let leftdown = () => {
    ctx.strokeStyle = RED;
    line(32, 16, 32, 48);
    line (56, 36, 56, 68);
    //line(80, 48, 80, 80);
};
let leftup = () => {
    ctx.strokeStyle = GREEN;
    line(32, 112, 32, 80);
    line (56, 92, 56, 60);
    //line(80, 80, 80, 48);
};
let rightdown = () => {
    ctx.strokeStyle = RED;
    ctx.fillStyle = RED;
    ctx.beginPath();
    ctx.moveTo(194, 66);
    ctx.lineTo(224, 96);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(224, 96);
    ctx.lineTo(224, 92);
    ctx.lineTo(220, 96);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#000";
};
let rightup = () => {
    ctx.strokeStyle = GREEN;
    ctx.beginPath();
    ctx.moveTo(194, 62);
    ctx.lineTo(224, 32);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = GREEN;
    ctx.beginPath();
    ctx.moveTo(224, 32);
    ctx.lineTo(224, 36);
    ctx.lineTo(220, 32);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#000";
};