const RED = "#E22E33";
const YELLOW = "#D4AF37";
const GREEN = "#14854C";

function template(idname, title, descr, str, conf) {
    return `<section id="${idname}-sec">
            <div class="detail">
                <details>
                    <summary>${title}</summary>
                    <p>${descr}</p>
                </details>
            </div>
            <div class="pattern">
                <canvas id="${idname}" width="256" height="128" style="border: 1px #000 solid"></canvas>
            </div>
            <div class="sc">
                <p>Strength: ${str}</p>
                <p>Confirmation: ${conf}</p>
            </div>
        </section>\n`
}

function navlink(idname, title) {
    return `<li><a href="#${idname}">${title}</a></li>`
}

const SIMPLE = document.getElementById("simple");
const SIMPLE_NAV_LIST = document.getElementById("simple_list");
const MAJOR = document.getElementById("major_rev");
const MAJOR_NAV_LIST = document.getElementById("major_rev_list");

function Pattern(idname, title, description, strength, confirm) {
    return {
        "idname": idname,
        "title": title,
        "description": description,
        "str": strength,
        "conf": confirm,
    }
}

/* Simple */
let black_marubozu = new Pattern(
    "bl_maru",
    "Black Marubozu",
    "The black marubozu is a weak indicator of bearish continuation or bullish reversal. A long black candle can indicate the final sell-off of a stock, leading to a bullish reversal.\n",
    "weak",
    "not necessary"
);
let white_marubozu = new Pattern(
    "wh_maru",
    "White Marubozu",
    "The white marubozu is a very strong indicator of bullish continuation or bearish reversal. Typically, a long white candle marks the beginning of an uptrend.",
    "very strong",
    "not necessary"
);
let closing_marubozu = new Pattern(
    "cl_maru",
    "Closing Marubozu",
    "The closing marubozu has no shadow at its closing end, and is a strong signal in both cases for the direction they represent.",
    "strong",
    "not necessary"
);
let opening_marubozu = new Pattern(
    "op_maru",
    "Opening Marubozu",
    "The opening marubozu has no shadow at its opening end. It also is a strong signal, but not as strong as the closing marubozu.",
    "medium",
    "not necessary"
);
let spinning_top = new Pattern(
    "sp_top",
    "Spinning Top",
    "The spinning top is a neutral pattern with a small body and two shadows. The spinning top is neutral in a sideways market, but the next day's trading is likely to move in the direction of the opening price.",
    "neutral",
    "yes"
);

/* Major */

let doji_star = new Pattern(
    "doji_star",
    "Doji Star",
    "The Doji star is one of the most important signals. It indicates indecision in the market, and occurs when the opening and closing price are the same or nearly the same. " +
    "When a Doji appears at the top of a trend, it signifies a reversal without needing confirmation. When a Doji appears at the bottom of a trend, however, it needs a bullish day to confirm the Doji day.",
    "very strong",
    "no at top, yes at bottom"
);
let gravestone = new Pattern(
    "gravestone",
    "Gravestone Doji",
    "The Gravestone Doji indicates indecision in the market, and is a sign of reversal. The Gravestone works better to signify a bottom reversal than a top reversal, but shows indecision in either case.",
    "strong",
    "no at bottom, advisable at top"
);
let dragonfly = new Pattern(
    "dragonfly",
    "Dragonfly Doji",
    "The Dragonfly Doji also indicates indecision in the market, and is a sign of reversal. A long shadow on the Dragonfly is a very bullish sign.",
    "strong",
    "advisable"
);

let bullish_engulfing = new Pattern(
    "bul_engul",
    "Bullish Engulfing",
    "The Bullish Engulfing pattern is a major reversal pattern after a downtrend where a red candle appears, and then the next day, a green candle opens lower than the previous close and closes higher than the previous open.\n" +
    "If the engulfing body engulfs the body and the shadows of the previous day, then the reversal is more likely to happen.",
    "strong",
    "not necessary, but can be done"
);
let bearish_engulfing = new Pattern(
    "bear_engul",
    "Bearish Engulfing",
    "The Bearish Engulfing pattern is a major reversal pattern after an uptrend where a green candle appears, and then the next day, a red candle engulfs the previous candle.",
    "strong",
    "not necessary, but can be done"
);
let hammer = new Pattern(
    "hammer",
    "Hammer",
    "The Hammer is a one candle reversal pattern at the bottom of a downtrend with a lower shadow at least two times the size of the candle body and small or no upper shadow. The color of the hammer is not important, but a white hammer is more bullish than a black hammer.\n" +
    "A bullish next day is needed to confirm this reversal.",
    "strong",
    "yes, next day must be positive"
);

let simples = [black_marubozu, white_marubozu, closing_marubozu, opening_marubozu, spinning_top];
let major_reverses = [doji_star, gravestone, dragonfly, bullish_engulfing, bearish_engulfing, hammer];

