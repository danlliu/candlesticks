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
        temp += `<img src="img/${idname}${i}.png" width="256" height="128" style="border: 1px #000 solid">\n`;
        if (temp != numcanvases - 1) {
            temp += "<br/>"
        }
    }
    temp += `</div>
            <div class="confirmation">
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
let concealbabyswallow = new Pattern(
    "concealbabyswallow",
    "Concealing Baby Swallow",
    "The Concealing Baby Swallow is a bottom reversal occuring after a downtrend. It starts with two red Marubozus. The third day is a Reverse Hammer, which shows that the downtrend is slowing down. The third day gaps down to open but trades up into the body of the second day. The fourth day is a red candle that completely engulfs the Reverse Hammer, including its shadows. After this point, expect buying to start appearing. This pattern is very rare.",
    "no"
);
let sticksandwich = new Pattern(
    "sticksandwich",
    "Stick Sandwich",
    "The Stick Sandwich consists of two red candles with a green candle in between. The two red candle close at the same price, while the green candle opens above the first day's close and closes above the first day's open. The final red candle completely engulfs the green candle.",
    "yes"
)


let simples = [black_marubozu, white_marubozu, closing_marubozu, opening_marubozu, spinning_top];
let major_reverses = [doji_star, gravestone, dragonfly, bullish_engulfing, bearish_engulfing, hammer, hangingman, piercing, dark_cloud, bullish_harami, bearish_harami, morning_star, evening_star, kicker, shooting_star, invert_hammer];
let secondary_reverses = [tristar, threeblackcrows, threeidenticalcrows, twocrows, upsidegaptwocrows, meetinglines, belthold, unique3river, breakaway, threeinup, threeindown, threestars, threewhitesoldiers, advance, deliberation, concealbabyswallow, sticksandwich];

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