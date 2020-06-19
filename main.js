const RED = "#E22E33";
const GREEN = "#14854C";

function template(p) {
    let idname = p.idname;
    let title = p.title;
    let descr = p.description;
    let conf = p.conf;
    let note = p.note;
    let numcanvases = p.frames;
    let temp = `<section id="${idname}-sec">
            <div class="detail">
                <h2 style="margin-top: 0">${title}:</h2>
                <p>${descr}</p>
            </div>
            <div class="pattern">\n`;
    for (var i = 0; i < numcanvases; ++i) {
        temp += `<canvas id="${idname}${i}" width="256" height="128" style="border: 1px #000 solid"></canvas>\n`;
        if (temp != numcanvases - 1) {
            temp += "<br/>"
        }
    }
    temp += `</div>
            <div class="confirmation" style="width: 30%">
                <p>Confirmation: ${conf === "no" ? `<span style='font-weight: bolder'>${conf}</span>` : conf}</p>
                ${note != null ? `<p></p><i>Note: </i>${note}</p>` : ""}
            </div>
        </section><br/>\n`;
    return temp;
}

function navlink(idname, title) {
    return `<a href="#${idname}-sec">${title}</a>`
}

const SIMPLE = document.getElementById("simple");
const SIMPLE_NAV_LIST = document.getElementById("simple_list");
const MAJOR = document.getElementById("major_rev");
const MAJOR_NAV_LIST = document.getElementById("major_rev_list");
const SECONDARY = document.getElementById("secondary_rev");
const SECONDARY_NAV_LIST = document.getElementById("secondary_rev_list");

function Pattern(idname, title, description, confirm, note = null, numFrames = 1) {
    return {
        "idname": idname,
        "title": title,
        "description": description,
        "conf": confirm,
        "note": note,
        "frames": numFrames
    }
}

/* Simple */
let black_marubozu = new Pattern(
    "bl_maru",
    "Black Marubozu",
    "The black marubozu is a weak indicator of bearish continuation or bullish reversal. A long red candle can indicate the final sell-off of a stock, leading to a bullish reversal.\n",
    "no"
);
let white_marubozu = new Pattern(
    "wh_maru",
    "White Marubozu",
    "The white marubozu is a very strong indicator of bullish continuation or bearish reversal. Typically, a long green candle marks the beginning of an uptrend.",
    "no"
);
let closing_marubozu = new Pattern(
    "cl_maru",
    "Closing Marubozu",
    "The closing marubozu has no shadow at its closing end, and is a strong signal in both cases for the direction they represent.",
    "no"
);
let opening_marubozu = new Pattern(
    "op_maru",
    "Opening Marubozu",
    "The opening marubozu has no shadow at its opening end. It also is a strong signal, but not as strong as the closing marubozu.",
    "no"
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
    "no",
    "If the green candle engulfs a small body or a Doji, the color of the small body/Doji does not matter."
);
let bearish_engulfing = new Pattern(
    "bear_engul",
    "Bearish Engulfing",
    "The Bearish Engulfing pattern is a major reversal pattern after an uptrend where a green candle appears, and then the next day, a red candle engulfs the previous candle.",
    "no",
    "If the green candle engulfs a small body or a Doji, the color of the small body/Doji does not matter."
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
    "The Piercing pattern is formed after a downtrend with a red candle followed by a green candle that opens below the low of the previous day and closes more than midway up the red candle. The longer the candles, the more forceful the reversal. Large volume is a strong signal for a reversal.",
    "no"
);
let dark_cloud = new Pattern(
    "dark_cloud",
    "Dark Cloud Cover",
    "The Dark Could Cover pattern is the bearish version of the Piercing pattern, with a green candle at the end of an uptrend and a red candle opening higher and closing more than halfway down the green candle. Large volume is a strong signal for a reversal.",
    "no"
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
);
let evening_star = new Pattern(
    "e_star",
    "Evening Star",
    "The Evening Star is a top reversal signal that occurs over three candles after an uptrend. It is the exact opposite of the Morning Star pattern.",
    "no"
);
let kicker = new Pattern(
    "kicker",
    "The Kicker",
    "The Kicker is one of the most powerful signals of all, and is formed by two candles. The first candle moves in the direction of the current trend, and the second candle opens at the same price as the first opens, but goes in the opposite direction.",
    "no",
    null,
    2
);
let shooting_star = new Pattern(
    "shootingstar",
    "Shooting Star",
    "The Shooting Star is composed of one candle, with a small body and an upper shadow at least twice the size of the body. The Shooting Star is a top reversal signal, but needs a bearish day after to confirm the signal.",
    "yes"
);
let invert_hammer = new Pattern(
    "inverthammer",
    "Inverted Hammer",
    "The Inverted Hammer is composed of one candle with a small body and an upper shadow at least twice the size of the body. The Inverted Hammer appears at the bottom of a trend, and signifies a possible reversal. It needs a bullish day after to confirm the signal.",
    "yes"
);

