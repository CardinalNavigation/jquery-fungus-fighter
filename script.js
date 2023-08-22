$(document).ready(onReady);

// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM

let fungusHP = 100;
let fighterAP = 100;

function onReady() {
    render()
    $('.attack-btn.arcane-scepter').on('click', arcaneScepter)
    $('.attack-btn.entangle').on('click', entangle)
    $('.attack-btn.dragon-blade').on('click', dragonBlade)
    $('.attack-btn.star-fire').on('click', starFire)
}

function arcaneScepter(event) {
    fighterAP = fighterAP - 12;
    fungusHP = fungusHP - 14;
    render();
}

function entangle(event) {
    fighterAP = fighterAP - 23;
    fungusHP = fungusHP - 9;
    render();
}

function dragonBlade(event) {
    fighterAP = fighterAP - 38;
    fungusHP = fungusHP - 47;
    render();
}

function starFire() {
    fighterAP = fighterAP - 33;
    fungusHP = fungusHP - 25;
    render();
}

// Render Function:
// Has to clear the div field, Then give update record of
// both HP and AP

function render() {

    if (fighterAP < 0) {

    }

    if (fighterAP <= 0) {
        fighterAP = 0
        $('button').prop("disabled", true);
    }

    if (fighterAP == 0) {
        $('.freaky-fungus.walk').remove()
        $('.enemy').append('<div class="freaky-fungus jump"></div>');
    }

    if (fungusHP < 0) {
        fungusHP = 0
    }

    if (fungusHP == 0) {
        $('.freaky-fungus.walk').remove()
        $('.enemy').append('<div class="freaky-fungus dead"></div>');
    }

    $('.ap-text').empty()
    $('.ap-text').append(fighterAP + "AP");
    $('.hp-text').empty()
    $('.hp-text').append(fungusHP + "HP");


}

// **Handle click events:** 


// Assign Global Variables
// HP=100 ✅
// AP=100 ✅

//  When you click an attack button:
    // Make Buttons Attached to Attacks✅
    // Need to Set up Listener for all 4 attacks✅
    // Make sure buttons dont have event default ??? event.preventDefault();✅
    // Functions should be the same except for their values (AP And HP) ✅

//   update _state_ variable(s) to make the Freaky Fungus ✅
//   lose hit points (HP), ✅
//   and to reduce your attack points (AP). ✅

// - HP and AP values may not be negative (set to zero, if they would otherwise be negative)
    //If statement outside of the other functions
    // If (HP <= 0 || AP <= 0){
        // Set value to 0
        // make fungus dance
    // }
//  Make it so that AP and HP are not "Hard Coded" into the DOM ✅


// **Render state changes to the DOM**

// - Update the text above the attack buttons (eg, "100 AP")
// - Update the text above the enemy fungus (eg, "100 HP")
// - If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.
// - If you run out of AP, the monster wins and humanity is doomed 😢 Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.
//   - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 