/**
 * Logic for choosing anti-cheat most suitable for you.
 */

const anticheats = ['Vulcan', 'Karhu', 'Sparky', 'Verus (Basic)', 'Verus (Premium)', 'Kauri (Ara)'];
var excluded = [];
var strict = false;

function boot() {
    strict = false;
}

// Called when the "Let's go" button is clicked.
function go() {
    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">Are ghost detections important?</h1>
<a href="javascript:oneChosen('yes');" class="button is-black">Yeah.</a>
<a href="javascript:oneChosen('no');" class="button is-black">Nope.</a>
`;
    }, 1200);
}

function oneChosen(answer) {
    if (answer === 'yes') {
        excluded.push('Verus (Basic)');
        if (strict) excluded.push("Verus (Premium)");
        if (strict) excluded.push("Kauri (Ara)");
    }

    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">Are false flags a deal-breaker?</h1>
<a href="javascript:twoChosen('yes');" class="button is-black">Yeah.</a>
<a href="javascript:twoChosen('no');" class="button is-black">Nope.</a>
`;
    }, 1200);

}

function twoChosen(answer) {
    if (answer === 'yes') {
        if (strict) excluded.push('Vulcan');
    }

    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">How many players does your server pull?</h1>
<a href="javascript:threeChosen('0');" class="button is-black">N/A (Unreleased)</a>
<a href="javascript:threeChosen('1');" class="button is-black">1-15</a>
<a href="javascript:threeChosen('2');" class="button is-black">16-30</a>
<a href="javascript:threeChosen('3');" class="button is-black">31-50</a>
<a href="javascript:threeChosen('4');" class="button is-black">51-100</a>
<a href="javascript:threeChosen('5');" class="button is-black">101+</a>
`;
    }, 1200);
}

function threeChosen(answer) {
    if (answer !== '5') {
        excluded.push('Sparky');
    }

    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">Is support important?</h1>
<a href="javascript:fourChosen('yes');" class="button is-black">Yeah.</a>
<a href="javascript:fourChosen('no');" class="button is-black">Not really.</a>
`;
    }, 1200);
}

function fourChosen(answer) {
    if (answer === 'yes') {
        if (!excluded.includes('Verus (Basic)')) excluded.push('Verus (Basic)');
        if (!excluded.includes('Verus (Premium)')) excluded.push("Verus (Premium)");
    }

    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">What type of server do you run?</h1>
<a href="javascript:fiveChosen('hcf');" class="button is-black">HCF</a>
<a href="javascript:fiveChosen('prac');" class="button is-black">Practice</a>
<a href="javascript:fiveChosen('other');" class="button is-black">Other</a>
`;
    }, 1200);
}

function fiveChosen(answer) {
    if (answer === 'hcf') {
        if (!excluded.includes('Vulcan') && strict) excluded.push('Vulcan');
    }

    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">What's your budget?</h1>
<p class="subtitle" style="color:white;">If monthly, price will be the yearly total.</p>
<a href="javascript:sixChosen('zero');" class="button is-black">N/A (No set budget)</a>
<a href="javascript:sixChosen('one');" class="button is-black">$10-20</a>
<a href="javascript:sixChosen('two');" class="button is-black">$40-60</a>
<a href="javascript:sixChosen('three');" class="button is-black">$61-100</a>
<a href="javascript:sixChosen('four');" class="button is-black">$101+</a>

`;
    }, 1200);
}

function sixChosen(answer) {
    if (answer === "one") {
        if (!excluded.includes('Sparky')) excluded.push("Sparky");
        if (!excluded.includes('Kauri (Ara)')) excluded.push("Kauri (Ara)");
        if (!excluded.includes('Verus (Basic)')) excluded.push("Verus (Basic)");
        if (!excluded.includes('Verus (Premium)')) excluded.push("Verus (Premium)");
    } else if (answer === "two") {
        if (!excluded.includes('Kauri (Ara)')) excluded.push("Kauri (Ara)");
        if (!excluded.includes('Verus (Premium)')) excluded.push("Verus (Premium)");
    } else if (answer == "three") {
        if (!excluded.includes('Kauri (Ara)')) excluded.push("Kauri (Ara)");
        if (!excluded.includes('Verus (Premium)')) excluded.push("Verus (Premium)");
    }

    end();
}

function end() {
    c = document.getElementById('main');
    c.innerHTML = '<img src="img/load.gif" alt="loading" style="width: 100px;">'

    let result = '';

    for (var ac in anticheats) {
        if (excluded.includes(anticheats[ac])) continue;
        result += ('&bullet; ' + anticheats[ac] + '<br>');
    }

    setTimeout(()=>{
        c.innerHTML = `
<h1 class="title is-2" style="color:white;">Here's what fits your criteria:</h1>
<p class="subtitle" style="color:white;">${result}</p>
`;
    }, 1000);
}

function toggleS() {
    strict = !strict;
    s = document.getElementById('strict');

    s.innerHTML = 'Strict ' + (strict ? "ON" : "OFF");
}