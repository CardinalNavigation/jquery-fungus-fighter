$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;


// Make sure you check the index.html file! 
// There are lots of buttons and things ready for you to hook into here!


// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM

let fungusHP= 100;
let fighterAP= 100;

function onReady() {
    render()
    $('.attack-btn.arcane-scepter').on('click', arcaneScepter)
    $('.attack-btn.entangle').on('click', entangle)
    $('.attack-btn.dragon-blade').on('click', dragonBlade)
    $('.attack-btn.star-fire').on('click', starFire)
    
 
}

function arcaneScepter(event){
    event.preventDefault();
    fighterAP = fighterAP-12;
    fungusHP = fungusHP-14;
    // console.log(fighterAP)
    // console.log(fungusHP)
    render();
}

function entangle(event){
    event.preventDefault();
    fighterAP = fighterAP-23;
    fungusHP = fungusHP-9;
    // console.log(fighterAP)
    // console.log(fungusHP)
    render();
}

function dragonBlade(event){
    event.preventDefault();
    fighterAP = fighterAP-38;
    fungusHP = fungusHP-47;
    // console.log(fighterAP)
    // console.log(fungusHP)
    render();
}

function starFire(event){
    event.preventDefault();
    fighterAP = fighterAP-33;
    fungusHP = fungusHP-25;
    // console.log(fighterAP)
    // console.log(fungusHP)
    render();
}

function render(){
    $('.ap-text').empty()
    $('.ap-text').append(fighterAP + "AP");
    $('.hp-text').empty()
    $('.hp-text').append(fungusHP+ "HP");

}

// **Handle click events:** 


// Assign Global Variables
// HP=100 ✅
// AP=100 ✅

//  When you click an attack button:
    // Make Buttons Attached to Attacks
    // Need to Set up Listener for all 4 attacks
    // Make sure buttons dont have event default ??? event.preventDefault();
    // Button handlers
    // Functions should be the same except for their values (AP And HP)
    
    // Figure out what each button does
    // Data for writing functions below:

        // Arcane Scepter✅

        // - **AP Cost:** 12
        // - **HP Damage:** 14  
        // Both of these values change when the button is run
        
        //  Entangle✅
        
        // - **AP Cost:** 23
        // - **HP Damage:** 9
        // Both of these values change when the button is run
        
        // Dragon Blade✅
        
        // - **AP Cost:** 38
        // - **HP Damage:** 47
        // Both of these values change when the button is run

        // Star Fire
        
        // - **AP Cost:** 33
        // - **HP Damage:** 25
        // Both of these values change when the button is run  

//   update _state_ variable(s) to make the Freaky Fungus 
//   lose hit points (HP), 
//   and to reduce your attack points (AP). 


// - AP and HP values of each attack 
// - State may be held in one our more variables of your choosing: Easier to keep them seperate

// - HP and AP values may not be negative (set to zero, if they would otherwise be negative)
    //If statement outside of the other functions
    // If (HP <= 0 || AP <= 0){
        // Set value to 0
        // make fungus dance
    // }
//  Make it so that AP and HP are not "Hard Coded" into the DOM


// **Render state changes to the DOM**

// - Update the text above the attack buttons (eg, "100 AP")
// - Update the text above the enemy fungus (eg, "100 HP")
// - If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the `walk` class with a `dead` class on the freaky-fungus element, to make them fall over and die.
// - If you run out of AP, the monster wins and humanity is doomed 😢 Replace the `walk` class with a `jump` class on the freaky-fungus element, to make them jump for the glory of the fungal race.
//   - You may no longer attack, if AP is `0`. Give all of the attack buttons a [`disabled`](https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 