simples.forEach((p) => {
    SIMPLE.innerHTML += template(p.idname, p.title, p.description, p.str, p.conf);
    SIMPLE_NAV_LIST.innerHTML += navlink(p.idname, p.title);
});
major_reverses.forEach((p) => {
    MAJOR.innerHTML += template(p.idname, p.title, p.description, p.str, p.conf);
    MAJOR_NAV_LIST.innerHTML += navlink(p.idname, p.title);
});

// Draw
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
    line(80, 48, 80, 80);
};
let leftup = () => {
    ctx.strokeStyle = GREEN;
    line(32, 112, 32, 80);
    line (56, 92, 56, 60);
    line(80, 80, 80, 48);
};
let rightdown = () => {
    ctx.strokeStyle = RED;
    ctx.beginPath();
    ctx.moveTo(184, 56);
    ctx.lineTo(224, 96);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = RED;
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
    ctx.moveTo(184, 72);
    ctx.lineTo(224, 32);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = GREEN;
    ctx.beginPath();
    ctx.moveTo(224, 32);
    ctx.lineTo(224, 36);
    ctx.lineTo(220, 32);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#000";
};

// *** bl_maru *** //
{
    load("bl_maru");
    ctx.fillStyle = RED;
    ctx.fillRect(120, 32, 16, 64);
}
// *** wh_maru *** //
{
    load("wh_maru");
    ctx.fillStyle = GREEN;
    ctx.fillRect(120, 32, 16, 64);
}
// *** cl_maru *** //
{
    load("cl_maru");
    ctx.fillStyle = GREEN;
    ctx.fillRect(48, 32, 16, 64);
    ctx.beginPath();
    ctx.moveTo(56, 96);
    ctx.lineTo(56, 112);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fillText("or", 124, 64);
    ctx.fillStyle = RED;
    ctx.fillRect(192, 32, 16, 64);
    ctx.beginPath();
    ctx.moveTo(200, 32);
    ctx.lineTo(200, 16);
    ctx.closePath();
    ctx.stroke();
}
// *** op_maru *** //
{
    load("op_maru");
    ctx.fillStyle = GREEN;
    ctx.fillRect(48, 32, 16, 64);
    ctx.beginPath();
    ctx.moveTo(56, 32);
    ctx.lineTo(56, 16);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fillText("or", 124, 64);
    ctx.fillStyle = RED;
    ctx.fillRect(192, 32, 16, 64);
    ctx.beginPath();
    ctx.moveTo(200, 96);
    ctx.lineTo(200, 112);
    ctx.closePath();
    ctx.stroke();
}
// *** sp_top *** //
{
    load("sp_top");
    ctx.fillStyle = GREEN;
    ctx.fillRect(48, 56, 16, 16);
    ctx.beginPath();
    ctx.moveTo(56, 56);
    ctx.lineTo(56, 28);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(56, 72);
    ctx.lineTo(56, 96);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#000";
    ctx.fillText("or", 124, 64);
    ctx.fillStyle = RED;
    ctx.fillRect(192, 56, 16, 16);
    ctx.beginPath();
    ctx.moveTo(200, 72);
    ctx.lineTo(200, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 56);
    ctx.lineTo(200, 32);
    ctx.closePath();
    ctx.stroke();
}

// *** doji_star *** //
{
    load("doji_star");
    ctx.beginPath();
    ctx.moveTo(120, 64);
    ctx.lineTo(136, 64);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(128, 44);
    ctx.lineTo(128, 80);
    ctx.closePath();
    ctx.stroke();
}
// *** gravestone *** //
{
    load("gravestone");
    ctx.beginPath();
    ctx.moveTo(120, 80);
    ctx.lineTo(136, 80);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(128, 44);
    ctx.lineTo(128, 80);
    ctx.closePath();
    ctx.stroke();
}
// *** dragonfly *** //
{
    load("dragonfly");
    ctx.beginPath();
    ctx.moveTo(120, 44);
    ctx.lineTo(136, 44);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(128, 44);
    ctx.lineTo(128, 80);
    ctx.closePath();
    ctx.stroke();
}

// *** bullish engulfing *** //
{
    load("bul_engul");
    ctx.fillStyle = RED;
    ctx.fillRect(104, 40, 16, 48);
    line(112, 40, 112, 28);
    line (112, 88, 112, 96);
    ctx.fillStyle = GREEN;
    ctx.fillRect(136, 32, 16, 64);
    line (144, 32, 144, 28);
    line(144,96,144,116);
    leftdown();
    rightup();
}
// *** bearish engulfing *** //
{
    load("bear_engul");
    ctx.fillStyle = GREEN;
    ctx.fillRect(104, 40, 16, 48);
    line(112, 40, 112, 16);
    line (112, 88, 112, 102);
    ctx.fillStyle = RED;
    ctx.fillRect(136, 32, 16, 64);
    line (144, 32, 144, 24);
    line(144,96,144,108);
    leftup();
    rightdown();
}
// *** hammer *** //
{
    load("hammer");
    ctx.fillStyle = YELLOW;
    ctx.fillRect(120, 96, 16, 20);
    line(128, 96, 128, 54);
    leftdown();
    rightup();
}