let tristar = new Pattern(
    "tristar",
    "Tri Star",
    "The Tri Star is a strong but somewhat rare reversal signal. It consists of three Dojis, with the second Doji gapping above in a bullish reversal or below in a bearish reversal with respect to the first and third.",
    "yes",
    null,
    2
);
let threeblackcrows = new Pattern(
    "threecrow",
    "Three Black Crows",
    "The Three Black Crows pattern occurs after an uptrend, and consists of three red candles opening within the body of the previous and steadily going downward, each closing near the low of the day.",
    "no"
);
let threeidenticalcrows = new Pattern(
    "threeidcrow",
    "Three Identical Crows",
    "The Three Identical Crows pattern is the same as the Three Black Crows, except each one opens at the close of the previous day.",
    "no"
);
let twocrows = new Pattern(
    "twocrows",
    "Two Crows",
    "The Two Crows pattern is a three-day top reversal pattern. It starts with a green candle. The next day, the price gaps up to create a small red candle. This candle pulls down but cannot fill the gap. The third day, another red candle forms and fills the gap, closing within the body of the first green candle.",
    "yes"
);
let upsidegaptwocrows = new Pattern(
    "upsidetwocrows",
    "Upside Gap Two Crows",
    "The Upside Gap Two Crows is a three-day top reversal pattern, starting with a green candle, followed by a red candle gapping up but not filling the gap. The third day has a red candle that opens higher than the second day's open but closes below the second day's close, engulfing the second day. However, the third candle does not close below the close of the first day.",
    "yes"
);
let meetinglines = new Pattern(
    "meetinglines",
    "Meeting Lines",
    "The Meeting Lines pattern is where two opposite colored candles have the same closing price. Both candles should be long days, and the longer the candles, the more likely the reversal.",
    "yes",
    null,
    2
);
let belthold = new Pattern(
    "belthold",
    "Belt Hold",
    "The Belt Hold pattern is a single candlestick pattern where a candle with the opposite color to the trend gaps far away from the current trend, without any shadow at the opening end. The length of the candle indicates the significance of the reversal signal.",
    "yes",
    null,
    2
);
let unique3river = new Pattern(
    "unique3riverbottom",
    "Unique Three River Bottom",
    "The Unique Three River Bottom is a bullish pattern at the bottom of a downtrend. The first candle continues the trend. The second candle is a red candle that opens higher, drops down to a new low, then closes near the top of the trading range. The third day opens lower, but not as low as the low of the second day. It then closes higher, but below the second day's close, forming a green candle. This pattern is very rare.",
    "yes",
    null
);
let breakaway = new Pattern(
    "breakaway",
    "Breakaway",
    "The Breakaway pattern starts with a candle representing the current trend, followed by a second candle of the same color that gaps away. The third candle can be either color, but indicates a continuation in the trend. The fourth day has the same color as the trend, and continues the trend. The fifth day opens opposite the current trend and closes into the gap.",
    "no",
    null,
    2
);
let threeinup = new Pattern(
    "threeinup",
    "Three Inside Up",
    "The Three Inside Up pattern consists of a bottom reversal Harami pattern followed by a third candle confirming the reversal. The third day should close higher than the open of the first day.",
    "no"
);
let threeindown = new Pattern(
    "threeindown",
    "Three Inside Down",
    "The Three Inside Down pattern consists of a top reversal Harami pattern followed by a third candle confirming the reversal. The third day should close lower than the open of the first day",
    "no"
);
let threestars = new Pattern(
    "threestars",
    "Three Stars in the South",
    "The Three Stars in the South pattern is a bottom reversal pattern that is composed of three red candles, which show the trend slowing down. The first day has a lower shadow showing that buying is stepping in, and the second day is a smaller version of the first day. The third day is a Marubozu, without any shadows.",
    "yes"
);
let threewhitesoldiers = new Pattern(
    "threesoldiers",
    "Three White Soldiers",
    "The Three White Soldiers is a bottom reversal pattern that is composed of three green candles, each opening within the previous candle's body but closing at a new high.",
    "no"
);
let advance = new Pattern(
    "advance",
    "Advance Block",
    "The Advance Block is a top reversal pattern that looks similar to the Three Stars in the South pattern, but reversed. The Advance Block consists of three green candles, with the bodies getting smaller and the upper shadows increasing in length from the first to third candle. Each candle opens in the previous day's body, and still closes higher.",
    "advised"
);
let deliberation = new Pattern(
    "deliberation",
    "Deliberation",
    "The Deliberation pattern consists of two long green candles followed by a smaller green body. This shows that the upward trend is slowing down.",
    "advised"
);

