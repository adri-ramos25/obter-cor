const btnRed1 = document.getElementById("btn-red-1");
const btnRed2 = document.getElementById("btn-red-2");
const btnRed3 = document.getElementById("btn-red-3");

const btnGreen1 = document.getElementById("btn-green-1");
const btnGreen2 = document.getElementById("btn-green-2");
const btnGreen3 = document.getElementById("btn-green-3");

const btnBlue1 = document.getElementById("btn-blue-1");
const btnBlue2 = document.getElementById("btn-blue-2");
const btnBlue3 = document.getElementById("btn-blue-3");

const boxRgb = document.getElementById("box-rgb-code");
const boxHex = document.getElementById("box-hex-code");
const choosedColor = document.getElementById("choosed-color");

const chooseOtherColor = document.getElementById("choose-other-color");

let codes = {

    rgb: ["255,0,0", "140,0,0", "145,45,45", "0,50,5", "0,75,10", "0,185,25", "0,5,52", "0,5,90", "35,40,115"],

    hex: ["#FF0000", "#8C0000", "#912D2D", "#003205", "#004B0A", "#00B919", "#000534", "#00055A", "#232873"],

    color: ["rgb(255,0,0)", "rgb(140,0,0)", "rgb(145,45,45)", "rgb(0,50,5)", "rgb(0,75,10)", "rgb(0,185,25)", "rgb(0,5,52)", "rgb(0,5,90)", "rgb(35,40,115)"]
    
}

function openCodesPage() {
    document.getElementById("choose-colors-page").style.display = "none";
    document.getElementById("codes-page").style.display = "block";
}

chooseOtherColor.addEventListener("click", () => {
    document.getElementById("choose-colors-page").style.display = "block";
    document.getElementById("codes-page").style.display = "none";
});


// Red colors

btnRed1.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[0];
    boxHex.innerText = codes.hex[0];
    choosedColor.style.background = codes.color[0];
    openCodesPage();
});

btnRed2.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[1];
    boxHex.innerText = codes.hex[1];
    choosedColor.style.background = codes.color[1];
    openCodesPage();
});

btnRed3.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[2];
    boxHex.innerText = codes.hex[2];
    choosedColor.style.background = codes.color[2];
    openCodesPage();
});


// Green colors

btnGreen1.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[3];
    boxHex.innerText = codes.hex[3];
    choosedColor.style.background = codes.color[3];
    openCodesPage();
});

btnGreen2.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[4];
    boxHex.innerText = codes.hex[4];
    choosedColor.style.background = codes.color[4];
    openCodesPage();
});

btnGreen3.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[5];
    boxHex.innerText = codes.hex[5];
    choosedColor.style.background = codes.color[5];
    openCodesPage();
});


// Blue colors

btnBlue1.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[6];
    boxHex.innerText = codes.hex[6];
    choosedColor.style.background = codes.color[6];
    openCodesPage();
});

btnBlue2.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[7];
    boxHex.innerText = codes.hex[7];
    choosedColor.style.background = codes.color[7];
    openCodesPage();
});

btnBlue3.addEventListener("click", () => {
    boxRgb.innerText = codes.rgb[8];
    boxHex.innerText = codes.hex[8];
    choosedColor.style.background = codes.color[8];
    openCodesPage();
});