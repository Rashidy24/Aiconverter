
let buttonUsd = document.getElementById('usd');
let buttonEgp = document.getElementById('egp');
let buttonEuro = document.getElementById('euro');
let buttonAed = document.getElementById('aed');

//spechial
let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

dollar.onkeyup = ( ) => {
    pound.value = dollar.value * 48;
}
pound.onkeyup = ( ) => {
    dollar.value = pound.value / 48;
}

let dollarX = document.getElementById('dollar0');
let emarites = document.getElementById('emarites');

dollarX.onkeyup = ( ) => {
    emarites.value = dollarX.value * 3.67;
}
emarites.onkeyup = ( ) => {
    dollarX.value = emarites.value / 3.67;
}

let dollarXx = document.getElementById('dollar1');
let euorope = document.getElementById('euorope');

dollarXx.onkeyup = ( ) => {
    euorope.value = dollarXx.value * 0.92;
}
euorope.onkeyup = ( ) => {
    dollarXx.value = euorope.value / 0.92;
}

let e1 = document.getElementById('c1');
let e2 = document.getElementById('c2');
let e3 = document.getElementById('c3');
let e4 = document.getElementById('c4');
let e5 = document.getElementById('c5');
let e6 = document.getElementById('c6');

e1.onkeyup = ( ) => {
    e2.value = e1.value / 48
}
e2.onkeyup = ( ) => {
    e1.value = e2.value * 48
}

e3.onkeyup = ( ) => {
    e4.value = e3.value / 52.47
}
e4.onkeyup = ( ) => {
    e3.value = e4.value * 52.47
}

e5.onkeyup = ( ) => {
    e6.value = e5.value / 13.14
}
e6.onkeyup = ( ) => {
    e5.value = e6.value * 13.14
}

let b1 = document.getElementById('oro1');
let b2 = document.getElementById('oro2');
let b3 = document.getElementById('oro3');
let b4 = document.getElementById('oro4');
let b5 = document.getElementById('oro5');
let b6 = document.getElementById('oro6');

b1.onkeyup = function(){
    b2.value = b1.value * 1.09
}
b2.onkeyup = function(){
    b1.value = b2.value / 1.09
}

b3.onkeyup = function(){
    b4.value = b3.value * 52.47
}
b4.onkeyup = function(){
    b3.value = b4.value / 52.47
}

b5.onkeyup = function(){
    b6.value = b5.value * 3.99
}
b6.onkeyup = function(){
    b5.value = b6.value / 3.99
}

let A1 = document.getElementById('a1');
let A2 = document.getElementById('a2');
let A3 = document.getElementById('a3');
let A4 = document.getElementById('a4');
let A5 = document.getElementById('a5');
let A6 = document.getElementById('a6');

A1.onkeyup = function() {
    A2.value = A1.value * 0.27
}
A2.onkeyup = function() {
    A1.value = A2.value / 0.27
}

A3.onkeyup = function() {
    A4.value = A3.value * 13.14
}
A4.onkeyup = function() {
    A3.value = A4.value / 13.14
}

A5.onkeyup = function() {
    A6.value = A5.value * 0.25
}
A6.onkeyup = function() {
    A5.value = A6.value / 0.25
}
let card = document.getElementById('card');
let cardX = document.getElementById('cardX');
let cardXx = document.getElementById('cardXx');
let cardXxD = document.getElementById('cardXxD');

let xContainer = document .getElementById('x0');
let xOneContainer = document .getElementById('x1');
let xTwoContainer = document .getElementById('x2');
let xThirdContainer = document .getElementById('x3');

buttonUsd.addEventListener('click', function(){
    xContainer.style.display = 'block'
    card.style.display = 'block'
    xOneContainer.style.display = 'none';
    xTwoContainer.style.display = 'none';
    xThirdContainer.style.display = 'none';
    cardX.style.display = 'none';
    cardXx.style.display = 'none';
    cardXxD.style.display = 'none';
})

buttonEgp.addEventListener('click', function(){
    xOneContainer.style.display = 'block';
    cardX.style.display = 'block';
    xContainer.style.display = 'none';
    xTwoContainer.style.display = 'none';
    xThirdContainer.style.display = 'none';
    card.style.display = 'none';
    cardXx.style.display = 'none';
    cardXxD.style.display = 'none';
})

buttonEuro.addEventListener('click', function(){
    xTwoContainer.style.display = 'block';
    cardXx.style.display = 'block';
    xContainer.style.display = 'none';
    xOneContainer.style.display = 'none';
    xThirdContainer.style.display = 'none';
    card.style.display = 'none';
    cardX.style.display = 'none';
    cardXxD.style.display = 'none';
})

buttonAed.addEventListener('click', function(){
    xThirdContainer.style.display = 'block';
    cardXxD.style.display = 'block';
    xTwoContainer.style.display = 'none';
    xContainer.style.display = 'none';
    xOneContainer.style.display = 'none';
    card.style.display = 'none';
    cardX.style.display = 'none';
    cardXx.style.display = 'none';
})

// // Mood
// let sun = document.getElementById('sun');
// let moon = document.getElementById('moon');
// // 
// let colorSun = document.getElementById('colorSun');
// let color = document.getElementById('color');
// let color1 = document.getElementById('color1');
// let color2 = document.getElementById('color2');
// let color3 = document.getElementById('color3');
// let color4 = document.getElementById('color4');
// let color5 = document.getElementById('color5');
// let color6 = document.getElementById('color6');
// let color7 = document.getElementById('color7');
// let color8 = document.getElementById('color8');
// let color9 = document.getElementById('color9');
// let col = document.getElementById('col');
// let cX = document.getElementById('cX');
// // MoodOn
// sun.addEventListener('click', function(){
//     document.body.style.background = '#EEEDEB';
//     color.style.background = '#fff'
//     color1.style.background = '#fff'
//     color2.style.background = '#fff'
//     color3.style.background = '#fff'
//     color4.style.background = '#fff'
//     color5.style.background = '#fff'
//     color6.style.background = '#fff'
//     color7.style.background = '#fff'
//     color8.style.background = '#fff'
//     color9.style.background = '#fff'
//     col.style.background = '#fff'
//     cX.style.background = '#fff'
//     colorSun.style.background = '#fff'
//     colorSun.style.border= '#fafafa 2px solid '
//     colorSun.style.boxShadow = '0 0 5px #123 '
//     document.body.style.color = '#123'
// })

// moon.addEventListener('click', function(){
//     document.body.style.background = '#0F2027 '
//         colorSun.style.border= '#123 2px solid '
//     colorSun.style.background = '#123';
//     color.style.background = '#123'
//     color1.style.background = '#123'
//     color2.style.background = '#123'
//     color3.style.background = '#123'
//     color4.style.background = '#123'
//     color5.style.background = '#123'
//     color6.style.background = '#123'
//     color7.style.background = '#123'
//     color8.style.background = '#123'
//     color9.style.background = '#123'
//     col.style.background = '#123'
//     cX.style.background = '#123'
// })