let simples = [black_marubozu, white_marubozu, closing_marubozu, opening_marubozu, spinning_top];
let major_reverses = [doji_star, gravestone, dragonfly, bullish_engulfing, bearish_engulfing, hammer, hangingman, piercing, dark_cloud, bullish_harami, bearish_harami, morning_star, evening_star, kicker, shooting_star, invert_hammer];
let secondary_reverses = [tristar, threeblackcrows, threeidenticalcrows, twocrows, upsidegaptwocrows, meetinglines, belthold, unique3river, breakaway, threeinup, threeindown, threestars, threewhitesoldiers, advance, deliberation];

simples.forEach((p) => {
    SIMPLE.innerHTML += template(p);
    SIMPLE_NAV_LIST.innerHTML += navlink(p.idname, p.title);
});
major_reverses.forEach((p) => {
    MAJOR.innerHTML += template(p);
    MAJOR_NAV_LIST.innerHTML += navlink(p.idname, p.title);
});
secondary_reverses.forEach((p) => {
    SECONDARY.innerHTML += template(p);
    SECONDARY_NAV_LIST.innerHTML += navlink(p.idname, p.title);
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

// Simple
{
// *** bl_maru *** //
    {
        load("bl_maru0");
        ctx.fillStyle = RED;
        ctx.fillRect(120, 32, 16, 64);
        rightdown();
    }
// *** wh_maru *** //
    {
        load("wh_maru0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(120, 32, 16, 64);
        rightup();
    }
// *** cl_maru *** //
    {
        load("cl_maru0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(56, 32, 16, 64);
        ctx.beginPath();
        ctx.moveTo(64, 96);
        ctx.lineTo(64, 112);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "#000";
        ctx.fillText("or", 124, 64);
        ctx.fillStyle = RED;
        ctx.fillRect(184, 32, 16, 64);
        ctx.beginPath();
        ctx.moveTo(192, 32);
        ctx.lineTo(192, 16);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(76, 72);
        ctx.lineTo(96, 52);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(96, 52);
        ctx.lineTo(96, 56);
        ctx.lineTo(92, 52);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#000";

        ctx.strokeStyle = RED;
        ctx.beginPath();
        ctx.moveTo(204, 76);
        ctx.lineTo(224, 96);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = RED;
        ctx.beginPath();
        ctx.moveTo(224, 96);
        ctx.lineTo(224, 92);
        ctx.lineTo(220, 96);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#000";
    }
// *** op_maru *** //
    {
        load("op_maru0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(56, 32, 16, 64);
        ctx.beginPath();
        ctx.moveTo(64, 32);
        ctx.lineTo(64, 16);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "#000";
        ctx.fillText("or", 124, 64);
        ctx.fillStyle = RED;
        ctx.fillRect(184, 32, 16, 64);
        ctx.beginPath();
        ctx.moveTo(192, 96);
        ctx.lineTo(192, 112);
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(76, 72);
        ctx.lineTo(96, 52);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(96, 52);
        ctx.lineTo(96, 56);
        ctx.lineTo(92, 52);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#000";

        ctx.strokeStyle = RED;
        ctx.beginPath();
        ctx.moveTo(204, 76);
        ctx.lineTo(224, 96);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = RED;
        ctx.beginPath();
        ctx.moveTo(224, 96);
        ctx.lineTo(224, 92);
        ctx.lineTo(220, 96);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#000";
    }
// *** sp_top *** //
    {
        load("sp_top0");
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
}

// Major Rev
{
// *** doji_star *** //
    {
        load("doji_star0");
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
        load("gravestone0");
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
        load("dragonfly0");
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
        load("bul_engul0");
        ctx.fillStyle = RED;
        ctx.fillRect(104, 40, 16, 48);
        line(112, 40, 112, 28);
        line(112, 88, 112, 96);
        ctx.fillStyle = GREEN;
        ctx.fillRect(136, 32, 16, 64);
        line(144, 32, 144, 28);
        line(144, 96, 144, 116);
        leftdown();
        rightup();
    }
// *** bearish engulfing *** //
    {
        load("bear_engul0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(104, 40, 16, 48);
        line(112, 40, 112, 16);
        line(112, 88, 112, 102);
        ctx.fillStyle = RED;
        ctx.fillRect(136, 32, 16, 64);
        line(144, 32, 144, 24);
        line(144, 96, 144, 108);
        leftup();
        rightdown();
    }
// *** hammer *** //
    {
        load("hammer0");
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
        load("hangingman0");
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
        load("piercing0");
        ctx.fillStyle = RED;
        ctx.fillRect(104, 36, 16, 54);
        ctx.fillStyle = GREEN;
        ctx.fillRect(136, 54, 16, 48);
        leftdown();
        rightup();
    }
// *** dark cloud cover *** //
    {
        load("dark_cloud0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(104, 36, 16, 48);
        ctx.fillStyle = RED;
        ctx.fillRect(136, 20, 16, 54);
        leftup();
        rightdown();
    }
// *** bullish harami *** //
    {
        load("bul_harami0");
        ctx.fillStyle = RED;
        ctx.fillRect(104, 32, 16, 64);
        ctx.fillStyle = GREEN;
        ctx.fillRect(136, 40, 16, 42);
        leftdown();
        rightup();
    }
// *** bearish harami *** //
    {
        load("bear_harami0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(104, 32, 16, 64);
        ctx.fillStyle = RED;
        ctx.fillRect(136, 40, 16, 42);
        leftup();
        rightdown();
    }
// *** m_star *** //
    {
        load("m_star0");
        ctx.fillStyle = RED;
        ctx.fillRect(88, 32, 16, 64);
        line(96, 32, 96, 16);
        line(96, 96, 96, 104);
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
// *** e_star *** //
    {
        load("e_star0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 32, 16, 64);
        line(96, 32, 96, 16);
        line(96, 96, 96, 104);
        //ctx.fillRect(120, 104, 16, 12);
        line(128, 24, 128, 30);
        line(128, 12, 128, 6);
        ctx.beginPath();
        ctx.moveTo(120, 24);
        ctx.lineTo(136, 24);
        ctx.lineTo(136, 12);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = RED;
        ctx.beginPath();
        ctx.moveTo(120, 24);
        ctx.lineTo(120, 12);
        ctx.lineTo(136, 12);
        ctx.closePath();
        ctx.fill();
        ctx.fillRect(152, 36, 16, 56);
        line(160, 36, 160, 26);
        line(160, 92, 160, 100);
        leftup();
        rightdown();
    }
// *** kicker *** //
    {
        load("kicker0");
        ctx.fillStyle = RED;
        ctx.fillRect(104, 64, 16, 48);
        ctx.fillStyle = GREEN;
        ctx.fillRect(136, 32, 16, 32);
        leftdown();
        rightup();
    }
    {
        load("kicker1");
        ctx.fillStyle = GREEN;
        ctx.fillRect(104, 32, 16, 32);
        ctx.fillStyle = RED;
        ctx.fillRect(136, 64, 16, 48);
        leftup();
        rightdown();
    }
// *** shooting star *** //
    {
        load("shootingstar0");
        ctx.fillStyle = RED;
        ctx.beginPath();
        ctx.moveTo(120, 56);
        ctx.lineTo(136, 56);
        ctx.lineTo(136, 76);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(120, 56);
        ctx.lineTo(120, 76);
        ctx.lineTo(136, 76);
        ctx.closePath();
        ctx.fill();
        line(128, 56, 128, 16);
        leftup();
        rightdown();
    }
// *** inverted hammer *** //
    {
        load("inverthammer0");
        ctx.fillStyle = RED;
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
        line(128, 96, 128, 56);
        leftdown();
        rightup();
    }
}

// Secondary Rev
{
    // *** tristar *** //
    {
        load("tristar0");

        line(96, 64, 96, 48);
        line(88, 56, 104, 56);

        line(128, 52, 128, 36);
        line(120, 44, 136, 44);

        line(160, 64, 160, 48);
        line(152, 56, 168, 56);

        leftup();
        rightdown();
    }
    {
        load("tristar1");

        line(96, 64, 96, 48);
        line(88, 56, 104, 56);

        line(128, 80, 128, 64);
        line(120, 72, 136, 72);

        line(160, 64, 160, 48);
        line(152, 56, 168, 56);

        leftdown();
        rightup();
    }
    // *** threeblackcrows *** //
    {
        load("threecrow0");
        ctx.fillStyle = RED;
        ctx.fillRect(88, 16, 16, 48);
        line(96, 16, 96, 8);
        line(96, 64, 96, 76);
        ctx.fillRect(120, 36, 16, 48);
        line(128, 36, 128, 24);
        line(128, 84, 128, 100);
        ctx.fillRect(152, 56, 16, 48);
        line(160, 56, 160, 44);
        line(160, 104, 160, 112);
        leftup();
        rightdown();
    }
    // *** threeidenticalcrows *** //
    {
        load("threeidcrow0");
        ctx.fillStyle = RED;
        ctx.fillRect(88, 8, 16, 36);
        line(96, 8, 96, 4);
        line(96, 44, 96, 52);
        ctx.fillRect(120, 44, 16, 36);
        line(128, 44, 128, 36);
        line(128, 80, 128, 90);
        ctx.fillRect(152, 80, 16, 36);
        line(160, 80, 160, 68);
        line(160, 116, 160, 120);
        leftup();
        rightdown();
    }
    // *** twocrows *** //
    {
        load("twocrows0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 48, 16, 64);
        line(96, 48, 96, 36);
        line(96, 112, 96, 116);
        ctx.fillStyle = RED;
        ctx.fillRect(120, 16, 16, 16);
        line(128, 16, 128, 8);
        ctx.fillRect(152, 24, 16, 40);
        line(160, 24, 160, 18);
        line(160, 64, 160, 68);
        leftup();
        rightdown();
    }
    // *** upsidegaptwocrows *** //
    {
        load("upsidetwocrows0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 64, 16, 56);
        line(96, 64, 96, 52);
        line(96, 120, 96, 124);
        ctx.fillStyle = RED;
        ctx.fillRect(120, 24, 16, 16);
        line(128, 24, 128, 12);
        line(128, 40, 128, 44);
        ctx.fillRect(152, 20, 16, 36);
        line(160, 24, 160, 18);
        line(160, 56, 160, 60);
        leftup();
        rightdown();
    }
    // *** meetinglines *** //
    {
        load("meetinglines0");
        ctx.fillStyle = RED;
        ctx.fillRect(104, 16, 16, 48);
        line(112, 16, 112, 8);
        ctx.fillStyle = GREEN;
        ctx.fillRect(136, 64, 16, 48);
        line(136+8, 112, 136+8, 118);
        leftdown();
        rightup();
    }
    {
        load("meetinglines1");
        ctx.fillStyle = GREEN;
        ctx.fillRect(104, 64, 16, 48);
        line(112, 112, 112, 116);
        ctx.fillStyle = RED;
        ctx.fillRect(136, 16, 16, 48);
        line(136+8, 16, 136+8, 8);
        leftup();
        rightdown();
    }
    // *** belt hold *** //
    {
        load("belthold0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(120, 84, 16, 32);
        line(128, 84, 128, 80);
        leftdown();
        rightup();
    }
    {
        load("belthold1");
        ctx.fillStyle = RED;
        ctx.fillRect(120, 16, 16, 32);
        line(128, 48, 128, 56);
        leftup();
        rightdown();
    }
    // *** unique3riverbottom *** //
    {
        load("unique3riverbottom0");
        ctx.fillStyle = RED;
        ctx.fillRect(88, 36, 16, 48);
        line(96, 36, 96, 20);
        line(96, 84, 96, 88);
        ctx.fillRect(120, 40, 16, 24);
        line(128, 64, 128, 120);
        ctx.fillStyle = GREEN;
        ctx.fillRect(152, 92, 16, 32);
        line(160, 92, 160, 84);
        line(160, 124, 160, 126);
        leftdown();
        rightup();
    }
    // *** breakaway *** //
    {
        load("breakaway0");
        ctx.fillStyle = RED;
        ctx.fillRect(72, 16, 16, 48);
        line(80, 16, 80, 8);
        line(80, 64, 80, 72);
        ctx.fillRect(96, 72, 16, 32);
        line(104, 72, 104, 64);
        line(104, 104, 104, 110);
        ctx.fillRect(144, 104, 16, 20);
        line(152, 104, 152, 98);
        line(152, 124, 152, 126);
        //ctx.fillRect(120, 96, 16, 24);
        line (128, 96, 128, 88);
        line(128, 120, 128, 124);
        ctx.beginPath();
        ctx.moveTo(120, 96);
        ctx.lineTo(136, 96);
        ctx.lineTo(136, 120);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(120, 96);
        ctx.lineTo(120, 120);
        ctx.lineTo(136, 120);
        ctx.closePath();
        ctx.fill();
        ctx.fillRect(168, 68, 16, 48);
        line(176, 68, 176, 60);
        line(176, 116, 176, 120);
        leftdown();
        rightup();
    }
    {
        load("breakaway1");
        ctx.fillStyle = GREEN;
        ctx.fillRect(72, 64, 16, 48);
        line(80, 64, 80, 56);
        line(80, 112, 80, 116);
        ctx.fillRect(96, 24, 16, 32);
        line(104, 24, 104, 20);
        line(104, 56, 104, 64);
        ctx.fillRect(144, 4, 16, 20);
        line(152, 4, 152, 2);
        line(152, 24, 152, 32);
        //ctx.fillRect(120, 8, 16, 24);
        line (128, 8, 128, 4);
        line(128, 32, 128, 40);
        ctx.fillStyle = RED;
        ctx.beginPath();
        ctx.moveTo(120, 8);
        ctx.lineTo(136, 8);
        ctx.lineTo(136, 32);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = GREEN;
        ctx.beginPath();
        ctx.moveTo(120, 8);
        ctx.lineTo(120, 32);
        ctx.lineTo(136, 32);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = RED;
        ctx.fillRect(168, 12, 16, 48);
        line(176, 68, 176, 60);
        line(176, 12, 176, 4);
        leftup();
        rightdown();
    }
    // *** threeinup *** //
    {
        load("threeinup0");
        ctx.fillStyle = RED;
        ctx.fillRect(88, 48, 16, 48);
        line(96, 48, 96, 40);
        line(96, 96, 96, 102);
        ctx.fillStyle = GREEN;
        ctx.fillRect(120, 54, 16, 32);
        line(128, 54, 128, 48);
        line(128, 86, 128, 94);
        ctx.fillRect(152, 36, 16, 44);
        line(160, 36, 160, 32);
        line(160, 80, 160, 88);
        leftdown();
        rightup();
    }
    // *** threeindown *** //
    {
        load("threeindown0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 24, 16, 54);
        line(96, 24, 96, 16);
        line(96, 78, 96, 84);
        ctx.fillStyle = RED;
        ctx.fillRect(120, 32, 16, 32);
        line(128, 32, 128, 24);
        line(128, 64, 128, 68);
        ctx.fillRect(152, 56, 16, 32);
        line(160, 56, 160, 48);
        line(160, 88, 160, 94);
        leftup();
        rightdown();
    }
    // *** threestars *** //
    {
        load("threestars0");
        ctx.fillStyle = RED;
        ctx.fillRect(88, 32, 16, 48);
        line(96, 80, 96, 108);
        ctx.fillRect(120, 48, 16, 36);
        line(128, 84, 128, 104);
        ctx.fillRect(152, 88, 16, 8);
        leftdown();
        rightup();
    }
    // *** threewhitesoldiers *** //
    {
        load("threesoldiers0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 80, 16, 36);
        line(96, 80, 96, 72);
        line(96, 116, 96, 120);
        ctx.fillRect(120, 56, 16, 36);
        line(128, 56, 128, 48);
        line(128, 92, 128, 100);
        ctx.fillRect(152, 32, 16, 36);
        line(160, 32, 160, 24);
        line(160, 68, 160, 74);
        leftdown();
        rightup();
    }
    // *** advance block *** //
    {
        load("advance0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 64, 16, 48);
        line(96, 64, 96, 56);
        line(96, 112, 96, 120);
        ctx.fillRect(120, 48, 16, 32);
        line(128, 48, 128, 32);
        line(128, 80, 128, 88);
        ctx.fillRect(152, 32, 16, 24);
        line(160, 32, 160, 8);
        line(160, 56, 160, 64);
        leftup();
        rightdown();
    }
    // *** deliberation *** //
    {
        load("deliberation0");
        ctx.fillStyle = GREEN;
        ctx.fillRect(88, 64, 16, 48);
        line(96, 64, 96, 48);
        line(96, 112, 96, 120);
        ctx.fillRect(120, 48, 16, 48);
        line(128, 48, 128, 40);
        line(128, 96, 128, 100);
        ctx.fillRect(152, 32, 16, 16);
        line(160, 32, 160, 28);
        line(160, 48, 160, 54);
        leftup();
        rightdown();
    }
}