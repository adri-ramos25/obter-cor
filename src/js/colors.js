const btnRedColor = document.getElementsByClassName("btn-red");
const btnBlueColor = document.getElementsByClassName("btn-blue");
const btnGreenColor = document.getElementsByClassName("btn-green");
const btnYellowColor = document.getElementsByClassName("btn-yellow");
const btnPurpleColor = document.getElementsByClassName("btn-purple");
const btnOrangeColor = document.getElementsByClassName("btn-orange");
const btnRoseColor = document.getElementsByClassName("btn-rose");
const btnGrayColor = document.getElementsByClassName("btn-gray");
const btnBrownColor = document.getElementsByClassName("btn-brown");
const btnBlackColor = document.getElementsByClassName("btn-black");


const title = document.getElementById("title");
const body = document.getElementById("body");
const header = document.getElementById("header");
const titleChooseColorPage = document.getElementById("title-choose-colors-page");
const chooseColorPage = document.getElementById("choose-colors-page");
const boxColorCode = document.getElementById("box-color-code");
const boxChoosedColor = document.getElementById("box-choosed-color");
const choosedColor = document.getElementById("choosed-color");
const btnChooseOtherColor = document.getElementById("btn-choose-other-color");


let redColors = {
    codeRed: ["#ff0000", "#ff4d4d", "#ff9999", "#ff6666", "#cc0000", "#990000", "#ff3333", "#b20000", "#e60000", "#800000"]
}
let blueColors = {
    codeBlue: ["#0000ff", "#6666ff", "#9999ff", "#4d4Dff", "#0000cc", "#000099", "#3333ff", "#1a1aff", "#0033cc", "#003399"]
}
let greenColors = {
    codeGreen: ["#00ff00", "#66ff66", "#99ff99", "#33cc33", "#00cc00", "#009900", "#66cc66", "#33ff33", "#007f00", "#004d00"]
}
let yellowColors = {
    codeYellow: ["#ffff00", "#ffff99", "#ffff66", "#cccc00", "#ffcc33", "#ffcc66", "#ff9900", "#ffb84d", "#ffd700", "#ffe066"]
}
let purpleColors = {
    codePurple: ["#800080", "#993399", "#bf40bf", "#cc66cc", "#e6b3e6", "#660066", "#aa00aa", "#990099", "#d94ed9", "#b266b2"]
}
let orangeColors = {
    codeOrange: ["#ffa500", "#ff7f50", "#ff6347", "#ff4500", "#ff8c00", "#ffdab9", "#ffb347", "#ffb76b", "#ffa07a", "#e59400"]
}
let roseColors = {
    codeRose: ["#ffc0cb", "#ffb6c1", "#ff69b4", "#ff1493", "#db7093", "#ff87b3", "#f2a2e8", "#f497d1", "#e75480", "#ffc3a0"]
}
let grayColors = {
    codeGray: ["#808080", "#a9a9a9", "#c0c0c0", "#d3d3d3", "#696969", "#b0b0b0", "#999999", "#e0e0e0", "#f5f5f5", "#505050"]
}
let brownColors = {
    codeBrown: ["#8b4513", "#a0522d", "#d2691e", "#cd853f", "#f4a460", "#deB887", "#ffe4C4", "#8b0000", "#a52a2a", "#654321"]
}
let blackColors = {
    codeBlack: ["#000", "#0d0d0d", "#1a1a1a", "#262626", "#333333", "#404040", "#4d4d4d", "#595959", "#666666", "#000"]
}


btnChooseOtherColor.addEventListener("click", () => {
    title.textContent = "Obter Cor - Escolher Cor";
    body.style.height = "100%";
    header.style.marginTop = "30px";
    header.style.marginBottom = "30px";
    titleChooseColorPage.style.display = "block";
    chooseColorPage.style.display = "block";
    boxChoosedColor.style.display = "none";
})


function openCodesPage() {
    title.textContent = "Obter Cor - Cor Escolhida";
    body.style.height = "100vh";
    header.style.marginTop = "0";
    header.style.marginBottom = "0";
    titleChooseColorPage.style.display = "none";
    chooseColorPage.style.display = "none";
    boxChoosedColor.style.display = "block";
    boxChoosedColor.style.display = "flex";
    boxChoosedColor.style.flexDirection = "column";
    boxChoosedColor.style.alignItems = "center";
}