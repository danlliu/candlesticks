const RED = "#E22E33";
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

function Pattern(idname, title, description, strength, confirm, draw) {
    return {
        "idname": idname,
        "title": title,
        "description": description,
        "str": strength,
        "conf": confirm,
        "draw": draw
    }
}

let black_marubozu = new Pattern(
    "bl_maru",
    "Black Marubozu",
    "The black marubozu is a weak indicator of bearish continuation or bullish reversal. A long black candle can indicate the final sell-off of a stock, leading to a bullish reversal.\n",
    "weak",
    "not necessary",
    (id) => {
        let ctx = document.getElementById(id).getContext("2d");
        ctx.fillStyle = RED;
        ctx.fillRect(120, 32, 16, 64);
        return 0;
    }
);
let white_marubozu = new Pattern(
    "wh_maru",
    "White Marubozu",
    "The white marubozu is a very strong indicator of bullish continuation or bearish reversal. Typically, a long white candle marks the beginning of an uptrend.",
    "very strong",
    "not necessary",
    (id) => {
        let ctx = document.getElementById(id).getContext("2d");
        ctx.fillStyle = GREEN;
        ctx.fillRect(120, 32, 16, 64);
        return 0;
    }
);

let simples = [black_marubozu, white_marubozu];

simples.forEach((p) => {
    SIMPLE.innerHTML += template(p.idname, p.title, p.description, p.str, p.conf);
    SIMPLE_NAV_LIST.innerHTML += navlink(p.idname, p.title);
    p["draw"](p["idname"]);
});