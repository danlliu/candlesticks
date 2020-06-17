const RED = "#E22E33";
const GREEN = "#14854C";

function template(idname, title, descr, conf) {
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
                <p>Confirmation: ${conf}</p>
            </div>
        </section>\n`
}

function navlink(idname, title) {
    return `<a href="#${idname}">${title}</a>`
}

const SIMPLE = document.getElementById("simple");
const SIMPLE_NAV_LIST = document.getElementById("simple_list");
const MAJOR = document.getElementById("major_rev");
const MAJOR_NAV_LIST = document.getElementById("major_rev_list");

function Pattern(idname, title, description, confirm) {
    return {
        "idname": idname,
        "title": title,
        "description": description,
        "conf": confirm,
    }
}

/* Simple */
let black_marubozu = new Pattern(
    "bl_maru",
    "Black Marubozu",
    "The black marubozu is a weak indicator of bearish continuation or bullish reversal. A long red candle can indicate the final sell-off of a stock, leading to a bullish reversal.\n",
    "not necessary"
);
let white_marubozu = new Pattern(
    "wh_maru",
    "White Marubozu",
    "The white marubozu is a very strong indicator of bullish continuation or bearish reversal. Typically, a long green candle marks the beginning of an uptrend.",
    "not necessary"
);
let closing_marubozu = new Pattern(
    "cl_maru",
    "Closing Marubozu",
    "The closing marubozu has no shadow at its closing end, and is a strong signal in both cases for the direction they represent.",
    "not necessary"
);
let opening_marubozu = new Pattern(
    "op_maru",
    "Opening Marubozu",
    "The opening marubozu has no shadow at its opening end. It also is a strong signal, but not as strong as the closing marubozu.",
    "not necessary"
);
let spinning_top = new Pattern(
    "sp_top",
    "Spinning Top",
    "The spinning top is a neutral pattern with a small body and two shadows. The spinning top is neutral in a sideways market, but the next day's trading is likely to move in the direction of the opening price.",
    "yes"
);

/* Major */

let doji_star = new Pattern(
    "doji_star",
    "Doji Star",
    "The Doji star is one of the most important signals. It indicates indecision in the market, and occurs when the opening and closing price are the same or nearly the same. " +
    "When a Doji appears at the top of a trend, it signifies a reversal without needing confirmation. When a Doji appears at the bottom of a trend, however, it needs a bullish day to confirm the Doji day.",
    "no at top, yes at bottom"
);
let gravestone = new Pattern(
    "gravestone",
    "Gravestone Doji",
    "The Gravestone Doji indicates indecision in the market, and is a sign of reversal. The Gravestone works better to signify a bottom reversal than a top reversal, but shows indecision in either case.",
    "no at bottom, advisable at top"
);
let dragonfly = new Pattern(
    "dragonfly",
    "Dragonfly Doji",
    "The Dragonfly Doji also indicates indecision in the market, and is a sign of reversal. A long shadow on the Dragonfly is a very bullish sign.",
    "advisable"
);

let bullish_engulfing = new Pattern(
    "bul_engul",
    "Bullish Engulfing",
    "The Bullish Engulfing pattern is a major reversal pattern after a downtrend where a red candle appears, and then the next day, a green candle opens lower than the previous close and closes higher than the previous open.\n" +
    "If the engulfing body engulfs the body and the shadows of the previous day, then the reversal is more likely to happen.",
    "not necessary, but can be done"
);
let bearish_engulfing = new Pattern(
    "bear_engul",
    "Bearish Engulfing",
    "The Bearish Engulfing pattern is a major reversal pattern after an uptrend where a green candle appears, and then the next day, a red candle engulfs the previous candle.",
    "not necessary, but can be done"
);
let hammer = new Pattern(
    "hammer",
    "Hammer",
    "The Hammer is a one candle reversal pattern at the bottom of a downtrend with a lower shadow at least two times the size of the candle body and small or no upper shadow. The color of the hammer is not important, but a white hammer is more bullish than a black hammer.\n" +
    "The next day needs to confirm the hammer with a strong bullish day.",
    "yes, next day must be strong positive."
);
let hangingman = new Pattern(
    "hangingman",
    "Hanging Man",
    "The Hanging Man is a one candle reversal pattern at the top of an uptrend with a lower shadow at least two times the size of the candle body and small or no upper shadow. The color of the hanging man is not important, but a black hanging man is more bearish than a white hanging man.\n" +
    "The next day needs to confirm the hanging man with a bearish day or a gap down with a lower close.",
    "yes, next day must be negative or a gap down with lower close"
);
let piercing = new Pattern(
    "piercing",
    "Piercing",
    "The Piercing pattern is formed after a downtrend with a red candle followed by a green candle that opens below the low of the previous day and closes more than midway up the red candle. The longer the candles, the more forceful the reversal.",
    "no, but large volume is good"
);
let dark_cloud = new Pattern(
    "dark_cloud",
    "Dark Cloud Cover",
    "The Dark Could Cover pattern is the bearish version of the Piercing pattern, with a green candle at the end of an uptrend and a red candle opening higher and closing more than halfway down the green candle.",
    "no, but large volume is good"
);
let bullish_harami = new Pattern(
    "bul_harami",
    "Bullish Harami",
    "The Bullish Harami is an often-seen formation that is composed of two candles in a downtrending market. The first candle is a red candle, and the second one is a green candle whose body lies within the red candle.",
    "yes"
);
let bearish_harami = new Pattern(
    "bear_harami",
    "Bearish Harami",
    "The Bearish Harami is the bearish version of the Bullish Harami, consisting of a green candle after an uptrend followed by a red candle inside the green one.",
    "yes"
);
let morning_star = new Pattern(
    "m_star",
    "Morning Star",
    "The Morning Star is a bottom reversal signal that occurs over three candles, usually after a long downtrend. The first candle is a red candle, and is followed by a small candle that gaps down. This second candle occurs on the star day. The third candle is a green candle, showing the reversal.",
    "no"
)

let simples = [black_marubozu, white_marubozu, closing_marubozu, opening_marubozu, spinning_top];
let major_reverses = [doji_star, gravestone, dragonfly, bullish_engulfing, bearish_engulfing, hammer, hangingman, piercing, dark_cloud, bullish_harami, bearish_harami, morning_star];

simples.forEach((p) => {
    SIMPLE.innerHTML += template(p.idname, p.title, p.description, p.conf);
    SIMPLE_NAV_LIST.innerHTML += navlink(p.idname, p.title);
});
major_reverses.forEach((p) => {
    MAJOR.innerHTML += template(p.idname, p.title, p.description, p.conf);
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
    ctx.fillStyle = RED;
    //ctx.fillRect(120, 96, 16, 20);
    ctx.beginPath();
    ctx.moveTo(120, 96);
    ctx.lineTo(136, 96);
    ctx.lineTo(136, 116);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = GREEN;
    ctx.beginPath();
    ctx.moveTo(120, 96);
    ctx.lineTo(120, 116);
    ctx.lineTo(136, 116);
    ctx.closePath();
    ctx.fill();
    line(128, 96, 128, 54);
    leftdown();
    rightup();
}
// *** hangingman *** //
{
    load("hangingman");
    ctx.fillStyle = RED;
    //ctx.fillRect(120, 16, 16, 20);
    ctx.beginPath();
    ctx.moveTo(120, 16);
    ctx.lineTo(136, 16);
    ctx.lineTo(136, 36);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = GREEN;
    ctx.beginPath();
    ctx.moveTo(120, 16);
    ctx.lineTo(120, 36);
    ctx.lineTo(136, 36);
    ctx.closePath();
    ctx.fill();
    line(128, 36, 128, 78);
    leftup();
    rightdown();
}
// *** piercing *** //
{
    load("piercing");
    ctx.fillStyle = RED;
    ctx.fillRect(104, 36, 16, 54);
    ctx.fillStyle = GREEN;
    ctx.fillRect(136, 54, 16, 48);
    leftdown();
    rightup();
}
// *** dark cloud cover *** //
{
    load("dark_cloud");
    ctx.fillStyle = GREEN;
    ctx.fillRect(104, 36, 16, 48);
    ctx.fillStyle = RED;
    ctx.fillRect(136, 20, 16, 54);
    leftup();
    rightdown();
}
// *** bullish harami *** //
{
    load("bul_harami");
    ctx.fillStyle = RED;
    ctx.fillRect(104, 32, 16, 64);
    ctx.fillStyle = GREEN;
    ctx.fillRect(136, 40, 16, 42);
    leftdown();
    rightup();
}
// *** bearish harami *** //
{
    load("bear_harami");
    ctx.fillStyle = GREEN;
    ctx.fillRect(104, 32, 16, 64);
    ctx.fillStyle = RED;
    ctx.fillRect(136, 40, 16, 42);
    leftup();
    rightdown();
}
// *** m_star *** //
{
    load("m_star");
    ctx.fillStyle = RED;
    ctx.fillRect(88, 32, 16, 64);
    line(96, 32, 96, 16);
    line(96,96,96,104);
    //ctx.fillRect(120, 104, 16, 12);
    line(128, 104, 128, 98);
    line(128, 116, 128, 122);
    ctx.beginPath();
    ctx.moveTo(120, 104);
    ctx.lineTo(136, 104);
    ctx.lineTo(136, 116);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = GREEN;
    ctx.beginPath();
    ctx.moveTo(120, 104);
    ctx.lineTo(120, 116);
    ctx.lineTo(136, 116);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(152, 48, 16, 56);
    line(160, 48, 160, 38);
    line(160, 104, 160, 112);
    leftdown();
    rightup();
}